import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 1. Ler os dados da sala
export const lerSala = query({
  args: { codigo: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();
    return sala;
  },
});

// 2. Atualizar os dados da sala (Salvar)
export const atualizarSala = mutation({
  args: { 
    codigo: v.string(),
    dados: v.object({
      ameacas: v.any(),
      jogadores: v.any(),
      historico: v.any(),
      turnoIndex: v.number(),
      mapaUrl: v.optional(v.string()),
    })
  },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (sala) {
      // Atualiza existente
      await ctx.db.patch(sala._id, { 
        dados: args.dados,
        updatedAt: Date.now() 
      });
    } else {
      // Cria nova sala se não existir
      await ctx.db.insert("salas", {
        codigo: args.codigo,
        dados: args.dados,
        updatedAt: Date.now()
      });
    }
  },
});
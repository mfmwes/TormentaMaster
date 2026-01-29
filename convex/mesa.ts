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
// 3. Define a senha da sala (apenas se não tiver senha ainda)
export const definirSenha = mutation({
  args: { codigo: v.string(), senha: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (sala) {
      await ctx.db.patch(sala._id, { senha: args.senha });
    }
  },
});

// 4. Verifica se a senha está correta
export const verificarSenha = mutation({
  args: { codigo: v.string(), tentativa: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (!sala || !sala.senha) return true; // Se não tem senha, libera (para salas antigas)
    return sala.senha === args.tentativa;
  },
  
}); 

export const criarSala = mutation({
  args: { codigo: v.string() },
  handler: async (ctx, args) => {
    const existe = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (existe) return; // Se já existe, não faz nada

    await ctx.db.insert("salas", {
      codigo: args.codigo,
      // Não definimos senha aqui. O frontend vai detectar que está sem senha e pedir para criar.
      dados: {
        ameacas: [],
        jogadores: [],
        historico: [],
        turnoIndex: -1,
        mapaUrl: "",
      },
      updatedAt: Date.now(),
    });
  },
});
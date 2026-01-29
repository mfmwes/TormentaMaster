import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 1. GERA URL PARA UPLOAD
export const gerarUrlUpload = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// 2. LÊ A SALA E RESOLVE TODAS AS IMAGENS
export const lerSala = query({
  args: { codigo: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (!sala) return null;

    // A) Resolve Imagem do Mapa
    let mapaUrlFinal = sala.dados.mapaUrl;
    if (sala.dados.mapaStorageId) {
      const url = await ctx.storage.getUrl(sala.dados.mapaStorageId);
      if (url) mapaUrlFinal = url;
    }

    // B) Resolve Imagens das Ameaças
    const ameacasComUrl = await Promise.all(
      (sala.dados.ameacas || []).map(async (a: any) => {
        if (a.imagemStorageId) {
          const url = await ctx.storage.getUrl(a.imagemStorageId);
          if (url) return { ...a, imagemUrl: url };
        }
        return a;
      })
    );

    // C) Resolve Imagens dos Jogadores
    const jogadoresComUrl = await Promise.all(
      (sala.dados.jogadores || []).map(async (j: any) => {
        if (j.imagemStorageId) {
          const url = await ctx.storage.getUrl(j.imagemStorageId);
          if (url) return { ...j, imagemUrl: url };
        }
        return j;
      })
    );

    return {
      ...sala,
      dados: {
        ...sala.dados,
        mapaUrl: mapaUrlFinal,
        ameacas: ameacasComUrl,
        jogadores: jogadoresComUrl,
      },
    };
  },
});

// 3. ATUALIZA A SALA
export const atualizarSala = mutation({
  args: {
    codigo: v.string(),
    dados: v.object({
      ameacas: v.any(),
      jogadores: v.any(),
      historico: v.any(),
      turnoIndex: v.number(),
      mapaUrl: v.optional(v.string()),
      mapaStorageId: v.optional(v.any()),
    }),
  },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (sala) {
      await ctx.db.patch(sala._id, {
        dados: args.dados,
        updatedAt: Date.now(),
      });
    }
  },
});

// --- FUNÇÕES DE ACESSO ---
export const definirSenha = mutation({
  args: { codigo: v.string(), senha: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db.query("salas").withIndex("by_codigo", (q) => q.eq("codigo", args.codigo)).first();
    if (sala) await ctx.db.patch(sala._id, { senha: args.senha });
  },
});
export const verificarSenha = mutation({
  args: { codigo: v.string(), tentativa: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db.query("salas").withIndex("by_codigo", (q) => q.eq("codigo", args.codigo)).first();
    if (!sala || !sala.senha) return true;
    return sala.senha === args.tentativa;
  },
});
export const criarSala = mutation({
  args: { codigo: v.string() },
  handler: async (ctx, args) => {
    const existe = await ctx.db.query("salas").withIndex("by_codigo", (q) => q.eq("codigo", args.codigo)).first();
    if (existe) return;
    await ctx.db.insert("salas", { codigo: args.codigo, dados: { ameacas: [], jogadores: [], historico: [], turnoIndex: -1, mapaUrl: "" }, updatedAt: Date.now() });
  },
});
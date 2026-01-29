import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 1. GERA URL PARA UPLOAD
export const gerarUrlUpload = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// 2. LÊ A SALA (Prioriza a imagem do Storage se existir)
export const lerSala = query({
  args: { codigo: v.string() },
  handler: async (ctx, args) => {
    const sala = await ctx.db
      .query("salas")
      .withIndex("by_codigo", (q) => q.eq("codigo", args.codigo))
      .first();

    if (!sala) return null;

    // Resolve Imagem do Mapa
    let mapaUrlFinal = sala.dados.mapaUrl;
    if (sala.dados.mapaStorageId) {
      const url = await ctx.storage.getUrl(sala.dados.mapaStorageId);
      if (url) mapaUrlFinal = url;
    }

    // Resolve Imagens das Ameaças (mantém compatibilidade se você usar no futuro)
    const ameacasComUrl = await Promise.all(
      (sala.dados.ameacas || []).map(async (a: any) => {
        if (a.imagemStorageId) {
          const url = await ctx.storage.getUrl(a.imagemStorageId);
          if (url) return { ...a, imagemUrl: url };
        }
        return a;
      })
    );

    return {
      ...sala,
      dados: {
        ...sala.dados,
        mapaUrl: mapaUrlFinal,
        ameacas: ameacasComUrl,
      },
    };
  },
});

// 3. ATUALIZA A SALA (Aceita o StorageId)
export const atualizarSala = mutation({
  args: {
    codigo: v.string(),
    dados: v.object({
      ameacas: v.any(),
      jogadores: v.any(),
      historico: v.any(),
      turnoIndex: v.number(),
      mapaUrl: v.optional(v.string()),
      mapaStorageId: v.optional(v.any()), // Aceita ID ou Null
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

// --- FUNÇÕES DE SENHA E CRIAÇÃO (NÃO ALTERADAS) ---
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
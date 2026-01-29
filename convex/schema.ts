import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  salas: defineTable({
    codigo: v.string(),
    senha: v.optional(v.string()), // <--- ESSA LINHA TEM QUE ESTAR AQUI
    dados: v.object({
      ameacas: v.any(),
      jogadores: v.any(),
      historico: v.any(),
      turnoIndex: v.number(),
      mapaUrl: v.optional(v.string()),
    }),
    updatedAt: v.number(),
  }).index("by_codigo", ["codigo"]),
});
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Tabela de Salas (Mesas)
  salas: defineTable({
    codigo: v.string(), // Ex: "mesa-do-rpg"
    
    // Dados do Jogo (JSON stringificado é mais fácil para migrar rápido)
    // Ou podemos definir campo a campo, mas vamos simplificar:
    dados: v.object({
      ameacas: v.any(), // Array de ameaças
      jogadores: v.any(), // Array de jogadores
      historico: v.any(), // Log
      turnoIndex: v.number(),
      mapaUrl: v.optional(v.string()),
    }),
    
    updatedAt: v.number(),
  }).index("by_codigo", ["codigo"]),
});
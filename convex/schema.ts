import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  opinions: defineTable({
    opinion: s.string(),
    allVotes: s.number(),
    agree: s.number(),
    disagree: s.number(),
  })
  .index("opinion", ["opinion"])
  .index("popularity", ["allVotes"]),
});

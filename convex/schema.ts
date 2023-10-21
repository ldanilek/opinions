import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  opinions: defineTable({
    opinion: v.string(),
    allVotes: v.number(),
    agree: v.number(),
    disagree: v.number(),
  })
  .index("opinion", ["opinion"])
  .index("popularity", ["allVotes"]),
});

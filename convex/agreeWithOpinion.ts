import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, opinion: string | null) => {
    if (!opinion) {
      return;
    }
    let opinionDoc = await db
      .table('opinions').index('opinion')
      .range((q) => q.eq('opinion', opinion))
      .unique();
    opinionDoc.allVotes += 1;
    opinionDoc.agree += 1;
    db.replace(opinionDoc._id, opinionDoc);
  }
)
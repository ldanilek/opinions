import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, {opinion}: {opinion: string | null}) => {
    if (!opinion) {
      return;
    }
    let opinionDoc = await db
      .query('opinions').withIndex('opinion', (q) => q.eq('opinion', opinion))
      .unique();
    opinionDoc!.allVotes += 1;
    opinionDoc!.disagree += 1;
    db.replace(opinionDoc!._id, opinionDoc!);
  }
)

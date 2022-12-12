import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, opinion: string) => {
    let opinionDocs = await db
      .query('opinions').withIndex('opinion', (q) => q.eq('opinion', opinion))
      .collect();
    if (opinionDocs.length > 0) {
      throw Error("duplicate opinion");
    }
    let opinionDoc = {
      opinion,
      allVotes: 0,
      agree: 0,
      disagree: 0,
    };
    db.insert('opinions', opinionDoc);

  }
)

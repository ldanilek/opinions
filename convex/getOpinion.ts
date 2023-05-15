import { query } from './_generated/server'

export default query(async ({ db }, {opinion}: {opinion: string | null}): Promise<any> => {
  if (!opinion) {
    return null;
  }
  let opinionDoc = await db
      .query('opinions').withIndex('opinion', (q) => q.eq('opinion', opinion))
      .unique();
  return opinionDoc;
})

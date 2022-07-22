import { query } from './_generated/server'

export default query(async ({ db }, opinion: string | null): Promise<any> => {
  if (!opinion) {
    return null;
  }
  let opinionDoc = await db
      .table('opinions').index('opinion')
      .range((q) => q.eq('opinion', opinion))
      .unique();
  return opinionDoc;
})

import { query } from './_generated/server'

export default query(async ({ db }): Promise<any> => {
  let opinionDocs = await db
      .query('opinions').withIndex('popularity', q => q).order("desc")
      .collect();
  return opinionDocs;
})

import { query } from './_generated/server'

export default query(async ({ db }): Promise<any> => {
  let opinionDocs = await db
      .table('opinions').index('popularity').range(q => q).order("desc")
      .collect();
  return opinionDocs;
})

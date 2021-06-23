import { getConnection } from "./database/Provider";

/**
 * @description holds context for Apollo Server
 */

export const context = async () => {
  const dbConn = await getConnection();
  console.log(dbConn)
  return { dbConn };
}
const RangesQuery = require("../queries/RangesQueries.ts");
import { IResolvers } from "apollo-server";

/**
 * @description holds ranges resolver
 */

export const RangesResolver: IResolvers = {
  Query: RangesQuery
}
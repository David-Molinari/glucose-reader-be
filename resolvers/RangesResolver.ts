import { RangesQuery } from "../queries/RangesQueries";
const { IResolvers } = require("apollo-server");

/**
 * @description holds ranges resolver
 */

export const RangesResolver: typeof IResolvers = {
  Query: RangesQuery
}
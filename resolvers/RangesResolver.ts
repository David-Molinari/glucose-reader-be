import { RangesQuery } from "../queries/RangesQueries.js";
import { IResolvers } from "apollo-server";

/**
 * @description holds ranges resolver
 */

export const RangesResolver: IResolvers = {
  Query: RangesQuery
}
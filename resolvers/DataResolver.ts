import { DataQuery } from "../queries/DataQueries.js";
import { DataMutation } from "../mutations/DataMutation.js";
import { IResolvers } from "apollo-server";

/**
 * @description holds data resolver
 */

export const DataResolver: IResolvers = {
  Query: DataQuery,
  Mutation: DataMutation
}
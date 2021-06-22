import { DataQuery } from "../queries/DataQueries";
import { DataMutation } from "../mutations/DataMutation";
const { IResolvers } = require("apollo-server");

/**
 * @description holds data resolver
 */

export const DataResolver: typeof IResolvers = {
  Query: DataQuery,
  Mutation: DataMutation
}
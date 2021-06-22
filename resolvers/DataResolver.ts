const DataQuery = require("../queries/DataQueries.ts");
const DataMutation = require("../mutations/DataMutation.ts");
import { IResolvers } from "apollo-server";

/**
 * @description holds data resolver
 */

export const DataResolver: IResolvers = {
  Query: DataQuery,
  Mutation: DataMutation
}
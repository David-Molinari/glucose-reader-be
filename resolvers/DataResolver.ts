import { DataQuery } from "../queries/DataQueries";
import { DataMutation } from "../mutations/DataMutation";
// import { IResolvers } from "apollo-server";

/**
 * @description holds data resolver
 */

export const DataResolver/*: IResolvers*/ = {
  Query: DataQuery,
  Mutation: DataMutation
}
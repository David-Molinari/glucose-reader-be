import { gql } from "apollo-server";

/**
 * @description holds glucose data schema
 */

export const DataSchema = gql`
  type Data {
    _id: ID!,
    index: Int!,
    result_id: String!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }

  type Edge {
    cursor: String
    node: Data
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type Response {
    pageInfo: PageInfo
    edges: [Edge]
  }

  input CreateDataInput {
    index: Int!,
    result_id: String!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }

  input UpdateDataInput {
    _id: ID!,
    index: Int!,
    result_id: String!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }
  
  extend type Query {
    data(first: Int!, after: String): Response
    data_(_id: String!): Data
  }

  extend type Mutation {
    createData(input: CreateDataInput!): Data
    updateData(input: UpdateDataInput!): Data
    deleteData(_id: String!): Data
  }
`
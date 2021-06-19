import { gql } from "apollo-server";
import {ObjectID} from 'mongodb';

/**
 * @description holds glucose data schema
 */

export const DataSchema = gql`
  type Data {
    _id: ID!,
    result_id: Int!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }

  input CreateDataInput {
    result_id: Int!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }

  input UpdateDataInput {
    _id: ID!,
    result_id: Int!,
    result_dt_tm: String!,
    glucose_level: Int!,
    glucose_level_unit: String!,
    source: String!
  }
  
  extend type Query {
    data: [Data]!
    data_(_id: String!): Data
  }

  extend type Mutation {
    createData(input: CreateDataInput!): Data
    updateData(input: UpdateDataInput!): Data
    deleteData(_id: String!): Data
  }
`
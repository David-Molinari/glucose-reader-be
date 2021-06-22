const { gql } = require("apollo-server")

/**
 * @description holds glucose ranges schema
 */

export const RangesSchema = gql`

  type Range {
      _id: ID!,
      low_bound: Int!,
      high_bound: Int!,
      color: String!
  }

  extend type Query {
    ranges: [Range!]!
  }

`
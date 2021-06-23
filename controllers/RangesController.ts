import RangesModel, { Ranges } from "../models/RangesModel"
import { ApolloError } from "apollo-server";

/**
 * 
 * @description holds crud operations for the ranges entity 
 */

/**
 * gets all ranges
 * @param connection database connection
 * @returns {IRanges[]} ranges list
 */
export const getAllRanges = async (connection) => { 
  let ranges: Ranges[];

  try {
    ranges = await RangesModel(connection).find();
    if (ranges != null && ranges.length > 0) {
      ranges = ranges.map(u => {
        return u
      }); 
    }
  } catch(error) {
    console.error("> getAllBooks error: ", error);
    throw new ApolloError("Error retrieving all books");
  }

  return ranges;
}
import DataModel, { Data, DataResponse } from "../models/DataModel"
import { ApolloError } from "apollo-server";
import {ObjectID} from 'mongodb';

/**
 * 
 * @description holds crud operations for the data entity 
 */

/**
 * gets all data
 * @param connection database connection
 * @returns {DataResponse} data list
 */
export const getAllData = async (connection, args) => { 
  let data: Data[];
  
  try {
    data = await DataModel(connection).find();
    if (data != null && data.length > 0) {
      const first = args.first || 5;
      const after = args.after || 0;
      const index = data.findIndex((item) => item._id === after);
      const offset = index + 1;

      const dataset = data.slice(offset, offset + first);
      const lastOfData = dataset[dataset.length - 1];
      return {
        pageInfo: {
          endCursor: lastOfData._id,
          hasNextPage: offset + first < data.length,
        },
        edges: dataset.map((datapoint) => ({
          cursor: datapoint._id,
          node: datapoint,
        })),
      };
    }
  } catch(error) {
    console.error("> getAllData error: ", error);
    throw new ApolloError("Error retrieving all data");
  }
}

/**
 * gets data by id
 * @param connection database connection
 * @param _id data id
 * @returns {Data | null} data or null
 */
export const getData = async (connection, _id: ObjectID) => {
  let data: Data | null;
  data = await DataModel(connection).findById(_id);
  try {
    if (data != null) {
      return data
    }
  } catch(error) {
    console.error("> getData error: ", error);
    throw new ApolloError("Error retrieving data with id: " + _id);
  }
}

/**
 * creates data
 * @param connection database connection
 * @param args data
 * @returns {Data} created data
 */
export const createData = async (connection, args) => {
  let createdData: Data;
  createdData = (await DataModel(connection).create(args));
  try {
    return createdData;
  } catch(error) {
    console.error("> createData error: ", error);
    throw new ApolloError("Error saving data with id: " + args._id);
  }
}

/**
 * deletes data
 * @param connection database connection
 * @param _id data id
 * @returns {Data | null} deleted data or null
 */
export const deleteData = async (connection, _id: ObjectID) => {
  let deletedData: Data | null;
  deletedData = await DataModel(connection).findByIdAndRemove(_id);
  try {
    if (deletedData != null) {
      return deletedData;
    }
  } catch(error) {
    console.error("> deleteData error: ", error);
    throw new ApolloError("Error deleting data with id: " + _id);
  }
}

/**
 * updates data
 * @param connection database connection
 * @param args data
 * @returns {Data | null} updated data or null
 */
export const updateData = async (context, args) => {
  let updatedData: Data | null;
  updatedData = await DataModel(context).findByIdAndUpdate(args._id, 
    {
      result_id: args.result_id,
      result_dt_tm: args.result_dt_tm,
      glucose_level: args.glucose_level,
      glucose_level_unit: args.glucose_level_unit,
      source: args.source
    }, 
    {new: true});
  try {
    if (updatedData != null) {
      return updatedData;
    }
  } catch(error) {
    console.error("> updateData error: ", error);
    throw new ApolloError("Error updating data with id: " + args._id);
  }
}
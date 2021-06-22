import DataModel, { IData } from "../models/DataModel"
const { ApolloError } = require("apollo-server");
import {ObjectID} from 'mongodb';


/**
 * 
 * @description holds crud operations for the data entity 
 */

/**
 * gets all data
 * @param connection database connection
 * @returns {IData[]} data list
 */
export const getAllData = async (connection) => { 
  let data: IData[];
  
  try {
    data = await DataModel(connection).find();
    if (data != null && data.length > 0) {
      data = data.map(u => {
        return u
      }); 
    }
  } catch(error) {
    console.error("> getAllData error: ", error);
    throw new ApolloError("Error retrieving all data");
  }

  return data;
}

/**
 * gets data by id
 * @param connection database connection
 * @param _id data id
 * @returns {IData | null} data or null
 */
export const getData = async (connection, _id: ObjectID) => {
  let data: IData | null;
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
 * @returns {IData} created data
 */
export const createData = async (connection, args: IData) => {
  let createdData: IData;
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
 * @returns {IData | null} deleted data or null
 */
export const deleteData = async (connection, _id: ObjectID) => {
  let deletedData: IData | null;
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
 * @returns {IData | null} updated data or null
 */
export const updateData = async (context, args: IData) => {
  let updatedData: IData | null;
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
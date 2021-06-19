import DataModel, { IData } from "../models/DataModel"
import { ApolloError } from "apollo-server";
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
        return u.transform()
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

  try {
    data = await DataModel(connection).findById(_id);
    if (data != null) {
      data = data.transform();
    }
  } catch(error) {
    console.error("> getData error: ", error);
    throw new ApolloError("Error retrieving data with id: " + _id);
  }

  return data;
}

/**
 * creates data
 * @param connection database connection
 * @param args data
 * @returns {IData} created data
 */
export const createData = async (connection, args: IData) => {
  let createdData: IData;
  
  try {
    createdData = (await DataModel(connection).create(args)).transform();
  } catch(error) {
    console.error("> createData error: ", error);
    throw new ApolloError("Error saving data with id: " + args._id);
  }

  return createdData;
}

/**
 * deletes data
 * @param connection database connection
 * @param _id data id
 * @returns {IData | null} deleted data or null
 */
export const deleteData = async (connection, _id: ObjectID) => {
  let deletedData: IData | null;
  
  try {
    deletedData = await DataModel(connection).findByIdAndRemove(_id);
    if (deletedData != null) {
      deletedData = deletedData.transform();
    }
  } catch(error) {
    console.error("> deleteData error: ", error);
    throw new ApolloError("Error deleting data with id: " + _id);
  }

  return deletedData;
}

/**
 * updates data
 * @param connection database connection
 * @param args data
 * @returns {IData | null} updated data or null
 */
export const updateData = async (context, args: IData) => {
  let updatedData: IData | null;
  
  try {
    updatedData = await DataModel(context).findByIdAndUpdate(args._id, 
      {
        result_id: args.result_id,
        result_dt_tm: args.result_dt_tm,
        glucose_level: args.glucose_level,
        glucose_level_unit: args.glucose_level_unit,
        source: args.source
      }, {new: true});
      
    if (updatedData != null) {
      updatedData = updatedData.transform();
    }
  } catch(error) {
    console.error("> updateData error: ", error);
    throw new ApolloError("Error updating data with id: " + args._id);
  }

  return updatedData;
}
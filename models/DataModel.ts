import mongoose from "mongoose";
import {ObjectID} from 'mongodb';

/**
 * @description holds glucose data model
 */

 /**
  * Data interface
  */
export interface IData extends mongoose.Document {
  _id: ObjectID;
  result_id: string,
  result_dt_tm: string;
  glucose_level: Number;
  glucose_level_unit: string;
  source: string;
}

/**
 * data schema
 */
const schema: mongoose.SchemaDefinition = {
  result_id: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  result_dt_tm: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  glucose_level: { type: mongoose.SchemaTypes.Number, required: true },
  glucose_level_unit: { type: mongoose.SchemaTypes.String, required: true },
  source: { type: mongoose.SchemaTypes.String, required: true }
};

// data collection name
const collectionName: string = "data";

const dataSchema: mongoose.Schema = new mongoose.Schema(schema, {collection: 'data'});

/**
 * creates data model
 * @param conn database connection
 * @returns {IData[]} data model
 */
const DataModel = (conn: mongoose.Connection): mongoose.Model<any> =>
  conn.model(collectionName, dataSchema);

export default DataModel;
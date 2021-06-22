import mongoose from "mongoose";
import {ObjectID} from 'mongodb';

/**
 * @description holds glucose ranges model
 */

 /**
  * Ranges interface
  */
export interface IRanges extends mongoose.Document {
  _id: ObjectID;
  low_bound: Number;
  high_bound: Number;
  color: string;
  transform: () => IRanges;
}

/**
 * ranges schema
 */
const schema: mongoose.SchemaDefinition = {
  low_bound: { type: mongoose.SchemaTypes.Number, required: true, unique: true },
  high_bound: { type: mongoose.SchemaTypes.Number, required: true, unique: true },
  color: { type: mongoose.SchemaTypes.String, required: true }
};

// ranges collection name
const collectionName: string = "ranges";

const rangesSchema: mongoose.Schema = new mongoose.Schema(schema, {collection: 'ranges'});

/**
 * creates ranges model
 * @param conn database connection
 * @returns {IRanges[]} ranges model
 */
const RangesModel = (conn: mongoose.Connection): mongoose.Model<any> =>
  conn.model(collectionName, rangesSchema);

export default RangesModel;
import mongoose from "mongoose";
import { ObjectID } from 'mongodb';

/**
 * @description holds glucose ranges model
 */

 /**
  * Ranges interface
  */
export interface Ranges {
  // _id: ObjectID;
  low_bound: Number,
  high_bound: Number,
  color: String
}

interface RangesDocument extends Ranges, mongoose.Document {}

//create an intermediary type to use in schema definition
interface RangesSchemaProps {
  low_bound: typeof Number,
  high_bound: typeof Number,
  color: typeof String
}

/**
 * ranges schema
 */

 type RangesSchemaDefinition = mongoose.SchemaDefinition<RangesSchemaProps>;

 const schemaDefinition: RangesSchemaDefinition = {
  low_bound: Number,
  high_bound: Number,
  color: String
};

const schema = new mongoose.Schema<RangesDocument>(schemaDefinition);

// ranges collection name
const collectionName: string = "ranges";

/**
 * creates ranges model
 * @param conn database connection
 */
const RangesModel = (conn: mongoose.Connection): mongoose.Model<any> =>
  conn.model(collectionName, schema);

export default RangesModel;
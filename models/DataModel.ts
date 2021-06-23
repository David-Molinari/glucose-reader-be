import mongoose from "mongoose";
import { ObjectID } from 'mongodb';

/**
 * @description holds glucose data model
 */

 /**
  * Data interface
  */
  export interface Data {
    // _id: ObjectID
    result_id: String,
    result_dt_tm: String,
    glucose_level: Number,
    glucose_level_unit: String,
    source: String
}

interface DataDocument extends Data, mongoose.Document {}

//create an intermediary type to use in schema definition
interface DataSchemaProps {
  result_id: typeof String,
  result_dt_tm: typeof String,
  glucose_level: typeof Number,
  glucose_level_unit: typeof String,
  source: typeof String
}

/**
 * data schema
 */

 type DataSchemaDefinition = mongoose.SchemaDefinition<DataSchemaProps>;

 const schemaDefinition: DataSchemaDefinition = {
  result_id: String,
  result_dt_tm: String,
  glucose_level: Number,
  glucose_level_unit: String,
  source: String
};

const schema = new mongoose.Schema<DataDocument>(schemaDefinition);

// data collection name
const collectionName: string = "data";

/**
 * creates data model
 * @param conn database connection
 */
const DataModel = (conn: mongoose.Connection): mongoose.Model<any> => {
  console.log(conn)
  return conn.model(collectionName, schema);
}

export default DataModel;
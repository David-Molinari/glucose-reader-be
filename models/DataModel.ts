import mongoose from "mongoose";

/**
 * @description holds glucose data model
 */

 /**
  * Data interface
  */
  export interface Data {
    _id: String,
    index: Number,
    result_id: String,
    result_dt_tm: String,
    glucose_level: Number,
    glucose_level_unit: String,
    source: String
  }

  interface Edge {
    cursor: String
    node: Data
  }

  interface PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  export interface DataResponse {
    edges: [Edge]
    pageInfo: PageInfo
  }

interface DataDocument extends Data, mongoose.Document {
  _id: String;
}

//create an intermediary type to use in schema definition
interface DataSchemaProps {
  _id: typeof String,
  index: typeof Number,
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
  _id: typeof String,
  index: typeof Number,
  result_id: String,
  result_dt_tm: String,
  glucose_level: Number,
  glucose_level_unit: String,
  source: String
};

const schema = new mongoose.Schema<DataDocument>(schemaDefinition, {collection: "data"});

// data collection name
const collectionName: string = "data";

/**
 * creates data model
 * @param conn database connection
 */
const DataModel = (conn: mongoose.Connection): mongoose.Model<any> =>
  conn.model(collectionName, schema);

export default DataModel;
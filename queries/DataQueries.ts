import { getAllData, getData } from "../controllers/DataController";

/**
 * @description holds book queries
 */

export const DataQuery = {
  data: {
    resolve: async (parent, args, context, info) => {
      console.log(context)
      return await getAllData(context.dbConn)
    },
  },
  data_: {
    resolve: async(parent, args, context, info) => {
      return await getData(context.dbConn, args._id)
    },
  }
}
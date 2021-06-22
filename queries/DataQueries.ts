const { getAllData, getData } = require("../controllers/DataController.ts");

/**
 * @description holds book queries
 */

export const DataQuery = {
  data: {
    resolve: async (parent, args, context, info) => {
      return await getAllData(context.dbConn)
    },
  },
  data_: {
    resolve: async(parent, args, context, info) => {
      return await getData(context.dbConn, args._id)
    },
  }
}
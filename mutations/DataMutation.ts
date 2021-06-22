const { createData, deleteData, updateData } = require("../controllers/DataController.ts");

/**
 * @description holds data mutations
 */

export const DataMutation = {
  createData: {
    resolve: async (parent, args, context, info) => {
      return await createData(context.dbConn, args.input);
    },
  },
  updateData: {
    resolve: async (parent, args, context, info) => {
      return await updateData(context.dbConn, args.input);
    },
  },
  deleteData: {
    resolve: async (parent, args, context, info) => {
      return await deleteData(context.dbConn, args._id);
    },
  },
}
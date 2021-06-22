const { getAllRanges } = require("../controllers/RangesController.ts");

/**
 * @description holds ranges query
 */

export const RangesQuery = {
  ranges: {
    resolve: async (parent, args, context, info) => {
      return await getAllRanges(context.dbConn)
    },
  }
}
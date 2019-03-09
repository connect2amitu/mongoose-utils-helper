const mongoose = require("mongoose");
const functions = {};

/**
 * convertMongoId use to convert your string to mongodb object ID
 * @param Id String
 * @returns mongodbObjectId
 */
functions.convertMongoId = (id) => {
    return mongoose.Types.ObjectId(id);
}
/**
 * Use to check mongodb Object id is valid or not
 * @param Id String | number | Object
 * @returns Boolean
 */
functions.mongooseCheckValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
    functions
}
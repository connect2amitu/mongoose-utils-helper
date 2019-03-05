const mongoose = require("mongoose");
const functions = {};

functions.convertMongoId = (id) => {
    return mongoose.Types.ObjectId(id);
}

module.exports = {
    functions
}
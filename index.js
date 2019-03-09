const mongoose = require("mongoose");
const db = require("./database/cnn"); //DB Connection
const common_helper = require("./helper/common");
const model = require("./model/index");
const commonFunctions = require("./common/funs");
module.exports = {
    connection: db.connection,
    common_helper: common_helper,
    createModel: model.createModel,
    commonFuns: commonFunctions.functions,
    mongoose: mongoose
}

var db = require("./database/cnn"); //DB Connection
var common_helper = require("./helper/common");
var model = require("./model/index");
var commonFunctions = require("./common/funs");
module.exports = {
    connection: db.connection,
    common_helper: common_helper,
    createModel: model.createModel,
    commonFuns: commonFunctions.functions
}

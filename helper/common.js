const jwt = require('jsonwebtoken');

const common_helper = {};


/**
 * count use to get count number of documents in collection
 * @param {Model} model name of collection
 * @param {Object} condition condition of fetch record
 * @return {Object} responseObject with status,message and data(no. of record count)
 */
common_helper.count = async (model, condition = {}) => {
  try {
    let data = await model.countDocuments(condition);
    return { status: 1, message: "Data counted", data };
  } catch (error) {
    return { status: 0, message: "No data found" };
  }
};

/**
 * insert use to add new record in collection
 * @param {Model} model name of collection
 * @param {Object} newData object of new record 
 * @return {Object} responseObject with status,message and data(new inserted record object)
 */
common_helper.insert = async (Model, newData) => {
  try {
    let document = new Model(newData);
    let data = await document.save();
    return { status: 1, message: "Data inserted", data };
  } catch (error) {
    return { status: 0, message: "No data inserted" };
  }
};

/**
 * insertMany use to add multiple records in collection
 * @param {Model} model name of collection
 * @param {Array} newData array of new records objects 
 * @return {Object} responseObject with status,message and data(new inserted records count)
 */
common_helper.insertMany = async (Model, newData) => {
  try {
    let data = await Model.insertMany(newData);
    return { status: 1, message: "Data inserted", data };
  } catch (error) {
    return { status: 0, message: "No data inserted" };
  }
};

/**
 * update use to update existing record in collection
 * @param {Model} model name of collection
 * @param {Object} condition condition of which record to be update 
 * @param {Array} newData object of record to be replace with old record 
 * @return {Object} responseObject with status,message and data(updated record object)
 */
common_helper.update = async (model, condition, newData) => {
  try {
    let data = await model.findOneAndUpdate(condition, newData, { new: true });
    return { status: 1, message: "Data updated", data };
  } catch (error) {
    return { status: 0, message: "No data updated" };
  }
};

/**
 * softDelete use to delete record in collection(set flag isDeleted: 1)
 * @param {Model} model name of collection
 * @param {Object} condition condition of which record to be delete 
 * @return {Object} responseObject with status,message and data(deleted record object)
 */
common_helper.softDelete = async (model, condition) => {
  try {
    let data = await model.findOneAndUpdate(condition, { isDeleted: 1 }, { new: true });
    return { status: 1, message: "Data deleted", data };
  } catch (error) {
    return { status: 0, message: "No data deleted" };
  }
};


/**
 * delete use to remove record in collection
 * @param {Model} model name of collection
 * @param {Object} condition condition of which record to be delete 
 * @return {Object} responseObject with status,message and data(deleted record object)
 */
common_helper.delete = async (model, condition) => {
  try {
    let data = await model.findOneAndDelete(condition);
    return { status: 1, message: "Data deleted", data };
  } catch (error) {
    return { status: 0, message: "No data deleted" };
  }
};


/**
 * find use to find records in collection
 * @param {Model} model name of collection
 * @param {Object} condition condition of which record to be find 
 * @return {Object} responseObject with status,message and data(fetched records array)
 */
common_helper.find = async (model, condition = {}) => {
  try {
    let data = await model.find(condition).lean();
    return { status: 1, message: "Data found", data };
  } catch (error) {
    return { status: 0, message: "No data found" };
  }
};


/**
 * findOne use to find one record in collection
 * @param {Model} model name of collection
 * @param {Object} condition condition of which record to be find 
 * @return {Object} responseObject with status,message and data(fetched single record)
 */
common_helper.findOne = async (model, condition = {}) => {
  try {
    let data = await model.findOne(condition).lean();
    return { status: 1, message: "Data found", data };
  } catch (error) {
    return { status: 0, message: "No data found" };
  }
};

/**
 * sign use to convert plain text into cipher text
 * @param {*} plainObject plain Object
 * @param {*} secretKey secret key to convert cipher text
 * @param {*} expiredTime expiration time for token
 * @return {*} new generated cipher text
 */
common_helper.sign = async (plainObject, secretKey = "dgsm", expiredTime = "1d") => {
  try {
    var data = await jwt.sign(plainObject, secretKey, { expiresIn: expiredTime })
    return data;
  } catch (error) {
    return error;
  }
};
module.exports = common_helper;

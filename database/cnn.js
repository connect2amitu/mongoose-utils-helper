//Import the mongoose module
var mongoose = require("mongoose");

function connection(dbObj, isConsolePrint = true) {
    mongoose.Promise = global.Promise;
    //Set up default mongoose connection
    var dbConnection = "";
    if (dbObj && Object.keys(dbObj).length > 0) {
        dbConnection = `mongodb://${dbObj.username}:${dbObj.password}@${dbObj.hostname}:${dbObj.port ? dbObj.port : 27017}/${dbObj.database}`;
    } else if (typeof dbObj === "string") {
        dbConnection = dbObj;
    }
    else {
        return "invalid Database Uri, please enter valid database credential";
    }

    mongoose.connect(dbConnection, { useNewUrlParser: true });

    //Get the default connection
    var db = mongoose.connection;

    // CONNECTION EVENTS
    // When successfully connected
    if (isConsolePrint) {

        db.on("connected", function () {
            console.log("Mongoose connection open to " + dbConnection);
        });

        // If the connection throws an error
        db.on("error", function (err) {
            console.log("Mongoose default connection error: " + err);
        });

        // When the connection is disconnected
        db.on("disconnected", function () {
            console.log("Mongoose default connection disconnected");
        });

        // If the Node process ends, close the Mongoose connection
        process.on("SIGINT", function () {
            db.close(function () {
                console.log(
                    "Mongoose default connection disconnected through app termination"
                );
                process.exit(0);
            });
        });
    }
    return db;
};
module.exports = {
    connection
}
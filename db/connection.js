const { MongoClient } = require('mongodb');
const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('applify_lib');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

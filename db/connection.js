const { MongoClient } = require('mongodb');
const connectionString = "mongodb://localhost:27017";
const connectionString1 = "mongodb+srv://vercel-admin-user:o6EbfzvRkcyooKm5@cluster0.niex4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString1);

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('test_db1');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

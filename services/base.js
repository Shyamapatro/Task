const Response = require("../config/response");
const dbo = require("../db/connection");

exports.getSingleRecord = (CollectionName, criteria) => {
	console.log("CollectionName",CollectionName);
    console.log("criteria=====",criteria);
	return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
	dbConnect.collection(CollectionName)
      .findOne(criteria)
			.then(result => {
				resolve(result);
				console.log("result",result)
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};


exports.getSingleRecord1 = (CollectionName, criteria) => {
	console.log("CollectionName",CollectionName);
    console.log("criteria=====",criteria);
	return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
	dbConnect.collection(CollectionName)
      .findOne(criteria)
			.then(result => {
				resolve(result);
				console.log("result",result)
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};


exports.saveData = (CollectionName, objToSave) => {
	return new Promise((resolve, reject) => {
		const dbConnect = dbo.getDb();
		dbConnect.collection(CollectionName)
			.insertOne(objToSave)
			.then((result) => {
				console.log("data is saved successfully",result)
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};


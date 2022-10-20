const Response = require("../config/response");
const dbo = require("../db/connection");

exports.getSingleRecord = (CollectionName, criteria, projection) => {
	console.log("CollectionName",CollectionName);
    console.log("projection=====",);
	return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
	dbConnect.collection(CollectionName)
      .findOne(criteria,{ _id: 0 })
			.then(result => {
				resolve(result);
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

exports.updateData = (CollectionName, criteria, objToSave) => {
	console.log('updateData---=====', CollectionName, objToSave,criteria);
	return new Promise((resolve, reject) => {
		const dbConnect = dbo.getDb();
		dbConnect.collection(CollectionName)
		.updateOne(criteria, objToSave)
			.then(result => {
				console.log('updateData---',result)
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};

exports.delete = (CollectionName, criteria) => {
	return new Promise((resolve, reject) => {
		const dbConnect = dbo.getDb();
		dbConnect.collection(CollectionName)
		.deleteOne(criteria)
			.then(result => {
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};

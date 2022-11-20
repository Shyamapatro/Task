const dbo = require("../db/connection");
const Response = require("../config/response");
const baseService = require("./base");

/**
 * ######### @function addAdmin ###################
 * ######### @params => criteria, objToSave  ######
 * ######### @logic => Used to add admin ##########
 */

exports.addAdmin = async (objToSave) => {
  const CollectionName = "cards_data";
  return await baseService.saveData(CollectionName, objToSave);
};

/**
 * ######### @function getDetail #####################
 * ######### @params => criteria, projection  ########
 * ######### @logic => Used to retrieve users ########
 */

exports.getadminDetails = async (criteria) => {
  const CollectionName = "cards_data";
 
  return await baseService.getSingleRecord(CollectionName,criteria);
};

exports.getadmintfilterDetails = async (criteria, projection) => {
  const CollectionName = "cards_data";
  console.log("projection======>>>>", projection);
  return await baseService.getSingleRecord(CollectionName,criteria,projection);
};

exports.getAllAdmins = () => {
  return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("cards_data")
      .find({}, { _id: 0 })
      .limit(50)
      .toArray()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};



exports.getAllcolors = () => {
  return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("colors")
      .find({}, { _id: 0 })
      .limit(50)
      .toArray()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};


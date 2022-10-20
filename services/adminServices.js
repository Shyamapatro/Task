const dbo = require("../db/connection");
const Response = require("../config/response");
const baseService = require("./base");

/**
 * ######### @function addAdmin ###################
 * ######### @params => criteria, objToSave  ######
 * ######### @logic => Used to add admin ##########
 */

exports.addAdmin = async (objToSave) => {
  const CollectionName = "admin_mangement";
  return await baseService.saveData(CollectionName, objToSave);
};

/**
 * ######### @function getDetail #####################
 * ######### @params => criteria, projection  ########
 * ######### @logic => Used to retrieve users ########
 */

exports.getadminDetails = async (criteria, projection) => {
  const CollectionName = "admin_mangement";
  console.log("projection======>>>>", projection);
  return await baseService.getSingleRecord(CollectionName,criteria,projection);
};

/**
 * ######### @function updateAdmins ##################
 * ######### @params => criteria, projection  ########
 * ######### @logic => Used to retrieve users ########
 */

exports.Updateadmin = async (criteria, objToSave) => {
  const CollectionName = "admin_mangement";
  console.log(criteria, objToSave);
  const updates = {
    $set: objToSave,
  };
  return await baseService.updateData(CollectionName, criteria, updates);
};

/**
 * #########    @function deleteAdmin ###############
 * #########    @params => criteria #################
 * #########    @logic => Used to Delete Admin#######
 */

exports.deleteadmin = async (criteria) => {
  const CollectionName = "admin_mangement";
  return await baseService.delete(CollectionName, criteria);
};

/**
 * #########    @function getAllAdminsDetails #######
 * #########    @params => criteria #################
 * #########    @logic => Used to get All Admin #####
 */

exports.getAllAdmins = () => {
  return new Promise((resolve, reject) => {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("admin_mangement")
      .find({}, { _id: 0 })
      .limit(50)
      .toArray()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// exports.getadminDetails = (criteria) => {
//   return new Promise((resolve, reject) => {
//     const dbConnect = dbo.getDb();

//     console.log("Store ======", criteria);

//     dbConnect
//       .collection("admin_mangement")
//       .findOne(criteria)
//       .then((res) => {
//         resolve(res);
//         console.log("ddddd", res);
//       })
//       .catch((err) => reject(err));
//   });
// };

// exports.addAdmin = (objToSave) => {
//   return new Promise((resolve, reject) => {
//     const dbConnect = dbo.getDb();
//     dbConnect.collection("admin_mangement")
//       .insertOne(objToSave)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => reject(err));
//   });
// };

// exports.Updateadmin = (criteria, objToSave) => {
//   console.log("Update admin", criteria, objToSave);
//   return new Promise((resolve, reject) => {
//     const dbConnect = dbo.getDb();

//     console.log("criteria ======", criteria);
//     const updates = {
//       $set: objToSave,
//     };
//     console.log("Update criteria:::::::", updates, criteria);
//     dbConnect.collection("admin_mangement")
//     .updateOne(criteria, updates)
//       .then((res) => {
//         resolve(res);
//         console.log("ddddd", res);
//       })
//       .catch((err) => reject(err));
//   });
// };

// exports.deleteadmin = (criteria) => {
//   return new Promise((resolve, reject) => {
//     const dbConnect = dbo.getDb();
//    console.log("criteria ======", criteria);

//     dbConnect
//       .collection("admin_mangement")
//       .deleteOne(criteria)
//       .then((res) => {
//         resolve(res);
//         console.log("ddddd", res);
//       })
//       .catch((err) => reject(err));
//   });
// };

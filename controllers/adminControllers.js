const Service = require("../services");
const message = require("../config/messages.js");
const moment = require("moment");
let Response = require("../config/response");
const Joi = require("joi");
const commonHelper = require("../Helper/common");
const _ = require("underscore");
var ObjectID = require("mongodb").ObjectID;
const adminProjection = [ "firstName", "lastName"];

module.exports = {

  getAlladmin: async () => {
    let adminDetails = Service.adminServices.getAllAdmins(adminProjection);
    if (adminDetails) {
      return adminDetails;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },

  addadmin: async (payloadData) => {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required(),
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        phoneNumber: Joi.string().optional(),
      });
      let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
      console.log("payload----", payload);
      let objToSave = {};
      if (_.has(payload, "email") && payload.email != "")
        objToSave.email = payload.email;
      if (_.has(payload, "firstName") && payload.firstName != "")
        objToSave.firstName = payload.firstName;
      if (_.has(payload, "lastName") && payload.lastName != "")
        objToSave.lastName = payload.lastName;
      if (_.has(payload, "phoneNumber") && payload.phoneNumber != "")
        objToSave.phoneNumber = payload.phoneNumber;

      let adminData = await Service.adminServices.addAdmin(objToSave);

      console.log("ddddddd", adminData, objToSave);
      if (adminData) {
        return message.success.ADDED;
      } else {
        return Response.error_msg.InvalidData;
      }
    } catch (err) {
      console.log(err);
      throw Response.error_msg.implementationError;
    }
  },

  Updateadmin: async (payloadData) => {
    try {
      const schema = Joi.object().keys({
        id:Joi.any().required(),
        email: Joi.string().required(),
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        phoneNumber: Joi.string().optional(),
      });

      let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
      console.log("payload----", payload.id);
      var criteria = { _id: ObjectID(payload.id) };
      console.log("criteria----", criteria);

      let objToSave = {};
      if (_.has(payload, "email") && payload.email != "")
        objToSave.email = payload.email;
      if (_.has(payload, "firstName") && payload.firstName != "")
        objToSave.firstName = payload.firstName;
      if (_.has(payload, "lastName") && payload.lastName != "")
        objToSave.lastName = payload.lastName;
      if (_.has(payload, "phoneNumber") && payload.phoneNumber != "")
        objToSave.phoneNumber = payload.phoneNumber;

      let isUpdated = await Service.adminServices.Updateadmin(
        criteria,
        objToSave
      );
      if (isUpdated) {
        return message.success.UPDATED;
      } else {
        throw Response.error_msg.implementationError;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteadminDetails: async (paramData) => {
    const schema = Joi.object().keys({
      id: Joi.any().required(),
    });
    let payload = await commonHelper.verifyJoiSchema(paramData, schema);
    var criteria = { _id: ObjectID(payload.id) };
  
    let deleteData = Service.adminServices.deleteadmin(criteria);
    if (deleteData) {
      return message.success.DELETED;
    } else {
      throw Response.error_msg.implementationError;
    }
  },
  getadmintDetail: async (payloadData) => {
    const schema = Joi.object().keys({
      id: Joi.any().required(),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    var criteria = { _id: ObjectID(payload.id) };

    let adminDetail = Service.adminServices.getadminDetails(
      criteria,
      adminProjection
    );
    if (adminDetail) {
      return adminDetail;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },
};

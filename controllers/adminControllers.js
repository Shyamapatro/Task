const Service = require("../services");
const message = require("../config/messages.js");
const moment = require("moment");
let Response = require("../config/response");
const Joi = require("joi");
const commonHelper = require("../Helper/common");
const _ = require("underscore");
var ObjectID = require("mongodb").ObjectID;


module.exports = {

  getAlladmin: async () => {
    let adminDetails = Service.adminServices.getAllAdmins();
    if (adminDetails) {
      return adminDetails;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },
  

  getAllcolors:async () => {
    let colorDetails = Service.adminServices.getAllcolors();
    if (colorDetails) {
      return colorDetails;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },

  addadmin: async (payloadData) => {
    try {
      const schema = Joi.object().keys({
        code : Joi.string().optional(),
        title: Joi.string().optional(),
        description : Joi.string().optional(),
        
      });
      let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
      console.log("payload----", payload);
      let objToSave = {};
      if (_.has(payload, "code") && payload.code != "")
        objToSave.code = payload.code;
      if (_.has(payload, "title") && payload.title != "")
        objToSave.title = payload.title;
      if (_.has(payload, "description") && payload.description  != "")
        objToSave.description  = payload.description ;
     
      if(payload.title)
      { 
        objToSave.Istitle  = true;
        
      }else{
        objToSave.Istitle =false;
      }
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


 



  getadmintDetail: async (payloadData) => {
    const schema = Joi.object().keys({
      id: Joi.any().required(),
      Istitle:Joi.boolean().required(),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    var criteria = { _id: ObjectID(payload.id),Istitle:payload.Istitle };

    let adminDetail = await Service.adminServices.getadminDetails(
      criteria
    );

    console.log("adminDetail==",adminDetail);
    if (adminDetail) {
      return {
        message:"already exists in table"};
    } else {
      throw {
        message:"Title is not in the database"
      };
    }
  },
  getadmintfilterDetails: async (payload) => {
    console.log("payloadData",payload)
    // criteria={payload}

    let adminfilterDetails = await Service.adminServices.getAllAdmins();
    console.log("adminfilterDetails",adminfilterDetails)
    
    if (adminfilterDetails.title===payload) {
      return adminfilterDetails;
    } else if(adminfilterDetails.description===payload) {
      return adminfilterDetails;
    }else{
      throw Response.error_msg.recordNotFound;
    }
  },
};

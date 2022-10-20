var express = require("express");
var router = express.Router();
let Controllers = require("../controllers");
const sendResponse = require("../Helper/sendResponse");

router.post("/add", (req, res) => {
  let payload = req.body;
  console.log("Payload data", payload);
  return sendResponse.executeMethod(Controllers.adminControllers.addadmin, payload, req, res);
});

router.get("/get", (req, res) => {
  let payload = req.query;
  return sendResponse.executeMethod(Controllers.adminControllers.getAlladmin, payload, req, res);
});

router.put("/edit/:id", (req, res) => {
    let payload=req.body
    payload.id=req.params
    return sendResponse.executeMethod(Controllers.adminControllers.Updateadmin,payload,req,res);
});

router.get('/get/:id', async (req, res) => {
    return sendResponse.executeMethod(Controllers.adminControllers.getadmintDetail,req.params,req,res)
})

router.delete("/delete/:id", (req, res) => {
    return sendResponse.executeMethod(Controllers.adminControllers.deleteadminDetails,req.params,req, res);
});

module.exports = router;

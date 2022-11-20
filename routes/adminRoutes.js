var express = require("express");
var router = express.Router();
let Controllers = require("../controllers");
const sendResponse = require("../Helper/sendResponse");

router.post("/api/card/save", (req, res) => {
  let payload = req.body;
  console.log("Payload data", payload);
  return sendResponse.executeMethod(Controllers.adminControllers.addadmin, payload, req, res);
});

router.get("/api/card/fetch", (req, res) => {
  let payload = req.query;
  return sendResponse.executeMethod(Controllers.adminControllers.getAlladmin, payload, req, res);
});

router.get("/api/card/colors", (req, res) => {
  let payload = req.query;
  return sendResponse.executeMethod(Controllers.adminControllers.getAllcolors, payload, req, res);
});



router.get("/api/validatetitle", (req, res) => {
  let payload = req.query;
  return sendResponse.executeMethod(Controllers.adminControllers.getadmintDetail, payload, req, res);
});


router.get('/api/filter', async (req, res) => {
    return sendResponse.executeMethod(Controllers.adminControllers.getadmintfilterDetails,req.params,req,res)
})


module.exports = router;

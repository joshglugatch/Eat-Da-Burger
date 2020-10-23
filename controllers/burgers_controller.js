var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
  router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    if(req.body.burger_name !== ""){
      burger.insertOne([
        req.body.burger_name
      ], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
      });
    }
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.body.thisID, function(result) {
        console.log(result)
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  
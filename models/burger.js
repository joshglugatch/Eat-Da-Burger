// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(newVal, cb) {
    orm.insertOne(newVal, function(res) {
      cb(res);
    });
  },
  updateOne: function(upID, cb) {
    orm.updateOne(upID, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
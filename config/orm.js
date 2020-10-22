// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [cb], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

    insertOne: function(newVal, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [newVal, cb], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

    updateOne: function(trueFalse, whichID, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [trueFalse,whichID, cb], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

    
};
  
  // Export the orm object for the model (burger.js).
  module.exports = orm;


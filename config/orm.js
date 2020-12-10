const connection = require("./connection.js");

function questionMarks(){

  
}
const orm = {
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function (table, colSelect, cb) {
    const queryString = "INSERT INTO ?? VALUES ?? ";
    connection.query(queryString, [table, colSelect], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: function (table, colSelect, id, cb) {
    const queryString = "UPDATE ?? SET ?? WHERE id = ??";
    connection.query(queryString, [table, colSelect, id], function (err, res) {
      if (err) throw err;
        cb(res);
      
    });
  },
};

module.exports = orm;

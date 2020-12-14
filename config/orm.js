const connection = require("./connection.js");

function questionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

function toSql(ob){
  let arr =[];
  for (let key in ob){
    // is "key" aka id?
    const value = ob[key];
    // soley used to turn spaces into string?
    /* 
    {
      devoured: 1,
      delicious: 0,
      burger_name: badburger,
    }
    */
    if(Object.hasOwnProperty.call(ob,key)){
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        // adding ' ?
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  insertOne: function (table, col, vals, cb) {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUE (";
    queryString += questionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, updateCol, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += "SET ";
    queryString += toSql(updateCol);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    })
  
  },
};

module.exports = orm;

const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // devour
  updateOne: function (updateCol, id, cb) {
    orm.updateOne("burgers", updateCol, id, function (res) {
      cb(res);
    });
  },
  deleteOne: function (updateCol, cb) {
    orm.deleteOne("burgers", updateCol, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;

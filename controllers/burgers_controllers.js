const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let burgers= {
      burgers: data,
    };
    console.log(burgers, data);
    res.render("index", { burgers:data});
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.delete(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
module.exports = router;

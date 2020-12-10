const burger = require("../models/burger");
const router = express.Router();
const express = require("express");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", {burger: data});
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(
    ["burger_name", "devour"],
    [req.body.burger_name, 0],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function(req, res) {
  let eatUp = "id = " + req.params.id;

  burger.update(
    {
      devour: req.body.devour
    },
    eatUp,
    function(result) {
      if (result.changedRows === 0) {
      
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = router;

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controllers");
app.use(routes);
// routes(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

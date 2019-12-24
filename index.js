var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var adminRoutes = require('./routes/admin');

app.use(adminRoutes);

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));
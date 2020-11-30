const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var router = require('./routes/Livre');

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.
app.use("/livres", router);

// Listen to this Port
app.listen(3000, function () {
    console.log("We are live at port 3000");
});
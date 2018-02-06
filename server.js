const express = require("express");
const path = require("path");
const app = express()
const port = process.env.PORT || 3001 
app.use('/', express.static(path.join(__dirname, "public")));

app.listen(3001, () => console.log("it works 3001"))

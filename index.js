var express = require("express");
var app = express();

app.get("/users", (req, res, next) => {
    res.json(["Joao","Maria","Jose","Renata","Augusto"]);
   });

app.listen(3000, () => {
 console.log("XPAPI Server running on port 3000");
});


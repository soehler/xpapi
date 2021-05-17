var express = require("express");
var cors = require('cors')
var app = express();

const whitelist = ['http://localhost', 'http://hspw.org']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.get("/users",cors(), (req, res, next) => {
    res.json({"users":["Joao","Maria","Jose","Renata","Augusto"]});
   });

app.listen(3000, () => {
 console.log("XPAPI Server running on port 3000");
});


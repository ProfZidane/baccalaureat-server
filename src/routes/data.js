const router = require('express').Router();
const fetch = require('node-fetch');
const townModel = require('../models/Play/Town');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
    database: "bac"

});

router.get('/fruit', async (req,res,next) => {
    con.connect(function(err) {
        console.log("Connected!");
        
        con.query("SELECT * FROM meta_location", function (err, result, fields) {
            if (err) throw err;
            //console.log(result);
            result.forEach(async element => {
                console.log(element['local_name']);
                const p = { name: element['local_name'] };
                const town = new townModel(p);
                await town.save();
                console.log('town saved !');
            });
          });


      });
});

module.exports = router;
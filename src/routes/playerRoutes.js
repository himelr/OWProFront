const express = require('express');
const router = express.Router();
const rp = require('request-promise');


router.get('/leaderboard/get/', function (req, res) {

   const options = {
        uri: 'http://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:5000/leaderboard/get/',
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.send("Failed");
            
        });


});


module.exports = router;
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
router.get('/stats/get/:name', function (req, res) {

    const options = {
        uri: 'http://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:5000/u/stats/' + req.params.name,
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.send({ "error": "request failed" });

        });


});
router.get('/score/get/:name', function (req, res) {

    const options = {
        uri: 'http://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:5000/score/get/' + req.params.name,
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.send({ "error": "request failed" });

        });


});
router.get('/save/stat/:name', function (req, res) {
    
        const options = {
            uri: 'http://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:5000/score/get/' + req.params.name,
            json: true // Automatically parses the JSON string in the response
        };
    
        rp(options)
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {
                res.send({ "error": "request failed" });
    
            });
    
    
    });
    router.get('/add/player/:name', function (req, res) {
        
            const options = {
                uri: 'http://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:5000/profile/add/' + req.user.username + "/"+ req.params.name,
                json: true // Automatically parses the JSON string in the response
            };
        
            rp(options)
                .then(function (data) {
                    res.send(data);
                })
                .catch(function (err) {
                    res.send({ "error": "request failed" });
        
                });
        
        
        });

    


module.exports = router;
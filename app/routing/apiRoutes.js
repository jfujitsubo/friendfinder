var path = require('path');

var friendsList = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);    
    });
    app.post('/api/friends', function(req,res){
        var userObj = req.body;
        var userInputs = userObj.scores;

        var nameMatch = '';
        var imgMatch = '';
        var matchDiff = 9999;

        for(var i = 0; i < friendsList.length; i++) {
            var diff = 0;
            for(var j = 0; i < userInputs.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userInputs[j]);
            }

        if(diff < matchDiff) {
            matchDiff = diff;
            nameMatch = friendsList[i].name;
            imgMatch = friendsList[i].photo;
            }
        }
        friendsList.push(userObj);
        res.json({status: 'OK', nameMatch: nameMatch, imgMatch: imgMatch});
    });
};
var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
	//GET ALL
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	//CALCULATE MATCH
	app.post('/api/friends', function(req, res) {
		var surveyResults = req.body;
		var surveyQuestions = surveyResults.scores;
		
		//MATCH
		var name;
		var photo;
		var maxDifference = 60;//MAX DIFFERENCE IS THEORETICALLY 40 (all 1s vs all 5s)
		
		//FIND FRIEND WITH LOWEST SCORE DIFF
		for (var i = 0; i < friends.length; i++) {
			var thisDifference = 0;
			for (var j = 0; j < surveyQuestions.length; j++) {
				thisDifference += Math.abs(friends[i].scores[j] - surveyQuestions[j]);
			}
			//LOWER DIFF THAN CURRENT MAX
			if (thisDifference < maxDifference) {
				maxdifference = diff;
				name = friends[i].name;
				photo = friends[i].photo;
			}
		}
		friends.push(surveyResults);//ADD NEW USER AFTER MATCH		
		res.json({name : name, photo : photo});
	});
};

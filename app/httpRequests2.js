var request = require('request');

module.exports = {
    getQuestions : function() {
// Set the headers
        var headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded'
        }

// Configure the request
        var options = {
            url: 'http://localhost:4000/api/v2',
            method: 'GET',
            headers: headers,
            qs: { category: 'NBA', level: 'easy' }
        }

// Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }
        })
    }

}

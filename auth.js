const firebase = require("firebase");

module.exports.signIn = function signIn() {
    firebase.auth().signInAnonymously().then(function() {
        console.log("Connected to Database.");
    }).catch(function(error) {
        console.log(error);
    });
}
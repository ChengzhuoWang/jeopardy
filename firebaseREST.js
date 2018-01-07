const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const firebaseConfig = require('./config.js');

firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().then(function() {
    console.log("Connected to Database.");
}).catch(function(error) {
    console.log(error);
});

console.log(process.env.PORT)
router.get('/all', (req, res) => {
    return firebase.database().ref('/').once('value').then(function(snapshot) {
        res.send(snapshot.val())
    });

});

router.get('/v2', (req, res) => {
    let category = req.query.category
    let difficulty = req.query.difficulty

    return firebase.database().ref('/' + category +'/' + difficulty +'/').once('value').then(function(snapshot) {
        res.send(snapshot.val())
    });

});


module.exports = router;
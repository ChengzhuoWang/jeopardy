const express = require('express')
const router = express.Router()
const firebase = require('firebase')
const firebaseConfig = require('./config.js')

firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().then(function() {
    console.log("Connected to Database.");
}).catch(function(error) {
    console.log(error);
})


router.get('/category', (req, res) => {
    let status = 'no status'

    return firebase.database().ref('/category/').once('value').then(function(snapshot) {
        return snapshot.val()
    });

})

router.get('/v2', (req, res) => {
    console.log(req.query)
    console.log(req.query.category)
    console.log(req.query.level)

    let category = req.query.category
    let difficulty = req.query.difficulty

    return firebase.database().ref('/' + category +'/' + difficulty +'/').once('value').then(function(snapshot) {
        console.log(snapshot.val())
        res.send(snapshot.val())
    });

})


module.exports = router
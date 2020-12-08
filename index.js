const {
    response
} = require("express")
var express = require("express")
var app = express()
var port = 8080 || process.env.PORT
var Datastore = require('nedb')
var db = new Datastore({
    filename: "MyClients.db",
    autoload: true
})
app.listen(port, function () {
    console.log("😹Running at http://localhost:8080")
})
app.get('/api', function (req, res) {
    db.find({}, function (err, data) {
        if (err) {
            console.log("Error!!!!")
            return;
        }
        res.json(data)
    })

})
app.use(express.static('client'))
app.use(express.json())
app.post('/api', function (req, res) {
    console.log(req.body)
    db.insert(req.body, function (err, doc) {
        console.log("Data sent");
    });

})
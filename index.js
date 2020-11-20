var express = require("express")
var app = express()
var Datastore  = require('nedb')
var db = new Datastore({ filename:"MyClients.db", autoload:true})
app.listen(8080, function () {
    console.log("😹Running at http://localhost:8080")
})

app.use(express.static('client'))
app.use(express.json())
app.post('/api', function (req, res) {
    console.log(req.body)
    db.insert(req.body, function(err, doc) {
        console.log("Data sent");
    });
    
})

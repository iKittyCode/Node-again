var express = require("express")
var app = express()
app.listen(8080, function() {
console.log("😹 Running at http://localhost:8080")
})

app.use(express.static('client'))
app.use(express.json())
app.post('/api', function(req, res) {
if (req.body.age == '' || req.body.name == '') {
console.log("Sorry this is and empty request")
} else {
console.log("name: " + req.body.name)
console.log("age: " + req.body.age)
}
})
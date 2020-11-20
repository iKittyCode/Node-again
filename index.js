var express = require("express")
var app = express()


app.listen(8080, function () {
    console.log("😹Running at http://localhost:8080")
})

app.use(express.static('client'))
app.use(express.json())
app.post('/api', function (req, res) {
    console.log(req.body)
    

    res.send('Thanks for sending')
    
})
app.get('/api', function(request, response) {
response.send("<h1>Thanks for sending data</h1> ")

})
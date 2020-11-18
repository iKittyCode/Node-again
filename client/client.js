var name = prompt("What is your name")
var input = prompt("What is your age")
function setup() {
var button = createButton('Click to resubmit age')
button.mousePressed(function() {
    var name = prompt("What is your name")
    var input = prompt("What is your age")
    fetchMe()
})
}
async function fetchMe() {
var api = fetch('/api', {
method:'POST',
headers:{
    'Content-Type': 'application/json'
},
body:JSON.stringify({
name:name,
age:input
})
})
}
fetchMe()
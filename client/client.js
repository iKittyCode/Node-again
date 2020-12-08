var message = prompt("Whats your message")
var name = prompt("whats your name")
var button;
var label = document.getElementById('label')
function setup() {
    noCanvas()
    button = createButton('Click to submit again')
    button.mousePressed(function () {
        location.reload();
    })
}

function fetchMe() {
    var api = fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        message:message,
        name:name
        })
    })
}

fetchMe()
query();
async function query() {
const api = await fetch('/api')
const data = await api.json()
console.log(data)
for (var i  = 0; i < data.length; i++) {
var root = document.createElement('div')
var message = document.createElement('div')
message.textContent = data[i].message
root.append(message)
document.body.append(root)
}
}

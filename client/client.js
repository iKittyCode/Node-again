var name = prompt("What is your name")
var input = prompt("what your age")
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
            name: name,
            age: input
        })
    })
}

fetchMe()
query();
async function query() {
const api = await fetch('/api')
const data = await api.json()
console.log(data)

}
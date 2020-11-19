var name = prompt("What is your name")
var input = prompt("what your age")

function setup() {
    noCanvas()

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
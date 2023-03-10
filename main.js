// Exercici 1
function showJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' // Header => "Type of data =>json".
        }
    })
        .then(function (response) { return response.json(); }) // => API response.
        .then(function (data) { return console.log(data.joke); }) // => Data extract.
    ["catch"](function (error) { return console.error(error); }); // => Checking "errors".
}
var btn = document.getElementById('btn'); // => Get "DOM necessary elements"
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', showJoke); // => Adding event to start "showJoke function".

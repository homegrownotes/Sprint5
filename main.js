// Exercici 1
/*function showJoke(){ // => Function to activate "fetch" function only when "click".
    fetch('https://icanhazdadjoke.com/', { // => API-url.
        headers: {
            'Accept': 'application/json' // Header => "Type of data =>json".
        }
    })
        .then(response => response.json()) // => API response.
        .then(data => console.log(data.joke)) // => Data extract.
        .catch(error => console.error(error)); // => Checking "errors".
}

var btn = document.getElementById('btn'); // => Get "DOM necessary elements"
btn?.addEventListener('click', showJoke); // => Adding event to start "showJoke function".*/
var reportAcudits = []; // Defining the array.
function showJoke() {
    var jokeElement = document.getElementById("joke");
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // When showing the joke, show the punctuation buttons.
        var button1 = document.getElementById("btn1");
        if (button1 !== null) {
            button1.style.display = "inline";
        }
        var button2 = document.getElementById("btn2");
        if (button2 !== null) {
            button2.style.display = "inline";
        }
        var button3 = document.getElementById("btn3");
        if (button3 !== null) {
            button3.style.display = "inline";
        }
        // Add the joke to the HTML element.
        jokeElement.textContent = data.joke;
        // We generate the date in ISO format.
        var date = new Date().toISOString();
        // Add the joke to the reportAcudits array.
        reportAcudits.push({ joke: data.joke, score: 0, date: date });
    })["catch"](function (error) { return console.error(error); });
}
// Update the joke score in the "reportAcudits" array.
function addScore(score) {
    var currentJoke = reportAcudits[reportAcudits.length - 1];
    currentJoke.score = score;
    console.log(reportAcudits); // Update & show the array.
}
// Assign events to the scoring buttons.
document.getElementById("btn1").addEventListener("click", function () { return addScore(1); });
document.getElementById("btn2").addEventListener("click", function () { return addScore(2); });
document.getElementById("btn3").addEventListener("click", function () { return addScore(3); });
// Assign event to the button to load the next joke.
document.getElementById("btn").addEventListener("click", showJoke);

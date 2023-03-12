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
// Definig the array to store "jokes" with theirs scores and dates.
var reportAcudits = []; // Defining the array.
function showJoke() {
    // Get the HTML element to display the joke.
    var jokeElement = document.getElementById("joke");
    // Generate a random number to choose between different joke APIS.
    var rand = Math.random();
    // Set the default values for the API call
    var url = "https://icanhazdadjoke.com/";
    var headers = {
        Accept: "application/json"
    };
    // Choose the Chuck Norris API only if the random number is greater than 0.5.
    if (rand > 0.5) {
        url = "https://api.chucknorris.io/jokes/random";
        headers = {
            Accept: "application/json"
        };
    }
    fetch(url, {
        headers: headers
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
        var nextJokeText = document.getElementById("nextJokeText");
        if (nextJokeText !== null) {
            nextJokeText.style.display = "inline";
        }
        // Add the joke to the HTML element.
        jokeElement.textContent = data.joke || data.value;
        // We generate the date in ISO format.
        var date = new Date().toISOString();
        // Add the joke to the reportAcudits array.
        reportAcudits.push({ joke: data.joke || data.value, score: 0, date: date });
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
var apiKey = 'fc95b888f94e987b473d2bec305412b9';
var url = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=".concat(apiKey, "&units=metric");
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    //console.log(data);
    var weather = document.getElementById('weather');
    if (weather !== null) {
        weather.innerHTML = "".concat(data.name, " : T\u00AA \"").concat(data.main.temp, "\u00B0C\"<br> \n\t\tWeather : ").concat(data.weather[0].main, " \"").concat(data.weather[0].description, "\"<br>\n\t\tWind speed: \"").concat(data.wind.speed, "\"");
    }
})["catch"](function (error) { return console.error(error); });

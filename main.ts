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

// Exercici 2

/*interface showJoke {
	id: string;
	joke: string;
}
function showJoke() {
	fetch('https://icanhazdadjoke.com/', { // => API-url.
		headers: {
			'Accept': 'application/json' // Header => "Type of data =>json".
		}
	})
		.then(response => response.json()) // => API response.
		.then(data => {
			const jokeElement = document.getElementById("joke")!;
			jokeElement.textContent = data.joke;
		})
		.catch(error => console.error(error)); // => Checking "errors".
	} 

		var btn = document.getElementById('btn'); // => Get "DOM necessary elements"
		btn?.addEventListener('click', showJoke); // => Adding event to start "showJoke function".*/

// Exercici 3

/*interface Joke {
	id: string;
	joke: string;
  }
  
  const reportAcudits: { joke: string; score: number; date: string }[] = []; // Defining the array.
  
  function showJoke(): void {
	const jokeElement = document.getElementById("joke")!;
  
	fetch("https://icanhazdadjoke.com/", {
	  headers: {
		Accept: "application/json",
	  },
	})
	  .then((response) => response.json())
	  .then((data) => {
		// When showing the joke, show the punctuation buttons.
		const button1 = document.getElementById("btn1");
		if (button1 !== null) {
  		button1.style.display = "inline";}
		const button2 = document.getElementById("btn2");
		if (button2 !== null) {
		button2.style.display = "inline";
		}
		const button3 = document.getElementById("btn3");
		if (button3 !== null) {
		button3.style.display = "inline";	
		}
		const nextJokeText = document.getElementById("nextJokeText");
		if (nextJokeText !== null) {
		nextJokeText.style.display ="inline";
		}
		// Add the joke to the HTML element.
		jokeElement.textContent = data.joke;
  
		// We generate the date in ISO format.
		const date = new Date().toISOString();
  
		// Add the joke to the reportAcudits array.
		reportAcudits.push({ joke: data.joke, score: 0, date: date });
	  })
	  .catch((error) => console.error(error));
  }
  
  	// Update the joke score in the "reportAcudits" array.
  	function addScore(score: number): void {
	const currentJoke = reportAcudits[reportAcudits.length - 1];
	currentJoke.score = score;
	console.log(reportAcudits); // Update & show the array.
  }
  
  // Assign events to the scoring buttons.
  document.getElementById("btn1")!.addEventListener("click", () => addScore(1));
  document.getElementById("btn2")!.addEventListener("click", () => addScore(2));
  document.getElementById("btn3")!.addEventListener("click", () => addScore(3));
  
  // Assign event to the button to load the next joke.
  document.getElementById("btn")!.addEventListener("click", showJoke);
  
// Exercici 4

const apiKey = 'fc95b888f94e987b473d2bec305412b9';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
	//console.log(data);
	const weather = document.getElementById('weather');
	if (weather !== null) {
		weather.innerHTML = `${data.name} : T?? "${data.main.temp}??C"<br> 
		Weather : ${data.weather[0].main} "${data.weather[0].description}"<br>
		Wind speed: "${data.wind.speed}"`;
	}
  })
  .catch(error => console.error(error));*/

// Exercici 5

// Exercici 6

interface Joke {
	id: string;
	joke: string;
  }
  // Definig the array to store "jokes" with theirs scores and dates.
  const reportAcudits: { joke: string; score: number; date: string }[] = []; // Defining the array.
  
  function showJoke(): void {
	// Get the HTML element to display the joke.
	const jokeElement = document.getElementById("joke")!;
	// Generate a random number to choose between different joke APIS.
	const rand = Math.random();
	// Set the default values for the API call
	let url = "https://icanhazdadjoke.com/";
	let headers = {
		Accept: "application/json",
	};

	// Choose the Chuck Norris API only if the random number is greater than 0.5.
	if (rand > 0.5) {
		url = "https://api.chucknorris.io/jokes/random";
		headers = {
			Accept: "application/json",
		};
	}
  
	fetch(url, {
	  headers: headers,
	  })
	  .then((response) => response.json())
	  .then((data) => {
		// When showing the joke, show the punctuation buttons.
		const button1 = document.getElementById("btn1");
		if (button1 !== null) {
  		button1.style.display = "inline";}
		const button2 = document.getElementById("btn2");
		if (button2 !== null) {
		button2.style.display = "inline";
		}
		const button3 = document.getElementById("btn3");
		if (button3 !== null) {
		button3.style.display = "inline";	
		}
		const nextJokeText = document.getElementById("nextJokeText");
		if (nextJokeText !== null) {
		nextJokeText.style.display ="inline";
		}
		// Add the joke to the HTML element.
		jokeElement.textContent = data.joke || data.value;
  
		// We generate the date in ISO format.
		const date = new Date().toISOString();
  
		// Add the joke to the reportAcudits array.
		reportAcudits.push({ joke: data.joke || data.value, score: 0, date: date });
	  })
	  .catch((error) => console.error(error));
  }
  
  	// Update the joke score in the "reportAcudits" array.
  	function addScore(score: number): void {
	const currentJoke = reportAcudits[reportAcudits.length - 1];
	currentJoke.score = score;
	console.log(reportAcudits); // Update & show the array.
  }
  
  // Assign events to the scoring buttons.
  document.getElementById("btn1")!.addEventListener("click", () => addScore(1));
  document.getElementById("btn2")!.addEventListener("click", () => addScore(2));
  document.getElementById("btn3")!.addEventListener("click", () => addScore(3));
  
  // Assign event to the button to load the next joke.
  document.getElementById("btn")!.addEventListener("click", showJoke);
  
const apiKey = 'fc95b888f94e987b473d2bec305412b9';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
	//console.log(data);
	const weather = document.getElementById('weather');
	if (weather !== null) {
		weather.innerHTML = `${data.name} : T?? ${data.main.temp}??C`;
	}
  })
  .catch(error => console.error(error));
		
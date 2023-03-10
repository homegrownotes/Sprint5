// Exercici 1
function showJoke() { // => Function to activate "fetch" function only when "click".
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
btn?.addEventListener('click', showJoke); // => Adding event to start "showJoke function".
const url = new URL("http://localhost:8080");
const externalUrl = new URL("https://jsonplaceholder.typicode.com/posts");

fetch(externalUrl).then(function (response) {
  // Llamada correcta!
	return response.json();
}).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    var elemDiv = document.createElement('div');

    elemDiv.style.cssText = 'position:relative;background:blue;color:yellow;';

    // Pintamos un item con el titulo elegido
    if (data[i].title === "nesciunt iure omnis dolorem tempora et accusantium") {
      elemDiv.style.cssText = 'position:relative;background:red;color:white;';
    }

    document.getElementById("pepe").appendChild(elemDiv);
    
    elemDiv.innerHTML = data[i].title;
    document.body.appendChild(elemDiv);
  }
}).catch(function (err) {
	// Hubo un error
	console.warn('Error.', err);
});


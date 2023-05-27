var button = document.createElement("Button");
button.innerHTML = "Trombinoscope";
button.style = "cursor: pointer; bottom:20%;right:5%;position:absolute;z-index: 9999; width: 160px; height: 70px; font-size: 18px; font-weight: bold; color: white; background-color: #19c20a; border: 1px solid #19c20a; border-radius: 24px;";
button.style.boxShadow = "0 1px 2px rgb(0,0,0,0.15)";
button.style.transition = "all 0.15s ease-in-out";
button.onclick = trombinoscope;
button.onmouseover = function(){
	this.style.backgroundColor = "#7ad658";
	this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
	this.style.transform = "scale(1.15, 1.15)";
}
button.onmouseleave = function(){
	this.style.backgroundColor = "#19c20a";
	this.style.boxShadow = "0 1px 2px rgb(0,0,0,0.15)";
	this.style.transform = "scale(1, 1)";
}

document.body.appendChild(button);

// function trombinoscope() {
// 	button.onclick = () => {};
// 	console.log("Téléchargement en cours ...");
// 	button.innerHTML = "Téléchargement ...";
// 	// browser.runtime.sendMessage('trombinoscope').then(handleResponse);
// 	//send runtime message to background.js for chrome browser
// 	chrome.runtime.sendMessage('trombinoscope', handleResponse);
// }

// functiion to send message to background.js for chrome browser
function trombinoscope() {
	button.onclick = () => {};
	console.log("Button clicked");
	button.innerHTML = "Téléchargement ...";
	//check if browser is chrome or firefox
	if (typeof browser === "undefined") {
		chrome.runtime.sendMessage('trombinoscope', handleResponse);
	} else {
		browser.runtime.sendMessage('trombinoscope').then(handleResponse);
	}
}

// function to handle response from background.js




function handleResponse(response) {
	if (chrome.runtime.lastError) {
		// Something went wrong
		console.warn(chrome.runtime.lastError.message);
		return;
	}
	console.log("response" + response);
	if (response === "finished") {
		button.onclick = trombinoscope;
		button.innerHTML = "Trombinoscope";
		alert("Téléchargement terminé");
	}

	if(response === "error"){
		button.onclick = trombinoscope;
		button.innerHTML = "Trombinoscope";
		alert("Une erreur s'est produite. Veuillez rafraîchir la page");
	}
}


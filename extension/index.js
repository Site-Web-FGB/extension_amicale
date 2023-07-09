function getButton(text, bottom, funct){
	var button = document.createElement("Button");
	button.innerHTML = text;
	button.style = "cursor: pointer; bottom:" + bottom + "%;right:5%;position:absolute;z-index: 9999; width: 160px; height: 70px; font-size: 18px; font-weight: bold; color: white; background-color: #19c20a; border: 1px solid #19c20a; border-radius: 24px;";
	button.style.boxShadow = "0 1px 2px rgb(0,0,0,0.15)";
	button.style.transition = "all 0.15s ease-in-out";
	button.onclick = funct;
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

	return button;
}

var trombi = getButton("Trombinoscope", 25, trombinoscope);
var anniv_du_mois = getButton("Anniversaires du mois", 15, anniversaires);

document.body.appendChild(trombi);
document.body.appendChild(anniv_du_mois);

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
	trombi.onclick = () => {};
	trombi.innerHTML = "Téléchargement ...";
	//check if browser is chrome or firefox
	if (typeof browser === "undefined") {
		chrome.runtime.sendMessage('trombinoscope', handleResponse);
	} else {
		browser.runtime.sendMessage('trombinoscope').then(handleResponse);
	}
}

function anniversaires() {
	anniv_du_mois.onclick = () => {};
	anniv_du_mois.innerHTML = "Téléchargement ...";
	//check if browser is chrome or firefox
	if (typeof browser === "undefined") {
		chrome.runtime.sendMessage('anniv_du_mois', handleResponse);
	} else {
		browser.runtime.sendMessage('anniv_du_mois').then(handleResponse);
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
	if (response === "finished_trombi") {
		trombi.onclick = trombinoscope;
		trombi.innerHTML = "Trombinoscope";
		alert("Téléchargement terminé");
	}

	if (response === "finished_anniv") {
		anniv_du_mois.onclick = anniversaires;
		anniv_du_mois.innerHTML = "Anniversaires du mois";
		alert("Téléchargement terminé");
	}

	if(response === "error"){
		button.onclick = trombinoscope;
		button.innerHTML = "Trombinoscope";
		alert("Une erreur s'est produite. Veuillez rafraîchir la page");
	}
}


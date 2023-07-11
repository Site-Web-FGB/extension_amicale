var mois;
const nr_to_month = {
	1 : "janvier",
	2 : "février",
	3 : "mars", 
	4 : "avril",
	5 : "mai",
	6 : "juin",
	7 : "juillet",
	8 : "août",
	9 : "septembre",
	10 : "octobre",
	11 : "novembre",
	12 : "décembre"
}

var button_text = {
	"trombi" : "Trombinoscope",
	"anniv_du_mois" : "Anniversaires de "
}


function getButton(bottom, funct, id){
	var button = document.createElement("Button");
	button.innerHTML = button_text[id];
	if(id === "anniv_du_mois"){
		button.innerHTML = button_text[id] + nr_to_month[mois];
	}
	button.id = id;
	button.style = "cursor: pointer; bottom:" + bottom + "px;right:5%;position:absolute;z-index: 9999; width: 160px; height: 70px; font-size: 18px; font-weight: bold; color: white; background-color: #19c20a; border: 1px solid #19c20a; border-radius: 24px;";
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


var selectList = document.createElement("select");
selectList.id = "moisExtension";
selectList.style = "bottom: 220px; right: 5%;position:absolute;z-index: 9999; width: 160px; height: 30px;border: 1px solid #19c20a;"

var dateObj = new Date();
var mois = dateObj.getUTCMonth() + 1;

for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = nr_to_month[i];
	if(i === mois){
        option.selected = true;
    }
    selectList.appendChild(option);
}


function onMonthChanged(){
	mois = document.getElementById("moisExtension").value;
	console.log(mois);
	console.log(nr_to_month[mois]);
	var button = document.getElementById("anniv_du_mois");
	button.innerHTML = button_text["anniv_du_mois"] + nr_to_month[mois];
}

selectList.onchange = onMonthChanged;

var trombi = getButton(300, trombinoscope, "trombi");
var anniv_du_mois = getButton(150, anniversaires, "anniv_du_mois");

document.body.appendChild(trombi);
document.body.appendChild(selectList);
document.body.appendChild(anniv_du_mois);


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
		chrome.runtime.sendMessage(`anniv_du_mois_${mois}`, handleResponse);
	} else {
		browser.runtime.sendMessage(`anniv_du_mois_${mois}`).then(handleResponse);
	}
}

// function to handle response from background.js




function handleResponse(response) {

	if (chrome.runtime.lastError) {
		// Something went wrong
		console.warn(chrome.runtime.lastError.message);
		return;
	}

	if (response === "finished_trombi") {
		trombi.onclick = trombinoscope;
		trombi.innerHTML = "Trombinoscope";
	}

	if (response === "finished_anniv") {
		anniv_du_mois.onclick = anniversaires;
		anniv_du_mois.innerHTML = button_text["anniv_du_mois"] + nr_to_month[mois];;
	}

	if(response === "error"){
		button.onclick = trombinoscope;
		button.innerHTML = "Trombinoscope";
		alert("Une erreur s'est produite. Veuillez rafraîchir la page");
	}
}


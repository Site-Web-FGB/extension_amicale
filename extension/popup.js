var liste = document.getElementById("liste");

function annivs() {
	liste.innerHTML = "";
	//check if browser is chrome or firefox
	if (typeof browser === "undefined") {
		chrome.runtime.sendMessage('annivs', handle);
	} else {
		browser.runtime.sendMessage('annivs').then(handle);
	}
}

// function to handle response from background.js

function handle(response) {
	if (chrome.runtime.lastError) {
		// Something went wrong
        console.log(response);
		console.warn(chrome.runtime.lastError.message);
		return;
	}

    var dateObj = new Date();
    var current_month = dateObj.getUTCMonth() + 1;
    var current_day = dateObj.getUTCDate();

    response.forEach((user, i) => {
        var birthday = user["birthday"].toString();
        var month = birthday.substring(4, 6);
        var day = birthday.substring(6, 8);

        month = parseInt(month);
        day = parseInt(day);

        if(month == current_month && day == current_day){
            console.log({"day" : day, "month" : month});
            var name = user["firstname"] + " " + user["lastname"];
            var elem = "<li>" + name + "</li>"
            liste.innerHTML += elem;
        }
        
    });
}

annivs();




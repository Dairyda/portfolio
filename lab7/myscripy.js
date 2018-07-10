
function start()
{
	var button = document.getElementById("calculateButton");
	button.addEventListener("click", displayVolume, false);
}

funtion displayVolume()
{
	document.getElementById('myId').innerHTML = 'welcome!';
}

window.addEventListener("load", start, false);
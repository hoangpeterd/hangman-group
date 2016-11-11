//$(document).ready(function(){
var countryNames = ["USA", "Germany", "Belgium", "France", "Sweden", "Canada", "Norway", "Japan", "Brazil", "Italy"];
var dashString = "";

var randomWord = countryNames[Math.floor(Math.random()*countryNames.length)];

console.log(randomWord);

for(var i=0; i<randomWord.length; i++){
	dashString += " _ ";
}

console.log(dashString);

document.getElementById("randomWord").innerHTML = dashString;
//}
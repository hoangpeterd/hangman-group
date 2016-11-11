<<<<<<< HEAD

// word bank
var countries = ["country1", "country 2"];
// words guessed
var guessed = [];
// number of guesses
var guesses;
// number of wins
var wins;
// randomly chosen word
var word = [];

//computer chooses random word
word = countries[Math.floor(Math.random() * words.length)];
	return word;


// ian edit


var winCount = 0;
var lossCount = 0;
var guessCounter = 0;
var compWord = "Uganda";
var wordLetters = [];


function getLetters() {
	wordLetters = compWord.split("");
	return wordLetters;
}

function guesses(){
	guessCounter = compWord.length + 5;
	return guessCounter;
}

getLetters();
guesses();


// var currentWord = "Uganda";
// var game = {
// 	letters:[],

// 	setupGame: function() {
// 		this.letters = currentWord.split("");
// 		return letters;

// 	},

// 	reset: function() {
// 		this.currentWord = null;
// 		this.letters = [];
// 		this.correctLetters = [];
// 		this.wrongLetters = [];
// 		this.guessesLeft = 0;
// 		this.guesses = 0;
// 		this.guessed = null;
// 		this.setupGame();
// 		this.newWord();
// 	},
// }

// tav edit

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

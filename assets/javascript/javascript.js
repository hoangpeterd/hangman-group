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
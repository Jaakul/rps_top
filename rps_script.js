const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const roundCounter = document.getElementById('roundCounter')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')

function resetConditions(){
roundCounter.textContent = "";
playerScore.textContent = "";
compScore.textContent = "";
}


/*random # generator */
function choiceGenerator (){
const randomChoice = Math.floor(Math.random()*(3)+1);
return Number(randomChoice);
}

/*PLAYER CHOOSES ROCK*/



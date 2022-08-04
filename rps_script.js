const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const roundCounter = document.getElementById('roundCounter')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
const roundOutcome = document.getElementById('roundOutcome')
const compChoice = document.getElementById('compChoice')
const superContainer = document.getElementById('superContainer')
const description = document.getElementById('description')
const hiddenPlayerScore = document.getElementById('hiddenPlayerScore')
const hiddenCompScore = document.getElementById('hiddenCompScore')


let roundCounterNum = 0 ;
let playerScoreNum = 0 ;
let compScoreNum = 0 ;
let currentChoice = 0;
let playerChoice = 0;
let internalCompValue = 0;
let x;
let y;
let pscore;
let cscore;


/* resets the counters back to 0 */
function resetConditions(){

roundCounter.textContent = 0;
playerScore.textContent = 0;
compScore.textContent = 0;
compChoice.textContent = "";
hiddenContainer.style.display = "none";
superContainer.style.display = "inline-flex"
description.style.display = "inline-flex"

}


/*random # generator */
function choiceGenerator (){
const randomChoice = Math.floor(Math.random()*(3)+1);
currentChoice = randomChoice;
return currentChoice;
}

/*compChoice display box*/
function compChoiceDisplay (){
  
    if (currentChoice === 1){
        compChoice.textContent = "ROCK";

    }
    if (currentChoice === 2){
        compChoice.textContent = "PAPER";

    }

    if (currentChoice === 3){
    compChoice.textContent = "SCISSORS";

}
}

/* initializes website code here */
resetConditions()
/* initializes website code here */



/*PLAYER CHOOSES ROCK*/
playerRock.addEventListener ('click',chooseRock);
function chooseRock (){
roundCounter.textContent++;
playerChoice = 1
choiceGenerator();
gameMechanics ();
compChoiceDisplay();

}


/*PLAYER CHOOSES PAPER*/
playerPaper.addEventListener ('click',choosePaper);
function choosePaper (){
roundCounter.textContent++;
playerChoice = 2
choiceGenerator();
gameMechanics ();
compChoiceDisplay();

}


/*PLAYER CHOOSES SCISSORS*/
playerScissors.addEventListener ('click',chooseScissors);
function chooseScissors (){
roundCounter.textContent++;
playerChoice = 3
choiceGenerator();
gameMechanics ();
compChoiceDisplay();

}




/*GAME MECHANICS*/
function gameMechanics (){
    
x = playerChoice;
y = currentChoice;

if (x===1 && y===1){
        roundOutcome.textContent = ('TIE');
       }
if (x===2 && y===2){
    roundOutcome.textContent = ('TIE');
       }
if (x===3 && y===3){
    roundOutcome.textContent = ('TIE');
       }

if ( x===1 && y===2){
            roundOutcome.textContent = ('ROCK LOSES TO PAPER');
            compScore.textContent++;
            scoreChecker();
       }
if ( x===1 && y===3){
        roundOutcome.textContent = ('ROCK BEATS SCISSORS');
        playerScore.textContent++;
        scoreChecker();
       }
if ( x===2 && y===1){
        roundOutcome.textContent = ('PAPER BEATS ROCK');
        playerScore.textContent++;
        scoreChecker();
       }
if ( x===2 && y===3){
        roundOutcome.textContent = ('PAPER LOSES TO SCISSORS');
        compScore.textContent++;
        scoreChecker();
       }
if ( x===3 && y===1){
        roundOutcome.textContent = ('SCISSORS LOSES TO ROCK');
        compScore.textContent++;
        scoreChecker();
       }
if ( x===3 && y===2){
        roundOutcome.textContent = ('SCISSORS BEATS PAPER');
        playerScore.textContent++;
        scoreChecker();
       }





}
       /*check both player and comp scores*/
function scoreChecker(){
pscore = playerScore.textContent;
cscore = compScore.textContent;
if (pscore==5 || cscore==5){
superContainer.style.display = "none";
hiddenContainer.style.display = "inline-flex";
description.style.display="none";
hiddenPlayerScore.textContent= "You: "+pscore;
hiddenCompScore.textContent="Computer: "+cscore;
}
if (pscore==5) {
    winOrLose.textContent = "You WIN!";
}
else {
    winOrLose.textContent = "You LOSE!";
}
playAgainButton.addEventListener ('click',resetConditions);

}


/*
auto- lose conditions for testing purposes.
*/
function autoLose(){
superContainer.style.display = "none";
hiddenContainer.style.display = "inline-flex";
description.style.display="none";
}





/* if player wins */

/* if comp wins */


    




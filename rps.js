const newGame = document.querySelector(".newGame");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
let computerPick;
let playerPick;
let playerPick2;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    computerPick = Math.floor(Math.random()*3)+1
    return computerPick;
}

function playerPlay(playerPick) {
    if (playerPick=='rock'){
        playerPick2=1;
    }
    else if(playerPick =='paper'){
        playerPick2=2;
    }
    else{
        playerPick2=3;
    }
    console.log(playerPick);
return playerPick2;
}
function gamePrep() {
playerPick = prompt("Pick Rock, Paper, Or Scissors");
playerPick = playerPick.toLowerCase();
if (playerPick!= "rock" && playerPick!="paper" && playerPick!="scissors"){
    alert("Invalid choice. Pick Again");}
    else{
        return playerPick;
    } 
}

function playRound(playerPick) {
    computerPlay();
    if(playerPick==1 && computerPick==3){
        playerScore++;
        alert("You won! Player: "+playerScore+" Computer: "+computerScore)
    }
    else if(computerPick==1 && playerPick==3) {
        computerScore++;
        alert("You lose! Player: "+playerScore+" Computer: "+computerScore)
    }
    else if(computerPick>playerPick) {
        computerScore++;
        alert("You lose! Player: "+playerScore+" Computer: "+computerScore)
    }
    else if(playerPick>computerPick) {
        playerScore++;
        alert("You won! Player: "+playerScore+" Computer: "+computerScore)
    }
    else
        alert("It's a tie. Player: "+playerScore+" Computer: "+computerScore);
    
}

function declareWinner(playerScore,computerScore){
    if(playerScore>computerScore){
    pScore.textContent = "Player: Congratulations! You Won!";
    cScore.textContent = "Computer: Loser";
    }
    else if(computerScore>playerScore){
    pScore.textContent = "Player: Loser";
    cScore.textContent = "Computer: Congratulations! You Won!";
    }
    else{
        pScore.textContent = "DRAW";
    cScore.textContent = "DRAW";
    }
}
function playGame(){
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer:${computerScore}`;
   for(let i=0; i<5; i++ ) {
        gamePrep();
        playerPlay(playerPick);
        setTimeout(playRound(playerPick2),5000);
        pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer:${computerScore}`;
    }
    declareWinner(playerScore,computerScore);
}
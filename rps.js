const newGame = document.querySelector('.newGame');
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const allText = document.querySelector(".allText");
let computerPick;
let playerPick;
let playerPick2;
let playerScore = 0;
let computerScore = 0;
const span = document.createElement('span');
span.textContent = "Select your choice";

const rockbTN = document.createElement('button');
rockbTN.textContent = "Rock";
rockbTN.classList.add('choice');
span.appendChild(rockbTN);

const paperbTN = document.createElement('button');
paperbTN.textContent = "Paper";
paperbTN.classList.add('choice');
span.appendChild(paperbTN);

const scissorsbTN = document.createElement('button');
scissorsbTN.textContent = "Scissors";
scissorsbTN.classList.add('choice');
span.appendChild(scissorsbTN);

const buttons = document.querySelectorAll(".choice");

const par1 = document.createElement('p');
par1.classList.add('update');

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
playerPick = playerPick.toLowerCase();
if (playerPick!= "rock" && playerPick!="paper" && playerPick!="scissors"){
    alert("Invalid choice. Pick Again");}
    else{
        return playerPick;
    } 
}

function playRound(playerPick2) {
    computerPlay();
    if(playerPick2==1 && computerPick==3){
        playerScore++;
        pScore.textContent = "Player: " +playerScore;
        cScore.textContent = "Computer: "+computerScore;
        par1.textContent = " You Won! ";
    }
    else if(computerPick==1 && playerPick2==3) {
        computerScore++;
        pScore.textContent = "Player: " +playerScore;
        cScore.textContent = "Computer: "+computerScore;
        par1.textContent = " You Lost! ";
    }
    else if(computerPick>playerPick2) {
        computerScore++;
        pScore.textContent = "Player: " +playerScore;
        cScore.textContent = "Computer: "+computerScore;
        par1.textContent = " You Lost! ";
    }
    else if(playerPick2>computerPick) {
        playerScore++;
        pScore.textContent = "Player: " +playerScore;
        cScore.textContent = "Computer: "+computerScore;
        par1.textContent = " You Won! ";
    }
    else
    par1.textContent = " It's a tie. "
    pScore.textContent = "Player: " +playerScore;
    cScore.textContent = "Computer: "+computerScore;
    
}

function declareWinner(playerScore,computerScore){
    if(playerScore==5 || computerScore==5){
        if(playerScore>computerScore){
        pScore.textContent = "Player: Congratulations! You Won!";
         cScore.textContent = "Computer: Loser";
         allText.removeChild(span);
         par1.textContent = " You Won! ";
    }
         else if(computerScore>playerScore){
         pScore.textContent = "Player: Loser";
        cScore.textContent = "Computer: Congratulations! You Won!";
        allText.removeChild(span);
        par1.textContent = " You Lost! ";
    }
         else{
        pScore.textContent = "DRAW";
         cScore.textContent = "DRAW";
    }
    }
}
/*function playGame(){
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
}*/

newGame.addEventListener('click',()=> {
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer:${computerScore}`;
    allText.appendChild(span);
    allText.appendChild(par1);
})
rockbTN.addEventListener('click',()=>{
        playerPick = "rock";
        playerPlay(playerPick);
        computerPlay();
        console.log(playerPick2);
        console.log(computerPick);
        playRound(playerPick2);
        declareWinner(playerScore,computerScore);
    })

paperbTN.addEventListener('click',()=>{
        playerPick = "paper";
        playerPlay(playerPick);
        computerPlay();
        console.log(playerPick2);
        console.log(computerPick);
        playRound(playerPick2);
        declareWinner(playerScore,computerScore);
    })

scissorsbTN.addEventListener('click',()=>{
        playerPick = "scissors";
        playerPlay(playerPick);
        console.log(playerPick2);
        console.log(computerPick);
        playRound(playerPick2);
        declareWinner(playerScore,computerScore);
    })

//play buttons
const rbt = document.querySelector('#rockBT');
rbt.addEventListener('click', () => {
    playRound(playerSelection='rock',computerPlay());
});

const pbt = document.querySelector('#paperBT');
pbt.addEventListener('click', () => {
    playRound(playerSelection='paper',computerPlay());
});

const sbt = document.querySelector('#scissorBT');
sbt.addEventListener('click', () => {
    playRound(playerSelection='scissor',computerPlay());
});

//computer making its choice
function computerPlay(){
    let wepons = ["rock","paper","scissor"];
    let computerChoice = wepons[Math.floor(Math.random() * wepons.length)];
    return computerChoice;
}

//variables
let pScore = 0;
let cScore = 0;
let message = '';
   
//cheking results
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === "rock" && computerSelection === "paper") {
        cScore+=1;
        message = 'You Lose! Paper beats Rock';     
    } else if (playerSelection === "rock" && computerSelection === "scissor"){
        pScore+=1;
        message = 'You Won!! Rock beats Scissors';
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        pScore+=1;
        message = 'You Won!! Paper beats Rock';
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        cScore+=1;
        message = 'You Lose! Scissors beats Paper';
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
        cScore+=1;
        message = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        pScore+=1;
        message = 'You Won!! Scissors beats Paper';
    } else {
        message = "It's a Draw, Try again";
    }
    
    displayBoard (playerSelection,computerSelection)
}

//display board
function displayBoard (playerSelection,computerSelection){
    //display choices
    const resultDisplay = document.querySelector('.choices');
    resultDisplay.innerHTML = `<p>You:  ${playerSelection}<br>Comp: ${computerSelection}<br><br>${message}</p>`

    //display score
    const scoreBoard = document.querySelector('.result');
    scoreBoard.innerHTML = `<p>${pScore}<br>${cScore}</p>`;

    if (pScore > 4){
        pScore = 0;
        cScore = 0;
        scoreBoard.innerHTML = `<h2>You Won This Round</h2>`
    } else if (cScore > 4){
        pScore = 0;
        cScore = 0;
        scoreBoard.innerHTML = `<h2>Comp Won This Round</h2>`
    }
}



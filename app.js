let wepons = ["rock","paper","scissor"];

//computer making its choice
function computerPlay(){
    let computerChoice = wepons[Math.floor(Math.random() * wepons.length)];
    return computerChoice;
}
   
//cheking results
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === "rock" && computerSelection === "paper") {
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Lose! Paper beats Rock`
    } else if (playerSelection === "rock" && computerSelection === "scissor"){
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Won!! Rock beats Scissors`
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Won!! Paper beats Rock`
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Lose! Scissors beats Paper`
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Lose! Rock beats Scissors`
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        You Won!! Scissors beats Paper`
    } else {
        return `
        You: ${playerSelection}
        Computer: ${computerSelection+"\n"}
        It's a Draw, Try again`
    }
}

//play function
function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("select a choice\nrock - paper - scissor")
        playerSelection = playerSelection.toLowerCase();
        
        //cheking if the choice was acceptable 
        if (wepons.includes(playerSelection)) {
            const computerSelection = computerPlay();
            alert(playRound(playerSelection, computerSelection));
        } else {
            alert("wrong choice!!!")
        }    
    }
}

//launch the game
game();
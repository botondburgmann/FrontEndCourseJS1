function computerPLay() {
    const computersChoise = Math.floor(Math.random() * 3);
    switch (computersChoise) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.error("Error: Something went wrong");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats Paper";
    } 
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock";
    } 
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper";
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors";
    } 
    else if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    else {
        return "Error: Please choose rock, paper or scissors!";
    }
    
}   

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: GO!`);
        let computerSelection = computerPLay();
        let result = playRound(playerSelection, computerSelection)
        if (result.includes("Error")){
            console.error(result);
            i--;   
        }
        else{
            console.log(result);
            if (result.includes("You lose") || result.includes("tie"))
                i--;
        }
    }

    console.log("Game over! Congratulations!");
}

game()
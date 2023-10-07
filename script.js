function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerWins = 0;
let playerWins = 0;
let gameAborted = false;

function playRound(playerSelection, computerSelection) {

    const outcomes = {
        rock: { beats: "scissors", message: "Rock beats Scissors" },
        paper: { beats: "rock", message: "Paper beats Rock" },
        scissors: { beats: "paper", message: "Scissors beats Paper" },
    };

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (outcomes[playerSelection] !== undefined && outcomes[playerSelection].beats === computerSelection) {
        playerWins++;
        return "You win! " + outcomes[playerSelection].message;
    } else {
        computerWins++;
        return "You lose! " + outcomes[computerSelection].message;
    }
}

function isInputValid(playerSelection) {
    if (playerSelection.trim().toLowerCase() === "rock" || 
    playerSelection.trim().toLowerCase() === "paper" || 
    playerSelection.trim().toLowerCase() === "scissors") 
        return true;
    else
        return false;
}

function game() {
    console.log("Welcome to this rock, paper, scissors game! Write your choice in the prompt field");
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: Choose Rock, Paper or Scissors`);
        let computerSelection = computerPlay();
        if (playerSelection === null) {
            gameAborted = true;
            console.log("Game aborted.");
            break;
        }
        else{

        }
        if (isInputValid(playerSelection))
            console.log(playRound(playerSelection.trim().toLowerCase(), computerSelection));
        else{
            console.error("Invalid input! Please, choose rock, paper or scissors");
            i--;
        }
    
    
    }
    if (!gameAborted){
        if (playerWins > computerWins) {
            console.log(`Congratulations! You won ${playerWins} to ${computerWins}!`)
        } else if (playerWins < computerWins){
            console.log(`You failed! The computer won ${computerWins} to ${playerWins}!`)
        } else {
            console.log(`It's a tie! Guess none of you was strong enough to defeat the other`)
        }
    }
}

game();
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerWins = 0;
let playerWins = 0;

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
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: Choose Rock, Paper or Scissors`);
        let computerSelection = computerPlay();
        if (isInputValid(playerSelection))
            alert(playRound(playerSelection.trim().toLowerCase(), computerSelection));
        else{
            alert("Invalid input! Please, choose rock, paper or scissors");
            i--;
        }
    
    }
    if (playerWins > computerWins) {
        alert(`Congratulations! You won ${playerWins} to ${computerWins}!`)
    } else {
        alert(`You failed! The computer won ${computerWins} to ${playerWins}!`)
    }
}

game();
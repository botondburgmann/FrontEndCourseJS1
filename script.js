let currentRound = parseInt(localStorage.getItem("currentRound")) || 1;
let userWins = parseInt(localStorage.getItem("userWins")) || 0;

const Wincount = document.getElementById("userWins");
Wincount.textContent = Math.floor(userWins / 5);


document.querySelector(".btn").addEventListener("click", startGame);

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection ? playerSelection.trim().toLowerCase() : null;

    if (!playerSelection) {
        return "Error: Canceled the game.";
    }

    if (currentRound < 1 || currentRound > 5) {
        return "Error: Invalid round number";
    }

    const outcomes = {
        rock: { beats: "scissors", message: "Rock beats Scissors" },
        paper: { beats: "rock", message: "Paper beats Rock" },
        scissors: { beats: "paper", message: "Scissors beats Paper" },
    };
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"))
        return "Error: Invalid input"
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (outcomes[playerSelection] !== undefined && outcomes[playerSelection].beats === computerSelection) {
        localStorage.setItem("currentRound", currentRound + 1);
        return "You win! " + outcomes[playerSelection].message;
    } else {
        return "You lose! " + outcomes[computerSelection].message;
    }
}

function updateRoundCounter() {
    const roundCounter = document.getElementById("roundCounter");
    roundCounter.textContent = `Round ${currentRound}`;
}

function updateWinCount() {
    const Wincount = document.getElementById("userWins");
    Wincount.textContent = Math.floor(userWins / 5); 
}

function game() {
    while (currentRound <= 5) {
        updateRoundCounter();
        let playerSelection = prompt(`Round ${currentRound}: Choose Rock, Paper, or Scissors:`);
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes("Error")) {
            console.error(result);
            break;
        } else {
            console.log(result);
        }

        if (result.includes("You win")) { 
            userWins++;
            localStorage.setItem("userWins", userWins);
            alert(`Congratulations! You won round ${currentRound}.`);
            currentRound++; 
        }
    }

    if (currentRound > 5) {
        alert(`Finshed! You won ${Math.floor(userWins / 5)} Total Games!.`);
        localStorage.removeItem("currentRound");
        updateWinCount(); 
    }
}

function startGame() {
    currentRound = 1;
    localStorage.setItem("currentRound", currentRound);
    updateRoundCounter();
    updateWinCount(); 
    game();
}

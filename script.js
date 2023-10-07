let currentRound = parseInt(localStorage.getItem("currentRound")) || 1;
let userWins = 0;

document.querySelector(".btn").addEventListener("click", startGame);

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection ? playerSelection.toLowerCase() : null;

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

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (outcomes[playerSelection] !== undefined && outcomes[playerSelection].beats === computerSelection) {
        userWins++;
        localStorage.setItem("currentRound", currentRound + 1);
        updateWinCount(); 
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
    const userWins= document.getElementById("userWins");
    userWins.textContent = userWins;
}

function game() {
    for (; currentRound <= 5; currentRound++) {
        let playerSelection = prompt(`Round ${currentRound}: GO!`);
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes("Error")) {
            console.error(result);
            currentRound--;
            break;
        } else {
            console.log(result);
        }
    }
    console.log(`Game over! You won ${userWins} rounds.`);
    localStorage.removeItem("currentRound"); 
}

function startGame() {
    currentRound = 1;
    userWins = 0;
    localStorage.setItem("currentRound", currentRound);
    updateRoundCounter();
    updateWinCount(); 
    game();
}

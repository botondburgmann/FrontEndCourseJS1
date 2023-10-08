const choices = ["rock", "paper", "scissors"];
const wins = {
    "computer wins" : 0,
    "player wins" : 0
}

let isGameAborted = false;

// Choose an option from the choices randomly
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Different outcomes (which option beats which option)
    const outcomes = {
        rock: { beats: "scissors", message: "Rock beats Scissors" },
        paper: { beats: "rock", message: "Paper beats Rock" },
        scissors: { beats: "paper", message: "Scissors beats Paper" },
    };
    // if both are equal, return a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    // if the player's choice beats the computer's choice increase the player's wins and return a win message
    } else if (outcomes[playerSelection] !== undefined && outcomes[playerSelection].beats === computerSelection) {
        wins["player wins"]++;
        return "You win! " + outcomes[playerSelection].message;
    // Otherwise increase the computer's wins and return a lose message
    } else {
        wins["computer wins"]++;
        return "You lose! " + outcomes[computerSelection].message;
    }
}

function validate(playerSelection) {
    // If the trimmed, lowercase version of the input is in the choices return the option trimmed and in lowercase
    if (choices.includes(playerSelection.trim().toLowerCase())){
        return playerSelection.trim().toLowerCase();
    }
    // Otherwise (i.e. invalid input) return an empty string
    else
        return "";
}

// Evaluate the winner and display a message
function results() {
    if (wins["player wins"] > wins["computer wins"]) {
        console.log(`Congratulations! You beat the computer ${wins["player wins"]} to ${wins["computer wins"]} `);
    }
    else if (wins["player wins"] < wins["computer wins"]) {
        console.log(`You failed! The computer beat you ${wins["computer wins"]} to ${wins["player wins"]}`);
    }
    else {
        console.log("It's a tie! Neither of you were strong enough");
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: Choose rock, paper or scissors`);
        // If the value is null (i.e. the user clicked on cancel: exit the game)
        if (playerSelection === null) {
            console.log("Bye bye!");
            isGameAborted = true;
            break;  
        }
        // Else, validate the input
        else{
            playerSelection = validate(playerSelection);
            // If playerSelection is an empty string it means, there was an error
            if (playerSelection === "") {
                console.error("Invalid input! Please, choose rock paper or scissors");
                i--;
            // Else, let the computer choose, and play the round 
            } else {
                let computerSelection = computerPlay()
                console.log(playRound(playerSelection, computerSelection));
            }
        }

    }
    // If the game wasn't aborted show the results after the 5th correct round
    if (isGameAborted === false)
        results();
}

game()
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("Something went horribly wrong in getComputerChoice.");
    }
}

function playRound(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = capitalise(e.target.id);

    if (playerSelection == computerSelection) {
        outcome.textContent = `Draw! Your ${playerSelection} equals computer's ${computerSelection}`;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            outcome.textContent = `You win! Your ${playerSelection} beats computer's ${computerSelection}`;
            playerScore++;
        } else if (computerSelection == "Paper") {
            outcome.textContent = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
            computerScore++;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            outcome.textContent = `You win! Your ${playerSelection} beats computer's ${computerSelection}`;
            playerScore++;
        } else if (computerSelection == "Scissors") {
            outcome.textContent = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
            computerScore++;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            outcome.textContent = `You win! Your ${playerSelection} beats computer's ${computerSelection}`;
            playerScore++;
        } else if (computerSelection == "Rock") {
            outcome.textContent = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
            computerScore++;
        }
    }
    playerScoreCounter.textContent = `${playerScore}`;
    computerScoreCounter.textContent = `${computerScore}`;
    if (checkEndofGame()) {
        terminateGame();
    }
}

function checkEndofGame() {
    if (computerScore == 5) {
        outcome.textContent = `Score of 5 reached! Computer wins!`
        return true;
    } else if (playerScore == 5) {
        outcome.textContent = `Score of 5 reached! Player wins!`
        return true;
    }
    return false
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function terminateGame() {
    rockButton.removeEventListener("click", playRound);
    paperButton.removeEventListener("click", playRound);
    scissorsButton.removeEventListener("click", playRound);
    replayButton.style.visibility = "visible";
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    rockButton.addEventListener("click", playRound);
    paperButton.addEventListener("click", playRound);
    scissorsButton.addEventListener("click", playRound);
    playerScoreCounter.textContent = 0;
    computerScoreCounter.textContent = 0;
    outcome.textContent = "Game restarted!";

    replayButton.style.visibility = "hidden";
}

let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const replayButton = document.querySelector("#replay");
const outcome = document.querySelector("#outcome");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);
replayButton.addEventListener("click", resetGame);
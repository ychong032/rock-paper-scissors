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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("Draw! " + `${playerSelection} equals ${computerSelection}`);    
        return 0;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            console.log("You win! " + `${playerSelection} beats ${computerSelection}`);
            return 1;
        } else if (computerSelection == "Paper") {
            console.log("You lose! " + `${computerSelection} beats ${playerSelection}`);
            return -1;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You win! " + `${playerSelection} beats ${computerSelection}`);
            return 1;
        } else if (computerSelection == "Scissors") {
            console.log("You lose! " + `${computerSelection} beats ${playerSelection}`);
            return -1;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            console.log("You win! " + `${playerSelection} beats ${computerSelection}`);
            return 1;
        } else if (computerSelection == "Rock") {
            console.log("You lose! " + `${computerSelection} beats ${playerSelection}`);
            return -1;
        }
    } else {
        console.log("You didn't pick rock, paper or scissors. You lose!");
        return -1;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let result;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter rock, paper, or scissors:", '').trim();
        result = playRound(playerSelection, getComputerChoice());
        switch (result) {
            case 0:
                break;
            case 1:
                playerScore += 1;
                break;
            case -1:
                computerScore += 1;
                break;
            default:
                console.log("Something went wrong in game()");
        }
    }

    console.log("Final score\n" + `Player: ${playerScore}\n` + `Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("You lose! Try again next time!");
    } else {
        console.log("It's a tie! How did that happen?");
    }
}

game();
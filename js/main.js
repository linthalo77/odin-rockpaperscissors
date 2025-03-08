let humanScore = 0;
let computerScore = 0;

onload = function() {
    console.log("Started program!");
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissors");

    let humanSelection = "";
    let computerSelection = "";

    rockBtn.addEventListener("click", () => {
        humanSelection = "ROCK";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    scissorBtn.addEventListener("click", () => {
        humanSelection = "SCISSORS";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });

    paperBtn.addEventListener("click", () => {
        humanSelection = "PAPER";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
    
    /*rockBtn.addEventListener("click", playRound("ROCK", getComputerChoice())); why doesn't this work???!*/ 

}

function getComputerChoice () {
    console.log("Executes getComputerChoice");
    let chance = Math.random();
    let third = 1 / 3;
    if (chance <= third) {
        return "ROCK";
    } else if (chance > third && chance <= third * 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound (humanChoice, computerChoice) {
    const selection = document.querySelector(".selection");
    const roundWinner = document.querySelector(".round-winner");
    const score = document.querySelector(".score");

    selection.textContent = `You selected: ${humanChoice}\nComputer selected: ${computerChoice}`;

    if (humanScore < 5 && computerScore < 5)
    if (humanChoice == computerChoice) {
        roundWinner.textContent = "Tie!";
    } else if (humanChoice == "ROCK" && computerChoice != "PAPER" || humanChoice == "PAPER" && computerChoice != "SCISSORS" || humanChoice == "SCISSORS" && computerChoice != "ROCK") {
        humanScore++;
        roundWinner.textContent = "You win!"
    } else {
        computerScore++;
        roundWinner.textContent = "You lose!"
    }

    score.textContent = `Score: Player: ${humanScore} Computer: ${computerScore}`;

    if (humanScore >= 5)
        alert("You win!")
    else if (computerScore >= 5) {
        alert("Computer wins!")
    }
}



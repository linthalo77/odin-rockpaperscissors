let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
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

function getHumanChoice () {
    return prompt("Rock, Paper or Scissors?").toUpperCase();
}

function playRound (humanChoice, computerChoice) {      // returns 0 on computer win and 1 on player win
    humanChoice = humanChoice.toUpperCase();

    if (humanChoice == computerChoice)
        return -1;

    if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            computerChoice++;
            return 0;
        } else {
            humanScore++;
            return 1;
        }
    }

    if (humanChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            computerScore++;
            return 0;
        } else {
            humanScore++;
            return 1;
        }
    }

    if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            computerScore++;
            return 0;
        } else {
            humanScore++;
            return 1;
        }
        
    }
}

function playGame (roundNum) {
    console.log("Best of " + roundNum);
    let i = 0;
    while (i < roundNum) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You selected: ${humanSelection}\nComputer selected: ${computerSelection}`);

        let round = playRound(humanSelection, computerSelection);
        const score = `Score: Player: ${humanScore} Computer: ${computerScore}`;

        if (round == 1) {
            console.log("You win!")
            console.log(score);
        } else if (round == 0) {
            console.log("Computer wins!")
            console.log(score);
        } else {
            console.log("Tie!")
            console.log(score);
        }
        ++i;
    }

}

playGame(5);
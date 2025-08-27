let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    randomNumber = (Math.floor(Math.random()*3)+1);
    
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
       return "scissors";
    }
    }

const computerChoice = getComputerChoice();

humanChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

function getHumanChoice () {
    humanChoice = humanChoice.toLowerCase();
    console.log("You chose " + humanChoice);
    return humanChoice;
}

console.log("You chose " + humanChoice);
console.log("Computer chose " + computerChoice);

function playRound(humanChoice, computerChoice){

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore ++;
        console.log("You win! +1 point to you");
        
    }
    else if (humanChoice===computerChoice){
        console.log("Draw!")
    }
    else {
        computerScore ++;
        console.log("You lose... +1 point to computer")
    }
    
}

playRound(humanChoice,computerChoice);

console.log ("Your score is " + humanScore);
console.log("Computer score is " + computerScore);


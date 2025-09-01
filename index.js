let humanScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win!"
let loss = "You lost..."
let tie = "It's a tie!"

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

function playRound(humanChoice, computerChoice){

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore ++;
        return win;
        
    }
    else if (humanChoice===computerChoice){
        return tie;
    }
    else {
        computerScore ++;
        return loss;
    }
}

let i = 0;
const play = () => {
    let humanChoice = prompt("Pick a move");
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice))
    console.log("Your score = " + humanScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        play();
    } else {
        if (humanScore>computerScore) {
            alert("Game Over: You scored: " + humanScore + " and Computer scored: "+computerScore + ". " + win)
        }
        else if (humanScore=computerScore) {
            alert("Game Over: You scored: " + humanScore + " and Computer scored: "+computerScore + ". " +tie)
        }
        else {
            alert("Game Over: You scored: " + humanScore + " and Computer scored: " + computerScore + ". " + loss)
        }
    }
}

play();

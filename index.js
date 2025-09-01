let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#result");
const currentScore = document.querySelector("#score");
const outcome = document.querySelector(".outcome");

const buttons = document.querySelectorAll(".game-button");
buttons.forEach(button => {
  button.addEventListener("click", playRound);
});

function getComputerChoice () {
    const randomNumber = (Math.floor(Math.random()*3)+1);
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


function playRound(event){
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.id;
    currentScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
    buttons.disabled= true;
    finalResult.textContent = humanScore === 5 ? "You won the game!" : "Computer won the game!";
    }
    
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore ++;
        outcome.textContent="You win!";
    }
    else if (humanChoice === computerChoice){
        outcome.textContent="It's a tie!";
    }
    else {
        computerScore ++;
         outcome.textContent="You lost...";
    }

}

const finalResult = document.querySelector("#final");

/* things to add 
1. update score at the same time as message is displayed. it is one behind.
2. stop game after 5 is reached i.e. button no longer does anything
3. add some css to make the game pretty
*/

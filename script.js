let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".choice-btn");
buttons.forEach(button => button.addEventListener("click", getPlayerChoice));

let display = document.querySelector("#display");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        return "rock";
    } else if(choice == 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function getPlayerChoice(event){
    if(playerScore === 5 || computerScore === 5) return;

    let playerChoice = event.target.value;
    let result = playRound(playerChoice);
    display.innerText = `${result} | Score: You ${playerScore} - ${computerScore} computer`;

    if(playerScore === 5) display.innerText = "Game Over! You won the match!";
    if(computerScore === 5) display.innerText = "Game Over! Computer won the match!";
}

function playRound(playerChoice){
    player = playerChoice;
    computer = getComputerChoice();
    
    if(player == computer){
        return "It's a tie!";
    }

    if((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper") ) {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    } else{
        computerScore++;
        return `You loose! ${computer} beats ${player}`;
    }

}




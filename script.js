function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        return "rock";
    } else if(choice == 2){
        return "paper";
    } else{
        return "scissor";
    }
}

function getPlayerChoice(){
    let choice = prompt("Enter your choice(1.Rock, 2.Paper, 3.Scissor): ");
    
    return choice;
}



function playGame(num){
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerChoice, computerChoice){
    player = playerChoice.toLowerCase();
    computer = computerChoice;
    
    if(player == computer){
        return "It's a tie!";
    }

    if((player == "rock" && computer == "scissor") || (player == "paper" && computer == "rock") || (player == "scissor" && computer == "paper") ) {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    } else{
        computerScore++;
        return `You loose! ${computer} beats ${player}`;
    }

    }

    for(i = 0; i < num; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let roundResult = playRound(playerChoice, computerChoice);

        console.log(`Round ${i + 1} : ${roundResult}`);
    }

    console.log("Player Score is : ", playerScore);
    console.log("Computer Score is : ", computerScore);

    if(playerScore > computerScore){
        console.log("Player wins");
    } else{
        console.log("Computer wins");
    }
}

playGame(5);


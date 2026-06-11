function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Enter your choice(1.Rock, 2.Paper, 3.Scissor): ");
    if(choice == 1){
        return 1;
    } else if(choice == 2){
        return 2;
    } else if(choice == 3){
        return 3;
    } else{
        console.log("Choose from given choices");
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());



console.log(getPlayerChoice());

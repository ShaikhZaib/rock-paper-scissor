function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

console.log(getComputerChoice());
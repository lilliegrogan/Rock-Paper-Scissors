function computerPlay() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "r";
    } else if (randomNumber === 1){
        return "p";
    } else if (randomNumber === 2){
        return "s";
    }
    return choices[randomNumber];
}

function userChoice(){
    let userChoice = prompt("please enter your choice:");
    userChoice = userChoice.toLowerCase
    if (userChoice === 'r' || userChoice === 'p' || userChoice ==='s'){
        return userChoice;
    } else {
        alert("Invalid choice");
    }
}

let playerSelection = userChoice();

let computerSelection = computerPlay();




function playRound(playerSelection, computerSelection){
     if (playerSelection === computerSelection){
        console.log('Tie')
    } else if (playerSelection === 'r' && computerSelection === 'p'){
        console/log("You lose");
    } else if (playerSelection === 'p' && computerSelection === 's'){
        console.log("You lose");
    } else if (playerSelection === 's' && computerSelection === 'r'){
        console.log("You lose");
    } else if (playerSelection === 'r' && computerSelection === 's'){
        console.log("You win");
    } else if (playerSelection === 'p' && computerSelection === 'r'){
        console.log("You win");
    } else if (playerSelection === 's' && computerSelection === 'p'){
        console.log("You win");
    }    
}




playRound();
//console.log(playRound(playerSelection, computerSelection));
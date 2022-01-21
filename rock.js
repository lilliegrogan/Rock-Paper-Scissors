// computerPlay function has the computer pick a random number 0-2 and assigns it to rock paper or scissors
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else if (randomNumber === 2){
        return "scissors";
    }
   
}
 


//userChoice function lets the player enter rock paper or scissors

function userChoice(){
    let user = prompt("Enter your choice ");
    user = user.toLowerCase(); 
    console.log("Your choice is: " + user);  

   
}

userChoice();
console.log("Computer played: " + computerPlay());



/*let playerSelection = userChoice();

let computerSelection = computerPlay();*/











/*function playRound(playerSelection, computerSelection){
     if (playerSelection === computerSelection){
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return"You lose";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You lose";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You win";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return "You win";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return "You win";
    }    
}




playRound();
console.log(playRound(playerSelection, computerSelection));*/ 
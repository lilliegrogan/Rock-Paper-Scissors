//computerPlay function has computer pick a random number and assins it to rock paper or scissors
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0){
        console.log("Computer played: rock");
        return "rock";
    } else if (randomNumber === 1){
        console.log("Computer played: paper");
       return "paper";
    } else if (randomNumber === 2){
        console.log("Computer played: scissors")
       return "scissors";
    }
   
}
 
//userChoice function lets the player enter rock paper or scissors

function userChoice(){
    let user = prompt("Enter your choice ");
    user = user.toLowerCase(); 
    if (user === "rock" || user === "paper" || user === "scissors"){
        console.log("Your choice is: " + user);
    } else {
        console.log("invalid choice");
    }
    return user 
}


let playerSelection = userChoice();
let computerSelection = computerPlay();

// playRound function tells the program the rules behind winning and losing
function playRound(){
    if (playerSelection === computerSelection){
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win");
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win");
    }    
}

playRound();

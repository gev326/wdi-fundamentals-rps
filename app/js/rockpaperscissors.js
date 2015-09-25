'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
        move = move || getInput();
        
      
    
  /*      if (move === "rock" || move === "scissors" || move === "paper"){
            move = move;
        }
        
        
        else {
            move = getInput();
        } */
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move
}

function getComputerMove(move) {
        move = move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("The Computer chose: " + move)
    return move
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer"
        console.log("The Computer Wins! You Lose!");
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player"
        console.log("You Win! Computer Loses!");
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player"
        console.log("You Win! Computer Loses!");
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "player"
        console.log("The Computer Wins! You Lose!");
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer"
        console.log("The Computer wins! You Lose!");
    }
    else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player"
        console.log("You Win! Computer Loses!");
    }
    else if(playerMove === null || playerMove != "rock" || playerMove != "scissors" || playerMove != "paper"){
        console.log("wrong choice! please choice rock, paper, or scissors!");
    }
    else{
        winner = "tie"
        console.log("Tie Game! Play again!");
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
   while (playerWins <5 && computerWins < 5){   
        var winner = getWinner(getPlayerMove(), getComputerMove());
    
        if (winner == "player") {
        playerWins++;
        console.log("Your Score: " + playerWins + " Computer Score: " + computerWins);
        }
        else if (winner == "computer") {
        computerWins++;
        console.log("Your Score: " + playerWins + " Computer Score: " + computerWins);
        }
        else {
        console.log("Tie Game! Your Score: " + playerWins + " Computer Score: " + computerWins);
        }

   }
    if (playerWins == 5) {
        console.log("You Win " + playerWins + " to " + computerWins + " Congrats!");
    } 
    else {
        console.log("Computer wins " + computerWins + " to " + playerWins + " Sorry, Better Luck Next Time.");
    }

}



playToFive();
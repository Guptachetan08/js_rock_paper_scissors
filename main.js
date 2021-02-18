/* function to randomly generate computer choice of rock,paper or scissors*/

function computerPlay() {
    let r = Math.ceil(Math.random()*3);         
    if(r==1){
        return "Rock";
    }
    else if(r==2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//console.log(computerPlay());
//playRound is function to play a single round and giving the result after taking player and computer's choice

function playRound(playerSelection,computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    if(p=="rock"){
        if(c=="paper")
            return "You lose! Paper beats Rock";
        else if(c=="scissors"){
            return "You win! Rock beats Scissors";
        }
        else{
            return "Match tied! Same choice";
        }
    }
    else if(p=="paper"){
        if(c=="rock"){
            return "You win! Paper beats Rock";
        }
        else if(c=="scissors"){
            return "You lose! Scissors beats Paper";
        }
        else{
            return "Match tied! Same choice";
        }
    }
    else if(p=="scissors"){
        if(c=="rock"){
            return "You lose! Rock beats Scissors";
        }
        else if(c=="paper"){
            return "You win! Scissors beat Paper";
        }
        else{
            return "Match tied! Same choice";
        }
    }
  
}

//this game function is the main controling function of above two that plays five rounds.

function game(){

    for(let i=0;i<5;i++){
    let playerSelection = prompt("What's your choice?(Rock,Paper or Scissors)");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    }

}

game();
let playerMove = prompt ("Choose rock, paper or scissors") ;
let computerRandom = Math.floor(Math.random() * 3);


let computerFunction = function(){
    if (computerRandom == 0){
        return computerMove = "rock";
    } else if (computerRandom == 1){
        return computerMove = "paper";
    } else {
        return computerMove = "scissors";
    }
}

computerMove = computerFunction()

let playerScore = '0';
let computerScore ='0';


const rules = function(player1, player2){
    if (playerMove === computerMove)
        return player1 = 0; 
    if (playerMove == "rock" && computerMove == "scissors"){
        return player1 = 1
    } else if (playerMove == "rock" && computerMove == "paper"){
        return player1 = -1
    } else if (playerMove == "paper" && computerMove == "rock"){
        return player1 = 1
    } else if (playerMove == "paper" && computerMove == "scissors"){
        return player1 = -1
    } else if (playerMove == "scissors" && computerMove == "paper"){
        return player1 = 1
    } else if (playerMove == "scissors" && computerMove == "rock"){
        return player1 = -1
    }
}

if(rules() == 1){
    alert ("win " + rules()) 
} else if (rules() == 0){
    alert ("draw " + rules())
} else if (rules()  == -1){
    alert ("lose " + rules())
}
console.log(rules())
console.log(computerFunction())
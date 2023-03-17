
let playerMove = "paper";
let computerMove = "paper";
let playerScore = '0';
let computerScore ='0';


const rules = function(player1, player2){
    if (playerMove === computerMove)
        return player1 = 0
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
    console.log('win')
} else if (rules() == 0){
    console.log('draw')
} else if (rules() == -1){
    console.log('lose')
}
console.log(rules())
let play = true
let playerScore = 0;


let username = prompt ("Please enter a username")


while (username.length > 10) {
    alert ('Username is more than 10 words, please try again')
    username = prompt('Please enter a new username')
}

while (play == true){


let playerMove = prompt ( username+ " choose rock, paper or scissors") ;

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

let computerScore = 0;

const rules = function(){
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
playerScore = playerScore + rules()

if(rules() == 1){
    alert ("the computer chose " + computerMove + "       win "+" score: " + playerScore) 
} else if (rules() == 0){
    alert ("the computer chose " + computerMove + "       draw "+" score: " + playerScore)
} else if (rules()  == -1){
    alert ("the computer chose " + computerMove + "       lose "+" score: " + playerScore)
}


console.log(playerScore)
console.log(rules())
console.log(computerFunction())

play = confirm( username + " confirm to play again")

}


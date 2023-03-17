
let playerMove = "paper";
let computerMove = "rock";

let compare = function () {
    if (playerMove === computerMove)
    return console.log("draw!")
    }

if (playerMove == "rock" && computerMove == "scissors"){
        console.log('win')
    } else if (playerMove == "rock" && computerMove == "paper"){
        console.log('lose')
    } else if (playerMove == "paper" && computerMove == "rock"){
        console.log('win')
    } else if (playerMove == "paper" && computerMove == "scissor"){
        console.log('lose')
    } else if (playerMove == "scissor" && computerMove == "paper"){
        console.log('win')
    } else if (playerMove == "scissor" && computerMove == "rock"){
        console.log('lose')
    }



compare (playerMove,computerMove)
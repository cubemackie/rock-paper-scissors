function getHumanChoice () {
    let text = "";
    let humanChoice=prompt("Choose between 'Rock', 'Paper', or 'Scissors'");
    let lowerHumanChoice=humanChoice.toLowerCase();
    switch (lowerHumanChoice) {
        case "rock":
            console.log("The rock? Excellent choice.");
            break;
        case "paper":
            console.log("Paper? Good luck.");
            break;
        case "scissors":
            console.log("Scissors? Snippy snip.");
            break;
        default:
            console.log("I have never heard of that one.");
}
return lowerHumanChoice;
}

function getComputerChoice (max) {
    
    if (Math.floor(Math.random()* max)===0) {
        console.log("Computer selects rock.")
        return "rock";
    } else if (Math.floor(Math.random()* max)===1) {
        console.log("Computer selects paper.")
        return "paper";
    } else if (Math.floor(Math.random()* max)===2) {
        console.log("Computer selects scissors.")
        return "scissors";
    }
        }

    console.log(getComputerChoice(3))


const computerSelection = getComputerChoice("")
const humanSelection = getHumanChoice ("")


function playRound (humanSelection, computerSelection) {
    if (humanSelection==="rock" && computerSelection==="rock") {
    console.log("It's a tie, try again!")
   } else if (humanSelection==="paper" && computerSelection==="rock") {
    console.log("Computer picks rock, you win!")
    humanScore++
   } else if (humanSelection==="scissors" && computerSelection==="rock") {
    console.log("Computer picks rock, you lose.")
    computerScore++
   } else if (humanSelection==="rock" && computerSelection==="paper") {
    console.log("Computer chose paper, you lose.")
    computerScore++
   } else if (humanSelection==="rock" && computerSelection==="scissors") {
    console.log("Computer picks scissors, you win!")
    humanScore++
   } else if (humanSelection==="scissors" && computerSelection==="scissors") {
    console.log("You're both scissors, it's a tie.")
    } else if (humanSelection==="scissors" && computerSelection==="paper") {
    console.log("You chose scissors, you win!")
    humanScore++
    } else if (humanSelection==="paper" && computerSelection==="scissors") {
    console.log("Computer chose scissors, you lose!")
    computerScore++
    } else if (humanSelection==="paper" && computerSelection==="paper") {
    console.log("Both paper, it's a tie")

}
}
let humanScore=(0);
let computerScore=(0);
playRound (humanSelection, computerSelection);

console.log ("Human score:", humanScore, "Computer score;", computerScore)

function playGame (playRound) {
    let humanScore=(0);
    let computerScore=(0);
    function playRound (humanSelection, computerSelection) {
        if (humanSelection==="rock" && computerSelection==="rock") {
            console.log("It's a tie, try again!")
           } else if (humanSelection==="paper" && computerSelection==="rock") {
            console.log("Computer picks rock, you win!")
            humanScore++
           } else if (humanSelection==="scissors" && computerSelection==="rock") {
            console.log("Computer picks rock, you lose.")
            computerScore++
           } else if (humanSelection==="rock" && computerSelection==="paper") {
            console.log("Computer chose paper, you lose.")
            computerScore++
           } else if (humanSelection==="rock" && computerSelection==="scissors") {
            console.log("Computer picks scissors, you win!")
            humanScore++
           } else if (humanSelection==="scissors" && computerSelection==="scissors") {
            console.log("You're both scissors, it's a tie.")
            } else if (humanSelection==="scissors" && computerSelection==="paper") {
            console.log("You chose scissors, you win!")
            humanScore++
            } else if (humanSelection==="paper" && computerSelection==="scissors") {
            console.log("Computer chose scissors, you lose!")
            computerScore++
            } else if (humanSelection==="paper" && computerSelection==="paper") {
            console.log("Both paper, it's a tie")
    }
}
}

function getComputerChoice (max) {
    
    if (Math.floor(Math.random()* max)===0) {
        console.log("Computer selects rock.")
        return 0;
    } else if (Math.floor(Math.random()* max)===1) {
        console.log("Computer selects paper.")
        return 1;
    } else if (Math.floor(Math.random()* max)===2) {
        console.log("Computer selects scissors.")
        return 2;
    }
    }

console.log(getComputerChoice(3))

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
console.log(lowerHumanChoice);
return humanChoice;
}

let humanScore=(0);
let computerScore=(0);



function playRound (humanChoice, computerChoice) {
    if (humanChoice==="rock" && computerChoice===0) {
    console.log("It's a tie, try again!")
   } else if (humanChoice==="paper" && computerChoice===0) {
    console.log("Computer picks rock, you win!")
   } else if (humanChoice==="scissors" && computerChoice===0) {
    console.log("Computer picks rock, you lose.")
   } else if (humanChoice==="rock" && computerChoice===1) {
    console.log("Computer chose paper, you lose.")
   } else if (humanChoice==="rock" && computerChoice===2) {
    console.log("Computer picks scissors, you win!")
   }
   return humanChoice + computerChoice;

}

const humanSelection = getHumanChoice ("");
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);





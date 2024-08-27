function getComputerChoice (max) {
    
    if (Math.floor(Math.random()* max)===0)
        console.log("Computer selects rock.")
    else if (Math.floor(Math.random()* max)===1)
        console.log("Computer selects paper.")
    else if (Math.floor(Math.random()* max)===2)
        console.log("Computer selects scissors.")
    return Math.floor
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
console.log(lowerHumanChoice)
}

let humanScore=(0);
let computerScore=(0);



function playRound (humanChoice, computerChoice) {
   if (humanChoice==="rock" && computerChoice===0) {
    console.log("It's a tie, try again!")
   } else if (humanChoice==="paper" && computerChoice===0) {
    console.log("Computer picks rock, you lose this time.")
   }
}

const humanChoice = getHumanChoice ("");
const computerChoice = getComputerChoice(Number);

playRound (humanChoice, computerChoice);





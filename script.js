

let rock=0
let paper=1
let scissors=2

let humanScore=(0);
let computerScore=(0);

function getComputerChoice (max) {
    return Math.floor(Math.random()* max);
   
}


function getHumanChoice () {
    let text;
    let choice=prompt("Choose between 'Rock', 'Paper', or 'Scissors'");
    let madeChoice=choice.toLowerCase();
    switch (madeChoice) {
        case "rock":
            text="The rock? Excellent choice.";
            break;
        case "paper":
            text="Paper? Good luck.";
            break;
        case "scissors":
            text="Scissors? Snippy snip.";
            break;
        default:
            text = "I have never heard of that one.";
}

console.log(choice)
return madeChoice
}

console.log(getComputerChoice(3))



function playRound (humanChoice, computerChoice) {
   if (madeChoice==="rock" && Math.floor===0) {
    console.log("It's a tie, try again!")
   } else if (madeChoice==="paper" && Math.floor===0) {
    console.log("Computer picks rock, you lose this time.")
   }
}

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);





const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame(playersChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";



    if(playersChoice === computerChoice){
        result = "Its a Tie!";
        
    } else {
        switch(playersChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                    break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
     }

playerDisplay.textContent = `PLAYER: ${playersChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;

};
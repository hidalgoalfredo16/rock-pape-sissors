function getComputerChoice() {
  const rockPaperScissorsArray = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissorsArray[(Math.round(Math.random() * 100) % 3)];  
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();

  if(playerSelectionLowerCase === computerSelectionLowerCase){
    return "Tie! Both choose " + computerSelection;
  }

  if(playerSelectionLowerCase === 'scissors') {
    if(computerSelectionLowerCase === 'paper'){
      return `You win! ${playerSelectionLowerCase} beats ${computerSelectionLowerCase}`;
    }

    if(computerSelectionLowerCase === 'rock'){
      return `You loose! ${computerSelectionLowerCase} beats ${playerSelectionLowerCase}`;
    }
  }

  if(playerSelectionLowerCase === 'paper') {
    if(computerSelectionLowerCase === 'rock'){
      return `You win! ${playerSelectionLowerCase} beats ${computerSelectionLowerCase}`;
    }

    if(computerSelectionLowerCase === 'scissors'){
      return `You loose! ${computerSelectionLowerCase} beats ${playerSelectionLowerCase}`;
    }
  }

  if(playerSelectionLowerCase === 'rock') {
    if(computerSelectionLowerCase === 'scissors'){
      return `You win! ${playerSelectionLowerCase} beats ${computerSelectionLowerCase}`;
    }

    if(computerSelectionLowerCase === 'paper'){
      return `You loose! ${computerSelectionLowerCase} beats ${playerSelectionLowerCase}`;
    }
  }
}
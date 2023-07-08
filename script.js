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

function game() {
  let userPoints = 0;
  let computerPoints = 0;

  for( let i = 0; i < 5; i++ ){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Insert your choice: ");
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if(result.includes('win')){
      userPoints ++;
    } else if(result.includes('loose')){
      computerPoints ++;
    }
  }
  
  if(userPoints > computerPoints){
    alert('you win the game!');
  } else if(userPoints < computerPoints){
    alert('you loose the game :(');
  } else {
    alert('Tie!');
  }
}
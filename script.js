function getComputerChoice() {
  const rockPaperScissorsArray = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissorsArray[(Math.round(Math.random() * 100) % 3)];  
}
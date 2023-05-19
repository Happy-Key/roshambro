const delay = ms => new Promise(res => setTimeout(res, ms));

const options = ["rock", "paper", "scissors", "rock"]

function startGame() {
  document.getElementById('greeting').style.display = "none";
  document.getElementById('gameInitialize').style.display = "none";
  document.getElementById('rpsInput').style.display = "inline-block";
  document.getElementById('broChat').style.display = "block";
}

const endGame = async () => {
  document.getElementById('greeting').style.display = "block";
  document.getElementById('greeting').innerHTML = "Alright, guess I'll refresh."
  await delay(1500);
  location.reload();
};

function restartGame() {
  document.getElementById('rpsInput').style.display = "inline-block";
  document.getElementById('playAgain').style.display = "none";
  document.getElementById('broChat').textContent = "Pick your move.";
}

function rpsEvaluate(input) {
  let broInput = getRandomInt(1,3);
  document.getElementById('rpsResponse').style.display = "block";
  document.getElementById('playAgain').style.display = "block";
  document.getElementById('rpsInput').style.display = "none";
  if (broInput - input == 1) {rpsLoss(broInput, input); return;}
  if (broInput - input == 2) {rpsWin(broInput, input); return;}
  if (broInput - input == -1) {rpsWin(input); return;}
  rpsDraw(broInput, input);
  return;
}

function rpsLoss(broInput, input) {
  document.getElementById('rpsResponse').textContent = `You played ${options[input]} while I played ${options[broInput]} which means you lose.`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
}

function rpsWin(broInput, input) {
  document.getElementById('rpsResponse').textContent = `You played ${options[input]} but I played ${options[broInput]} which means you win!`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
}

function rpsDraw( input) {
  document.getElementById('rpsResponse').textContent = `We both played ${options[input]} which means it's a draw.`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
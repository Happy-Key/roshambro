const delay = ms => new Promise(res => setTimeout(res, ms));

const options = ["rock", "paper", "scissors", "rock"]

function startGame() {
  document.getElementById('gameInitialize').style.display = "none";
  document.getElementById('rpsInput').style.display = "inline-block";
  document.getElementById('rpsResponse').style.display = "block";
  }
}

const endGame = async () => {
    document.getElementById('rpsResponse').innerHTML = "Welp, guess I'll refresh."
    await delay(1500);
    location.reload();
  };
function rpsEvaluate(input) {
  let broInput = getRandomInt(1,3);
  if (broInput - input == 1) {rpsLoss(broInput); return;}
  if (broInput - input == 2) {rpsWin(broInput); return;}
  rpsDraw(broInput);
  return;
}

function rpsLoss(broInput) {
  document.getElementById('rpsResponse').textContent = "You played ${options[broInput-1]} while I played ${options[broInput] which means I win.";
}

function rpsWin(broInput) {
  document.getElementById('rpsResponse').textContent = "You played ${options[broInput-1]} while I played ${options[broInput] which means I lose.";
}

function rpsDraw(broInput) {
  document.getElementById('rpsResponse').textContent = "You played ${options[broInput-1]} while I played ${options[broInput] which means it's a draw.";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
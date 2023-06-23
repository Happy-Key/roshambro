const delay = ms => new Promise(res => setTimeout(res, ms));

const options = ["rock", "paper", "scissors", "rock"]

var gameData = [
  totalWins=0,
  totalLosses=0,
  totalDraws=0,
  winstreakMax=0,
  losestreakMax=0,
  drawstreakMax=0,
  currentStreak=0,
  whatstreak=0,
];

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
  if (broInput - input == -1) {rpsWin(broInput, input); return;}
  rpsDraw(input);
  return;
}

function rpsLoss(broInput, input) {
  document.getElementById('rpsResponse').textContent = `You played ${options[input]} while I played ${options[broInput]} which means you lose.`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
  totalLosses += 1;
  streakCalc(1);
}

function rpsWin(broInput, input) {
  document.getElementById('rpsResponse').textContent = `You played ${options[input]} but I played ${options[broInput]} which means you win!`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
  totalWins += 1;
  streakCalc(0);
}

function rpsDraw(input) {
  document.getElementById('rpsResponse').textContent = `We both played ${options[input]} which means it's a draw.`;
  document.getElementById('broChat').textContent = "Would you like to play again?";
  totalDraws += 1;
  streakCalc(2);
}

function streakCalc(latestResult)
{
  switch(latestResult) {
    case 0:
      if (whatstreak == 0) {currentStreak++;}
      break
    case 1:
      if (whatstreak == 1) {currentStreak++;}
      break
    case 2:
      if (whatstreak == 2) {currentStreak++;}
      break
    default:
      whatstreak = latestResult;
      currentStreak = 1;
  }
  document.getElementById('tempstreakcounter').textContent = `wins:${totalWins}, losses:${totalLosses}, draws:${totalDraws}, streaktype:${whatstreak}, current streak:${currentStreak}`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
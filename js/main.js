import { createEventListeners } from "/eventListeners.js";

const delay = ms => new Promise(res => setTimeout(res, ms));

const options = ["rock", "paper", "scissors", "rock"]
const wld = ["win", "lose", "draw"]

createEventListeners();

var gameData = [
  totalWins=0,
  totalLosses=0,
  totalDraws=0,
  winstreakMax=0,
  losestreakMax=0,
  drawstreakMax=0,
  currentStreak=0,
  streaktype=0,
];

export const refreshStatsInterval = setInterval(refreshStats, 100);

function refreshStats() {
  document.getElementById('winstreakMax').innerHTML =  "Best winstreak:" + winstreakMax;
  document.getElementById('winstreakCurrent').innerHTML = `Current ${wld[streaktype]}streak: ${currentStreak}`;
  document.getElementById('wins').innerHTML = "Total wins:" + totalWins;
  document.getElementById('losses').innerHTML = "Total losses:" + totalLosses;
  document.getElementById('draws').innerHTML = "Total draws:" + totalDraws;
}

export function restartGame() {
  document.getElementById('rpsInput').style.display = "inline-block";
  document.getElementById('playAgain').style.display = "none";
  document.getElementById('broChat').textContent = "Pick your move.";
}

export function rpsEvaluate(input) {
  let broInput = getRandomInt(1,3);
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
  totalLosses += 1;
  streakCalc(1);
}

function rpsWin(broInput, input) {
  document.getElementById('rpsResponse').textContent = `You played ${options[input]} but I played ${options[broInput]} which means you win!`;
  totalWins += 1;
  streakCalc(0);
}

function rpsDraw(input) {
  document.getElementById('rpsResponse').textContent = `We both played ${options[input]} which means it's a draw.`;
  totalDraws += 1;
  streakCalc(2);
}

function streakCalc(latestResult)
{
  switch(latestResult) {
    case 0:
      if (streaktype == 0) {currentStreak++; if (currentStreak > winstreakMax){winstreakMax = currentStreak;}}
      else {streaktype = latestResult; currentStreak = 1;}
      break
    case 1:
      if (streaktype == 1) {currentStreak++; if (currentStreak > losestreakMax){losestreakMax = currentStreak;}}
      else {streaktype = latestResult; currentStreak = 1;}
      break
    case 2:
      if (streaktype == 2) {currentStreak++; if (currentStreak > drawstreakMax){drawstreakMax = currentStreak;}}
      else {streaktype = latestResult; currentStreak = 1;}
      break
    default:
      //bro what
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
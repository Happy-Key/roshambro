const delay = ms => new Promise(res => setTimeout(res, ms));

function startGame() {
  document.getElementById('gameInput').style.display = "none";
  let inputs = document.getElementsByClassName("rpsInput");
  document.getElementById('rpsResponse').innerHTML = "Great! Let's play some RoShamBo. I bet I can beat ya!"
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "inline-block";
  }
}

const endGame = async () => {
    document.getElementById('rpsResponse').innerHTML = "Welp, guess I'll refresh."
    await delay(1500);
    location.reload();
  };

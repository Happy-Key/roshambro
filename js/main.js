const delay = ms => new Promise(res => setTimeout(res, ms));

function startGame() {
  let inputs = document.getElementsByClassName("rpsInput");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = block;
  }
}

const endGame = async () => {
    document.getElementById('rpsResponse').innerHTML = "Welp, guess I'll refresh."
    await delay(1500);
    location.reload();
  };
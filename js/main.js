const delay = ms => new Promise(res => setTimeout(res, ms));

const endGame = async () => {
    document.getElementById('rsbResponse').innerHTML = "Welp, guess I'll refresh."
    await delay(1500);
    location.reload();
  };
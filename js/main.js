const delay = ms => new Promise(res => setTimeout(res, ms));

const endGame = async () => {
    document.getElementById('rsbResponse').innerHTML = "Welp, guess I'll wait till you want to play."
    await delay(3000);
    location.reload();
  };
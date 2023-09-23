import {rpsEvaluate, restartGame, selectTab} from './main.js'

export const createEventListeners = () => {
    document.getElementById('rock').addEventListener('click',() => rpsEvaluate(0));
    document.getElementById('paper').addEventListener('click',() => rpsEvaluate(1));
    document.getElementById('scissors').addEventListener('click',() => rpsEvaluate(2));
    document.getElementById('restartRPS').addEventListener('click',() => restartGame());
    document.getElementById('mainTabButton').addEventListener('click',() => selectTab("mainTab"));
    document.getElementById('settingsTabButton').addEventListener('click',() => selectTab("settingsTab"));
    document.addEventListener("DOMContentLoaded", () => selectTab("mainTab");
}

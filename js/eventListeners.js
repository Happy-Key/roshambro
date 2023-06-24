import {rpsEvaluate, restartGame} from './main'

export const createEventListeners = () => {
    document.getElementById('rock').addEventListener('click',() => rpsEvaluate(0));
    document.getElementById('paper').addEventListener('click',() => rpsEvaluate(1));
    document.getElementById('scissors').addEventListener('click',() => rpsEvaluate(2));
    document.getElementById('restartRPS').addEventListener('click',() => restartGame());
}
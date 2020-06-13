const highscoreList = document.querySelector('.highscoreList');
const goBack = document.querySelector('#goBack');
const clearHighscores = document.querySelector('#clear');

// Display all user scores from local storage
let highscores = JSON.parse(localStorage.getItem('highscores'));

for (let i = 0; i < highscores.length; i++) {
    let highscoreElement = document.createElement("P")
    highscoreElement.textContent = highscores[i];
    highscoreList.appendChild(highscoreElement)
}

// Start quiz again and clear highscore list
function startAgain() {
    document.location = "index.html"
}

function clearScores(event) {
    event.preventDefault();
    highscoreList.innerHTML = '';
    localStorage.removeItem('highscores');
}

goBack.addEventListener('click', startAgain)
clearHighscores.addEventListener('click', clearScores)
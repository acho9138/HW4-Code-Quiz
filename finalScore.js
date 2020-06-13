const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
const initials = document.querySelector('#initials');
const submit = document.querySelector('#submit');
let finalScore = sessionStorage.getItem('score');

timeLeft.textContent = finalScore;
score.textContent = finalScore;

submit.addEventListener('click', storeHighscore);

// Store highscore with initials in local storage and go to highscore page
function storeHighscore(event) {
    event.preventDefault();
    let highscores = []
    highscores = highscores.concat(JSON.parse(localStorage.getItem('highscores')))
    let storeInitials = initials.value.toUpperCase();
    highscores.push(`${storeInitials}: ${finalScore}`);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    document.location = "highscores.html"
}
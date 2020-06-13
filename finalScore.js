const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
const initials = document.querySelector('#initials');
const submit = document.querySelector('#submit');

// Display time remaining and score from session storage
let finalScore = sessionStorage.getItem('score');
timeLeft.textContent = finalScore;
score.textContent = finalScore;

// Store user score with initials in local storage and go to highscore page
submit.addEventListener('click', storeHighscore);

function storeHighscore(event) {
    event.preventDefault();
    let highscores = []
    // Concat array with user score from local storage with new score
    highscores = highscores.concat(JSON.parse(localStorage.getItem('highscores')))
    let storeInitials = initials.value.toUpperCase();
    highscores.push(`${storeInitials}: ${finalScore}`);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    document.location = "highscores.html"
}
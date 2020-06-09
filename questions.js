const timeLeft = document.querySelector('#timeLeft')

function startTimer() {
    let seconds = 75;
    timeLeft.textContent = seconds

    interval = setInterval(function() {
        seconds--;
        timeLeft.textContent = seconds

        if (seconds === 0) {
            clearInterval(interval)
        }
    }, 1000)
}

startTimer();
const timeLeft = document.querySelector('#timeLeft')
const question = document.querySelector(".question")
const optionsContainer = document.querySelector(".optionsContainer")

// Object with questions, options and answers
let questionOptions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["1) strings", "2) booleans", "3) alerts", "4) numbers"],
        answerIndex: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within ______:",
        options: ["1) quotes", "2) curly brackets", "3) parentheses", "4) square brackets"],
        answerIndex: 1
    },
    {
        question: "Arrays in JavaScript can be used to store ______:",
        options: ["1) numbers and strings", "2) other arrays", "3) booleans", "4) all of the above"],
        answerIndex: 3
    },
    {
        question: "String Values must be enclosed within ______ when being assigned to variables.",
        options: ["1) commas", "2) curly brackets", "3) quotes", "4) parentheses"],
        answerIndex: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1) JavaScript", "2) terminal/bash", "3) for loops", "4) console.log"],
        answerIndex: 3
    }
]

let seconds = 75;

// Start timer when page loads
function startTimer() {
    timeLeft.textContent = seconds

    interval = setInterval(function () {
        seconds--;
        timeLeft.textContent = seconds

        if (seconds <= 0) {
            stopQuiz();
        }
    }, 1000)
}

let userProgress = 0

// Render questions and options
function renderQuestion() {
    question.textContent = questionOptions[userProgress].question;
}

function renderOptions() {
    optionsContainer.innerHTML = '';
    const currentOptions = questionOptions[userProgress].options

    for (let i = 0; i < currentOptions.length; i++) {
        let newOption = document.createElement("BUTTON")
        newOption.textContent = currentOptions[i];
        newOption.classList.add("btn", "btn-primary", "options");
        newLine = document.createElement("br");
        optionsContainer.appendChild(newOption);
        optionsContainer.appendChild(newLine);
    }
}

// Goes to next question when an option button is clicked
optionsContainer.addEventListener("click", answerQuestion)

function answerQuestion(event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        if (userProgress === 4) {
            stopQuiz();
        } else {
            userProgress++;
            renderQuestion();
            renderOptions();
        }
    }
}

// Check whether user response is correct or wrong
function checkAnswer(event) {
    const result = document.querySelector('.result')
    const correct = document.querySelector('.correct')
    const incorrect = document.querySelector('.incorrect')

    // Hide existing answers
    correct.style.display = "none"
    incorrect.style.display = "none"
    
    let currentQuestion = questionOptions[userProgress]
    const userChoiceIndex = currentQuestion.options.indexOf(event.target.innerText)
    const correctAnswerIndex = currentQuestion.answerIndex

    // Display either "correct" or "incorrect" depending on the user's choice
    result.style.display = "block"
    if (userChoiceIndex === correctAnswerIndex) {
        correct.style.display = "block"
    } else {
        seconds = seconds - 10
        incorrect.style.display = "block"
    }

    // Remove user result after one second
    showDiv = setTimeout(() => {
        result.style.display = "none"
        if (userChoiceIndex === correctAnswerIndex) {
            correct.style.display = "none"
        } else {
            seconds = seconds - 10
            incorrect.style.display = "none"
        }
    }, 500);
}

// Stop quiz when time runs out or all questions are answered
function stopQuiz() {
    // Disable buttons when quiz is finished
    for (const button of document.querySelectorAll(".options")) {
        button.setAttribute('disabled', true)
    }
    clearInterval(interval);
    if (seconds < 0) seconds = 0
    sessionStorage.setItem("score", seconds)
    setTimeout(() => {
        document.location = "finalScore.html"
    }, 500);
}

renderQuestion();
renderOptions();
startTimer();
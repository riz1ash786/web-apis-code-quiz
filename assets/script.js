var quiz = document.querySelector(".quiz");
var startButton = document.querySelector(".quizStartButton");
var quizInfo = document.querySelector(".quizCard");
var answersContainer = document.querySelector(".answerBox");
var check = document.querySelectorAll(".answerBoxOptions");
var quizQuestion = document.querySelector("h3");
var questionNumber = document.querySelector("h2");
var resultResponse = document.querySelector(".quizResults");
var countdown = document.getElementById("countdown");

let currentQuestion = 0;
let Score = 0;
// let timerValue = 60;

// questions set out in boolean format
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },
  {
    question:
      "Which of the following functions is a valid type of function that javascript supports?",
    answers: [
      { text: "Named function", correct: false },
      { text: "Anonymous function", correct: false },
      { text: "None of the above", correct: false },
      { text: "Named & Anonymous", correct: true },
    ],
  },
  {
    question: "The 'function' and 'var' are known as?",
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: "Declaration statements", correct: true },
      { text: "Prototypes", correct: false },
    ],
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "Global variable", correct: false },
      { text: "The local element", correct: true },
      { text: "The two of the above", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do?",
    answers: [
      { text: "Ignore the statements", correct: true },
      { text: "Throws and error", correct: false },
      { text: "Prompts to complete the statement", correct: false },
      { text: "Shows a warning", correct: false },
    ],
  },
  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    answers: [
      { text: "<Both Accept parameters and Return a value", correct: false },
      { text: "Accept parameters", correct: true },
      { text: "Return a value", correct: false },
      { text: "Non of the above", correct: false },
    ],
  },
  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements?",
    answers: [
      { text: "<TITLE>", correct: false },
      { text: "<HEAD>", correct: false },
      { text: "<BODY>", correct: false },
      { text: "<SCRIPT>", correct: true },
    ],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called ” abc.js”?",
    answers: [
      { text: "<script href=” abc.js”>", correct: false },
      { text: "<script name=” abc.js”>", correct: false },
      { text: "<script src=” abc.js”", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "The _______ method of an Array object adds and/or removes elements from an array?",
    answers: [
      { text: "Reverse", correct: false },
      { text: "Shift", correct: false },
      { text: "Slice", correct: false },
      { text: "Splice", correct: true },
    ],
  },
  {
    question:
      "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language?",
    answers: [
      { text: "A wrapper", correct: true },
      { text: "A link", correct: false },
      { text: "A cursor", correct: false },
      { text: "A form", correct: false },
    ],
  },
];
// es6 functions for timer, call function added to eventlistener but not utilised for homework, alernative time used line 144
// var startTimer = () => {
//   var timerTick = () => {
//     timerValue -= 1;
//     countdown.textContent = timerValue;

//     if (timerValue === 0) {
//       clearInterval(timer);
//       alert("You're out of time. Game Over!");
//     }
//   };
//   var timer = setInterval(timerTick, 1000);
// };

// set an empty array in local storage called highscore
// when highscore  page is viewed get "highscore" array from local storage

// use of es6 functions
// start button attached to event listener will clear quizinfo and start buttona and display questions in block and start timer
startButton.addEventListener("click", () => {
  quizInfo.style.display = "none";
  startButton.style.display = "none";
  quiz.style.display = "block";
  startTimer();
  renderNextQuestion(currentQuestion);
});

// timer set to 50 seconds displayes in seconds and when time is equal to 0 the time will clear and alert message to user
function startTimer() {
  var sec = 50;
  var timer = setInterval(function () {
    document.getElementById("countdown").innerHTML = sec--;
    if (sec < 0) {
      clearInterval(timer);
      alert("You're out of time. Game Over!");
    }
  }, 1000);
}

var clearQuestion = () => {
  quizQuestion.textContent = "";
  answersContainer.innerHTML = "";
};
// next question is rendered and shown on questions counter, as the quiz progresses the tally rises by 1
var renderNextQuestion = (i) => {
  questionNumber.textContent = `Question ${i + 1}/10`;
  quizQuestion.textContent = questions[i].question;
  // code used as example to function quiz, unable to implement es5 functions
  questions[i].answers.forEach((answer) => {
    var answer_text = document.createElement("p");
    answer_text.classList.add("answerBoxOptions");
    answer_text.textContent = answer.text;
    if (answer.correct) {
      answer_text.dataset.correct = answer.correct;
    }
    answersContainer.append(answer_text);
  });
  // displays reponses for questions and increases score for correct responses, will generate next question and finally score
  currentQuestion++;
  document.querySelectorAll(".answerBoxOptions").forEach((answer) =>
    answer.addEventListener("click", (event) => {
      if (event.target.dataset.correct) Score++;
      clearQuestion();
      if (currentQuestion < questions.length)
        renderNextQuestion(currentQuestion);
      if (document.querySelector(".answerBox").childElementCount === 0) {
        questionNumber.style.display = "none";
        quizQuestion.textContent = `Score: ${Score}`;
        // reponses displayed dependent on user score of 6 and below and 7 and above
        if (Score <= 7) {
          resultResponse.textContent =
            "Oh dear, you've got some brushing up to do. Better luck next time!";
        } else {
          resultResponse.textContent =
            "Wow! You did a great job on this quiz, keep up the good work and well done!";
        }
      }
    })
  );
};
// start of local storage and unable to complete
function renderHighscores() {
  clearScreen();

  var highscores = localStorage.getItem("highscores");

  if (highscores) {
    var parsedHighscores = JSON.parsel(highscores);
  }
}

// to do list
// for loops
// appending elements to html via js
// es5 functions
// arrays and objects
// template strings
// chnaging html text via js
// differences between es5 and es6 functions

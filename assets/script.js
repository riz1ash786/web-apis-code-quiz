var quiz = document.querySelector(".quiz");
var button = document.querySelector(".quizStartButton");
var quizInfo = document.querySelector(".quizCard");
var answers_container = document.querySelector(".answerBox");
var check = document.querySelectorAll(".answerBoxOptions");
var quiz_question = document.querySelector("h3");
var question_number = document.querySelector("h2");
var resultDescription = document.querySelector(".quizResults");

let currentQuestion = 0;
let Score = 0;

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

button.addEventListener("click", () => {
  quizInfo.style.display = "none";
  button.style.display = "none";
  quiz.style.display = "block";
  renderNextQuestion(currentQuestion);
});
var clearQuestion = () => {
  quiz_question.textContent = "";
  answers_container.innerHTML = "";
};
var renderNextQuestion = (i) => {
  question_number.textContent = `Question ${i + 1}/10`;
  quiz_question.textContent = questions[i].question;

  questions[i].answers.forEach((answer) => {
    var answer_text = document.createElement("p");
    answer_text.classList.add("answerBoxOptions");
    answer_text.textContent = answer.text;
    if (answer.correct) {
      answer_text.dataset.correct = answer.correct;
    }
    answers_container.append(answer_text);
  });

  currentQuestion++;
  document.querySelectorAll(".answerBoxOptions").forEach((answer) =>
    answer.addEventListener("click", (e) => {
      if (e.target.dataset.correct) Score++;
      clearQuestion();
      if (currentQuestion < questions.length)
        renderNextQuestion(currentQuestion);
      if (document.querySelector(".answerBox").childElementCount === 0) {
        question_number.style.display = "none";
        quiz_question.textContent = `Score: ${Score}`;
        Score <= 7
          ? (resultDescription.textContent =
              "Oh dear, you've got some brushing up to do. Better luck next time!")
          : (resultDescription.textContent =
              "Wow! You did a great job on this quiz, keep up the good work and well done!");
      }
    })
  );
};

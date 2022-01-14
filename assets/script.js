var quiz = document.querySelector(".quiz");
var button = document.querySelector(".quizStartButton");
var quizInfo = document.querySelector(".quizCard");
var answers_container = document.querySelector(".answerBox");
var check = document.querySelectorAll(".answerBoxOptions");
var quiz_question = document.querySelector("h2");
var question_number = document.querySelector("h3");
var image = document.querySelector(".quizImage");
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
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },
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
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },
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
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },
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
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },
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
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
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
    })
  );
};

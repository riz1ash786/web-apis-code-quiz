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
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Blah", "Blah2"],
    correctAnswerIndex: 0,
  },
  {
    question: "Who is the true formula1 champion of 2021?",
    answers: ["Hamilton", "Lewis Hamilton", "Lewis", "Team44"],
    correctAnswerIndex: 2,
  },
  {
    question: "How many days are there in week?",
    answers: ["4", "8", "5", "7"],
    correctAnswerIndex: 3,
  },
];

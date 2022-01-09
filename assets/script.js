var questions = [];
var score = [];

// Assignment Code
var startBtn = document.querySelector("#startquiz");

// Add event listener to start button
startBtn.addEventListener("click", quizQuestions);
// ask first questions
function quizQuestions() {
  var truePrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  // if the prompts are as expected then a password will be generated
  if (truePrompts) {
    var Password = generatePassword();
    passwordText.value = Password;
  } else {
    passwordText.value = "";
  }
}

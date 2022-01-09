var questions = [];
var score = [];
var timerEl = document.getElementById("countdown");

// Assignment Code
var startBtn = document.querySelector("#startquiz");

// Add event listener to start button
startBtn.addEventListener("click", countdown);
// ask questions

// Timer that counts down from 100 seconds
function countdown() {
  var timeLeft = 3;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to quiz over message
      timerEl.textContent = " You have ran out of time! End of quiz!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}
startBtn.addEventListener("click", questions);

function questions() {
  //   var truePrompts = getPrompts();
  //   // var passwordText = document.querySelector("#password");

  var questions = [
    {
      prompt: "What does HTML stand for\n(a)blah\n(b)blah\n(c)blah\n(d)blah",
      answer: "b",
    },
    {
      prompt: "What does CSS stand for\n(a)blah\n(b)blah\n(c)blah\n(d)blah",
      answer: "a",
    },
    {
      prompt: "What does JS stand for\n(a)blah\n(b)blah\n(c)blah\n(d)blah",
      answer: "d",
    },
    {
      prompt: "What does example stand for\n(a)blah\n(b)blah\n(c)blah\n(d)blah",
      answer: "c",
    },
    {
      prompt:
        "What does final question stand for\n(a)blah\n(b)blah\n(c)blah\n(d)blah",
      answer: "b",
    },
  ];
}

var startQuizButton = document.querySelector("#startQuiz");
var startButtonDiv = document.querySelector("#startButton")
var timer = document.querySelector("#seconds");
var quizQuestionsDiv = document.querySelector("#quizQuestions");
var quizChoicesDiv = document.querySelector("#quizChoices");
var selectionA = document.querySelector("#A")
var selectionB = document.querySelector("#B")
var selectionC = document.querySelector("#C")
var selectionD = document.querySelector("#D")
var isCorrect = true

var time = 60

function startTimer() {

  interval = setInterval(function () {
    time--;
    timer.textContent = time
  }, 1000);
}

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
];

function quiz() {
  //removes start quiz button
  startButtonDiv.removeChild(startQuizButton);

  //starts timer
  startTimer()
  quizQuestionsDiv.innerHTML = questions[0].title

  //For loop to create buttons and append to selection divs
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    buttons.innerHTML = questions[0].choices[i];
    quizChoicesDiv.children[i].append(buttons)
    buttons.className = "btn btn-danger btn-xs"
  }

// Button Selections (User Choice)
  selectionA.addEventListener("click", function () {
    if (questions[0].choices[0] === questions[0].answer) { alert("you are correct!") }
    else { alert("you are wrong!")}
  })
  selectionB.addEventListener("click", function () {
    if (questions[0].choices[1] === questions[0].answer) { alert("you are correct!") }
    else { alert("you are wrong!")}
  })
  selectionC.addEventListener("click", function () {
    if (questions[0].choices[2] === questions[0].answer) { alert("you are correct!") }
    else { alert("you are wrong!")}
  })
  selectionD.addEventListener("click", function () {
    if (questions[0].choices[3] === questions[0].answer) { alert("you are correct!") }
    else { alert("you are wrong!")}
  })


}


startQuizButton.addEventListener("click", quiz);
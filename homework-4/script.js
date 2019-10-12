// Note: Quiz questions are stored in seperate js file (quiz-questions.js) and referenced in HTML

//Global variables
var startQuizButton = document.querySelector("#startQuiz");
var startButtonDiv = document.querySelector("#startButton")
var timer = document.querySelector("#seconds");
var quizQuestionsDiv = document.querySelector("#quizQuestions");
var quizChoicesDiv = document.querySelector("#quizChoices");
var selectionA = document.querySelector("#A")
var selectionB = document.querySelector("#B")
var selectionC = document.querySelector("#C")
var selectionD = document.querySelector("#D")
var resultDiv = document.querySelector("#result")
var buttonsEl = document.querySelector(".btn")
var isCorrect = true
var input = document.getElementById("saveScore");


//Set userScore and current question to 0
var userScore = 0
var currentQuestion = 0

//Set start time
var time = 60

//function to start timer
function startTimer() {

  interval = setInterval(function () {
    time--;
    timer.textContent = time
  }, 1000);
}

//function to start quiz
function startQuiz() {
  startTimer()
  //removes start quiz button and inner HTML
  startButtonDiv.innerHTML = ""

  //adds question title to HTML
  quizQuestionsDiv.innerHTML = questions[currentQuestion].title

  //For loop to create buttons and append to selection divs
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    buttons.innerHTML = questions[currentQuestion].choices[i];
    quizChoicesDiv.children[i].append(buttons);
    buttons.className = "btn btn-outline-dark btn-lg btn-block";
  }
}

// If else for Button Selections (User Choice) comparison to answer values
selectionA.addEventListener("click", function () {
  if (questions[currentQuestion].choices[0] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  }
  else {
    isCorrect = false;
    displayResult();
  }
})

selectionB.addEventListener("click", function () {
  if (questions[currentQuestion].choices[1] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  }
  else {
    isCorrect = false;
    displayResult();
  }
})

selectionC.addEventListener("click", function () {
  if (questions[currentQuestion].choices[2] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  }
  else {
    isCorrect = false;
    displayResult();
  }
})

selectionD.addEventListener("click", function () {
  if (questions[currentQuestion].choices[3] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  }
  else {
    isCorrect = false;
    displayResult();
  }
})

// function to display results
function displayResult() {
  if (isCorrect === true) {
    userScore = userScore + 10;
    resultDiv.innerHTML = "<hr>" + "You are CORRECT!!! You have " + userScore + " points";
    increaseQuestion();
  }
  else {
    time = time - 10;
    resultDiv.innerHTML = "<hr>" + "You are WRONG!!! You have " + userScore + " points";;
    increaseQuestion();
  }
}

//function to go onto next question
function increaseQuestion() {

  currentQuestion++;

  //End Quiz conditions
  if (currentQuestion === 10 || time < 0) {
    clearInterval(interval)
    quizQuestionsDiv.innerHTML = "Quiz is Complete!"
    quizChoicesDiv.innerHTML = "Congratulations, you have " + userScore + " points!" + "<br>"
    resultDiv.innerHTML = ""
    timer.innerHTML = ""
    highScore()

  }
  else {
    renderNextQuestion();
  }
}

//Submit high score
function highScore() {
  var newForm = document.createElement("form");
  resultDiv.appendChild(newForm);

  // newForm.setAttribute('method', "post");
  // newForm.setAttribute('action', "submit.php");
  var input = document.createElement("input");
  input.setAttribute('type', "text");
  input.setAttribute('name', "initals");
  input.className = "inputInitials"

  var submit = document.createElement("input");
  submit.setAttribute('type', "submit");
  submit.setAttribute('value', "Submit");
  submit.className = "submitButton"

  newForm.appendChild(input);
  newForm.appendChild(submit);


  newForm.addEventListener("submit", function () {
    event.preventDefault();
    var inputEl = document.querySelector(".inputInitials")
    var result = { initals: inputEl.value, score: userScore }
    localStorage.setItem( 'highScore', JSON.stringify(result) );
    console.log( JSON.parse( localStorage.getItem( 'highScore' ) ) );

  })


}

// Retrieve
var score = localStorage.getItem("score");

//Function to render next questions
function renderNextQuestion() {
  quizQuestionsDiv.innerHTML = questions[currentQuestion].title;

  //changing inner HTML of buttons (tried to do this with for loop and failed)  
  selectionA.childNodes[0].innerHTML = questions[currentQuestion].choices[0];
  selectionB.childNodes[0].innerHTML = questions[currentQuestion].choices[1];
  selectionC.childNodes[0].innerHTML = questions[currentQuestion].choices[2];
  selectionD.childNodes[0].innerHTML = questions[currentQuestion].choices[3];
}

//Button event to start quiz
startQuizButton.addEventListener("click", startQuiz);

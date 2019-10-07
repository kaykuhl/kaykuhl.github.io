var startQuizButton = document.querySelector("#startQuiz");
var timer = document.querySelector("#seconds")
var quizQuestionsDiv = document.querySelector("#quizQuestions")

time = 60

function startTimer() {
  
    interval = setInterval(function() {
      time--;
      timer.textContent = time
    }, 1000);
  }

function quiz () {
    
    startTimer()

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
//   var questionString = JSON.stringify(questions)
//   quizQuestionsDiv.textContent = questionString
quizQuestionsDiv.textContent = Object.values(questions)

}



  startQuizButton.addEventListener("click", quiz);
let questions = [
  {
    question:
      "Which of the three banks will be merged with the other two to create India’s third-largest bank?",
    answers: [
      { text: "Punjab National Bank", correct: false },
      { text: "Indian Bank", correct: true },
      { text: "Bank of Baroda", correct: false },
      { text: "Dena Bank", correct: false },
    ],
  },
  {
    question: "What is the name of the weak zone of the earth’s crust?",
    answers: [
      { text: "Seismic ", correct: true },
      { text: "Cosmic", correct: false },
      { text: "Formic", correct: false },
      { text: "Anaemic", correct: false },
    ],
  },
  {
    question: "Where was India’s first national Museum opened?",
    answers: [
      { text: "Delhi", correct: false },
      { text: "Hyderabad", correct: false },
      { text: "Rajasthan", correct: false },
      { text: "Mumbai", correct: true },
    ],
  },
  {
    question:
      "In 2019, Which popular singer was awarded the Bharat Ratna award?",
    answers: [
      { text: "Lata Mangeshkar", correct: false },
      { text: "Asha Bhosle", correct: false },
      { text: "Bhupen Hazarika ", correct: true },
      { text: "Manna Dey ", correct: false },
    ],
  },
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  resetState();
  currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((ans) => {
    let button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answerButton.append(button);

    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct;

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is ${score}`;
  nextButton.innerHTML = "Play Again";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); //next question
  } else {
    startQuiz(); //quiz khatam ho gya toh restart ka option hai
  }
});

startQuiz();

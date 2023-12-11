const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  // {
  //   question: "In what year did World War I begin?",
  //   answers: [
  //     { text: "1910", correct: false },
  //     { text: "1914", correct: true },
  //     { text: "1920", correct: false },
  //     { text: "1939", correct: false },
  //   ],
  // },
  // {
  //   question: "What is the chemical symbol for gold?",
  //   answers: [
  //     { text: "Ag", correct: false },
  //     { text: "Au", correct: true },
  //     { text: "Fe", correct: false },
  //     { text: "Cu", correct: false },
  //   ],
  // },
  // {
  //   question: "Which country is known as the Land of the Rising Sun?",
  //   answers: [
  //     { text: "China", correct: false },
  //     { text: "South Korea", correct: false },
  //     { text: "Japan", correct: true },
  //     { text: "Vietnam", correct: false },
  //   ],
  // },
  // {
  //   question: "Who painted the Mona Lisa?",
  //   answers: [
  //     { text: "Vincent van Gogh", correct: false },
  //     { text: "Leonardo da Vinci", correct: true },
  //     { text: "Pablo Picasso", correct: false },
  //     { text: "Claude Monet", correct: false },
  //   ],
  // },
  // {
  //   question: "Which gas do plants absorb during photosynthesis?",
  //   answers: [
  //     { text: "Oxygen", correct: false },
  //     { text: "Carbon Dioxide", correct: true },
  //     { text: "Nitrogen", correct: false },
  //     { text: "Hydrogen", correct: false },
  //   ],
  // },
  // {
  //   question: "What is the largest mammal in the world?",
  //   answers: [
  //     { text: "Elephant", correct: false },
  //     { text: "Blue Whale", correct: true },
  //     { text: "Giraffe", correct: false },
  //     { text: "Gorilla", correct: false },
  //   ],
  // },
];

const questionElement = document.getElementById("question-element");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const statement = document.querySelector('.statement');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
 
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
      statement.innerText = "Your Answer Is Correct!";
    }
    statement.innerText = "Your Answer Is Wrong!";
    button.disabled = true;
  });
  nextButton.innerText = "Next";
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerText = "Restart Quiz";
  nextButton.style.display = "block";
}

function handleNextButton() {
  statement.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

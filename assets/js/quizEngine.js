// Quiz setup
const MAX_QUESTIONS = 12;
let availableQuestions = [...rugbyQuestions];
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let oppositionScore = 0;

// Select 12 random questions
function selectQuestions() {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const randIndex = Math.floor(Math.random() * availableQuestions.length);
    selectedQuestions.push(availableQuestions.splice(randIndex, 1)[0]);
  }
}

// Show question
function displayQuestion() {
  const questionData = selectedQuestions[currentIndex];
  document.getElementById("question").textContent = questionData.question;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, index) => {
    btn.textContent = questionData.options[index];
    btn.classList.remove("btn-success", "btn-danger", "disabled");
    btn.disabled = false;
  });
}

// Answer click
function handleAnswerClick(event) {
  const selected = event.target.textContent;
  const correct = selectedQuestions[currentIndex].answer;
  const isCorrect = selected === correct;

  if (isCorrect) {
    streak++;
    if (streak >= 5) score += 5;
    else if (streak >= 3) score += 3;
    else score += 2;

    document.getElementById("playerScore").textContent = score;
    event.target.classList.add("btn-success");
  } else {
    streak = 0;
    oppositionScore += 3;
    document.getElementById("opponentScore").textContent = oppositionScore;
    event.target.classList.add("btn-danger");
  }

  document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
      displayQuestion();
    } else {
      showFinalScore();
    }
  }, 100);
}

// Final score screen
function showFinalScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2 class="text-white">Full Time!</h2>
    <p class="text-white">Your final score: ${score}</p>
    <button class="btn btn-light mt-3" onclick="restartQuiz()">Play Again</button>
  `;
}

// Restart
function restartQuiz() {
  document.getElementById("quiz-container").innerHTML = "";
  document.getElementById("start-section").classList.add("d-none");
  document.getElementById("quiz-engine").classList.remove("d-none");

  selectedQuestions = [];
  currentIndex = 0;
  score = 0;
  oppositionScore = 0;
  streak = 0;
  availableQuestions = [...rugbyQuestions];

  selectQuestions();
  displayQuestion();
}

// Start Quiz
function startQuiz() {
  selectedQuestions = [];
  currentIndex = 0;
  score = 0;
  oppositionScore = 0;
  streak = 0;
  availableQuestions = [...rugbyQuestions];

  selectQuestions();
  displayQuestion();

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", handleAnswerClick);
  });
}

// Init
document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const startSection = document.getElementById("start-section");
  const scoreboard = document.querySelector(".center-scoreboard");
  const quizEngine = document.getElementById("quiz-engine");

  startBtn.addEventListener("click", function () {
    startSection.classList.add("d-none");
    scoreboard.classList.remove("d-none");
    quizEngine.classList.remove("d-none");
    startQuiz();
  });
});


// ===== Question Set =====
/* jshint esversion: 6 */
const rugbyQuestions = [
{ question: "How many points are awarded for a try in rugby world cup matches?", options: ["2", "3", "4", "5"], answer: "5", difficulty: "Easy" },
{ question: "How many points are awarded for a drop kick in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "3", difficulty: "Easy" },
{ question: "How many points are awarded for a penalty in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "3", difficulty: "Easy" },
{ question: "How many points are awarded for a conversion in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "2", difficulty: "Easy" },
{ question: "How many forwards are there in a rugby team?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "Easy" },
{ question: "How many wings are there in a rugby team?", options: ["1", "2", "3", "4"], answer: "2", difficulty: "Easy" },
{ question: "How many players are in the back line of a rugby team?", options: ["5", "6", "7", "8"], answer: "7", difficulty: "Easy" },
{ question: "What number is the scrum half in rugby?", options: ["7", "8", "9", "10"], answer: "9", difficulty: "Easy" },
{ question: "What numbers do the props wear in rugby?", options: ["1 & 2", "1 & 3", "3 & 4", "4 & 5"], answer: "1 & 3", difficulty: "Easy" },
{ question: "How many times has Richie McCaw won the rugby world cup?", options: ["0", "1", "2", "3"], answer: "2", difficulty: "Easy" },
{ question: "What shape is a rugby ball?", options: ["Square", "Triangle", "Round", "Oval"], answer: "Oval", difficulty: "Easy" },
{ question: "Which country did Ritchie McCaw play rugby world cup rugby for?", options: ["England", "Australia", "Scotland", "New Zealand"], answer: "New Zealand", difficulty: "Easy" },
{ question: "The “All Blacks” refer to which rugby playing nation?", options: ["Ivory Coast", "Zimbabwe", "South Africa", "New Zealand"], answer: "New Zealand", difficulty: "Easy" },
{ question: "Which country did Johnny Sexton play rugby world cup rugby for?", options: ["England", "Ireland", "Scotland", "Wales"], answer: "Ireland", difficulty: "Easy" },
{ question: "Which country did Brian O'Driscoll captain at rugby world cups?", options: ["England", "Ireland", "Scotland", "Wales"], answer: "Ireland", difficulty: "Easy" },
{ question: "Which country is Siya Kolisi from?", options: ["South Africa", "Fiji", "Tonga", "Samoa"], answer: "South Africa", difficulty: "Easy" },
{ question: "Which stadium in England has hosted a rugby world cup final at least once?", options: ["Twickeham", "Sandy Park", "Kingsholm Stadium", "Ashton Gate"], answer: "Twickeham", difficulty: "Easy" },
{ question: "What is the main rugby stadium in Auckland called?", options: ["Auckland National Stadium", "North Harbour", "Waikato", "Eden Park"], answer: "Eden Park", difficulty: "Easy" },
{ question: "Does rugby have an offside rule?", options: ["Yes", "No", "Only For Attack", "Only For Defence"], answer: "Yes", difficulty: "Easy" },
{ question: "How many officials are on the field during a rugby world cup game?", options: ["1", "2", "3", "4"], answer: "1", difficulty: "Easy" },
];

// ===== Quiz Variables =====
const MAX_QUESTIONS = 12;
let availableQuestions = [...rugbyQuestions];
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let oppositionScore = 0;
let opponentStreak = 0;

// ===== Helper: Show Streak Message =====
function showStreakMessage(message) {
  const msgEl = document.getElementById("streak-message");
  if (!msgEl) return;
  msgEl.textContent = message;
  msgEl.classList.add("show");
}

// ===== Clear Streak Message =====
function clearStreakMessage() {
  const msgEl = document.getElementById("streak-message");
  if (!msgEl) return;
  msgEl.textContent = "";
  msgEl.classList.remove("show");
}

// ===== Select Random Questions =====
function selectQuestions() {
  selectedQuestions = [];
  for (let i = 0; i < MAX_QUESTIONS && availableQuestions.length; i++) {
    const randIndex = Math.floor(Math.random() * availableQuestions.length);
    selectedQuestions.push(availableQuestions.splice(randIndex, 1)[0]);
  }
}

// ===== Display Question =====
function displayQuestion() {
  const q = selectedQuestions[currentIndex];
  document.getElementById("question").textContent = q.question;

  const container = document.getElementById("options-container");
  container.innerHTML = ""; // ✅ Clear old buttons & listeners

  q.options.forEach(optionText => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light option-btn";
    btn.textContent = optionText;

    btn.addEventListener("click", (e) => {
      console.log("Clicked:", e.target.textContent);
      console.log("Opponent streak at start:", opponentStreak);
      clearStreakMessage();
      handleAnswerClick(e);
    });

    container.appendChild(btn);
  });
}
// ===== Handle Answer Click =====
console.log("Opponent streak at start:", opponentStreak);
function handleAnswerClick(e) {
  const selected = e.target.textContent;
  const correct = selectedQuestions[currentIndex].answer;
  const isCorrect = selected === correct;

  let message = "";
  let points = 0; // ✅ declare early so it's accessible

  if (isCorrect) {
    streak++;
    opponentStreak = 0;

    let bonusMessage = "";

    switch (streak) {
      case 3:
        points = 5;
        bonusMessage = "great try!";
        break;
      case 4:
        points = 2;
        bonusMessage = "solid conversion!";
        break;
      case 5:
        points = 3;
        bonusMessage = "penalty kick!";
        break;
    }

    message = `Correct!${bonusMessage ? " — " + bonusMessage : ""}`;
    score += points;
    document.getElementById("playerScore").textContent = score;
    e.target.classList.add("btn-success");

  } else {
    streak = 0;

    let penaltyMessage = "";

    if (opponentStreak === 0) {
      points = 0;
      penaltyMessage = "possession conceded";
    } else if (opponentStreak === 1) {
      points = 5;
      penaltyMessage = "try conceded";
    } else if (opponentStreak === 2) {
      points = 2;
      penaltyMessage = "try converted!";
    }

    opponentStreak++;
    if (opponentStreak > 2) opponentStreak = 0;

    oppositionScore += points;
    document.getElementById("opponentScore").textContent = oppositionScore;
    e.target.classList.add("btn-danger");

    message = `Incorrect ${penaltyMessage}`;
  }

  showStreakMessage(message);
  document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
  updateProgressBar(isCorrect, points);
  
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
      displayQuestion();
    } else {
      showFinalScore();
    }
  }, 600);
}

// ===== Update Progress Bar =====
function updateProgressBar(isCorrect, pointsScored) {
  const bottomBlocks = document.querySelectorAll("#bottom-progress .streak-block");
  const topBlocks = document.querySelectorAll("#top-progress .streak-block");

  // Bottom bar (always updates)
  if (bottomBlocks[currentIndex]) {
    bottomBlocks[currentIndex].classList.add(isCorrect ? "bg-success" : "bg-danger");
  }

  // Top bar (only if points are scored)
  if (topBlocks[currentIndex]) {
    if (isCorrect && pointsScored > 0) {
      topBlocks[currentIndex].textContent = pointsScored;
      topBlocks[currentIndex].style.color = "limegreen";
    } else if (!isCorrect && pointsScored > 0) {
      topBlocks[currentIndex].textContent = pointsScored;
      topBlocks[currentIndex].style.color = "red";
    }
  }
}

// ===== Show Final Score =====
function showFinalScore() {
  const resultText = score > oppositionScore
    ? "🏆 You Win!"
    : score < oppositionScore
    ? "😓 You Lose!"
    : "🤝 It's a Draw!";

  const quiz = document.getElementById("quiz-container");
  quiz.innerHTML = `
    <h2 class="text-white">Full Time!</h2>
    <h3 class="text-white mb-3">${resultText}</h3>
    <button class="btn btn-success mt-3 me-2" onclick="restartQuiz()">Play Again</button>
    <a href="index.html" class="btn btn-outline-light mt-3">Home</a>
  `;
}

// ===== Restart Quiz =====
function restartQuiz() {
  document.getElementById("quiz-container").innerHTML = originalQuizHTML;

  // Reset all quiz state
  currentIndex = 0;
  score = 0;
  streak = 0;
  oppositionScore = 0;
  opponentStreak = 0;

  // Reset question pool
  availableQuestions = [...rugbyQuestions];
  selectQuestions();
  displayQuestion(); // 🔁 handles button setup now

  // Reset scores on screen
  document.getElementById("playerScore").textContent = 0;
  document.getElementById("opponentScore").textContent = 0;

  // ✅ Reset all streak progress blocks (top + bottom bars)
  document.querySelectorAll(".streak-block").forEach(block => {
    block.textContent = "";
  block.classList.remove("bg-success", "bg-danger", "streak-player", "streak-opponent");
  });

  // 💬 Clear any streak message
  clearStreakMessage();
}

let originalQuizHTML = "";

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", function () {
  const quiz = document.getElementById("quiz-container");
  if (quiz) originalQuizHTML = quiz.innerHTML;

  const startBtn = document.getElementById("start-btn");
  const scoreboard = document.querySelector(".center-scoreboard");
  const quizEngine = document.getElementById("quiz-engine");
  const createAccountBtn = document.getElementById("create-account-btn");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const startSection = document.getElementById("start-section");
  const signupSection = document.getElementById("signup-section");
  const loginSection = document.getElementById("login-section");
  const startQuizLink = document.getElementById("start-quiz-link");
  const authButtons = document.getElementById("auth-buttons");

  const isLoggedIn = localStorage.getItem("rwcQuizLoggedIn") === "true";
  if (isLoggedIn) {
    createAccountBtn?.classList.add("d-none");
    loginBtn?.classList.add("d-none");
    logoutBtn?.classList.remove("d-none");
    startQuizLink?.classList.remove("d-none");
    authButtons?.classList.add("d-none");
    startBtn?.classList.remove("d-none");
  } else {
    authButtons?.classList.remove("d-none");
    startBtn?.classList.add("d-none");
  }

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("rwcQuizLoggedIn");
    location.reload();
  });

  createAccountBtn?.addEventListener("click", () => {
    startSection?.classList.add("d-none");
    signupSection?.classList.remove("d-none");
  });

  loginBtn?.addEventListener("click", () => {
    startSection?.classList.add("d-none");
    loginSection?.classList.remove("d-none");
  });

  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    localStorage.setItem("rwcQuizLoggedIn", "true");
    alert("Account created!");
    signupSection?.classList.add("d-none");
    startSection?.classList.remove("d-none");
    createAccountBtn?.classList.add("d-none");
    loginBtn?.classList.add("d-none");
    logoutBtn?.classList.remove("d-none");
    startQuizLink?.classList.remove("d-none");
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    localStorage.setItem("rwcQuizLoggedIn", "true");
    alert("Login successful!");
    loginSection?.classList.add("d-none");
    startSection?.classList.remove("d-none");
    createAccountBtn?.classList.add("d-none");
    loginBtn?.classList.add("d-none");
    logoutBtn?.classList.remove("d-none");
    startQuizLink?.classList.remove("d-none");
  });

  startBtn?.addEventListener("click", function () {
    startSection?.classList.add("d-none");
    scoreboard?.classList.remove("d-none");
    quizEngine?.classList.remove("d-none");
    selectQuestions();
    displayQuestion();
    
  });

  // Handle redirect fragments
  const hash = window.location.hash;
  if (hash === "#login-section") {
    startSection?.classList.add("d-none");
    loginSection?.classList.remove("d-none");
    history.replaceState(null, null, "index.html");
  }
  if (hash === "#signup-section") {
    startSection?.classList.add("d-none");
    signupSection?.classList.remove("d-none");
    history.replaceState(null, null, "index.html");
  }
});

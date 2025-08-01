/* jshint esversion: 6 */
const rugbyQuestions = [
{ question: "Which nation has won the world cup the most number of times?", options: ["South Africa", "New Zealand", "England", "Australia"], answer: "South Africa", difficulty: "med" },
{ question: "Which nation has the highest world cup title win rate?", options: ["South Africa", "New Zealand", "England", "Australia"], answer: "South Africa", difficulty: "hard" },
{ question: "Which nation has appeared in the most semi-finals?", options: ["New Zealand", "Australia", "England", "France"], answer: "New Zealand", difficulty: "med" },
{ question: "Which nation has appeared in the most quarter-finals?", options: ["South Africa", "New Zealand", "England", "Australia"], answer: "New Zealand", difficulty: "med" },
{ question: "How many rugby world cups have Scotland played in?", options: ["6", "8", "9", "10"], answer: "10", difficulty: "hard" },
{ question: "How many teams have appeared in every rugby world cup?", options: ["4", "6", "8", "10"], answer: "10", difficulty: "hard" },
{ question: "How many pool games have New Zealand played at World Cups?", options: ["44", "54", "64", "74"], answer: "64", difficulty: "hard" },
{ question: "How many pool games have New Zealand lost at rugby world cups?", options: ["0", "3", "6", "9"], answer: "9", difficulty: "hard" },
{ question: "What is the maximum number of points scored in a rugby world cup game?", options: ["105", "115", "127", "145"], answer: "145", difficulty: "Med" },
{ question: "What is the biggest winning margin in a rugby world cup game?", options: ["52", "72", "102", "142"], answer: "142", difficulty: "Hard" },
{ question: "Which country has scored the most tries in a single rugby world cup match?", options: ["South Africa", "New Zealand", "England", "Australia"], answer: "Australia", difficulty: "Hard" },
{ question: "How many points has Dan Carter scored from conversions in rugby world cups?", options: ["116", "126", "136", "146"], answer: "116", difficulty: "Hard" },
{ question: "Who has scored the most points in a single rugby world cup tournament?", options: ["Dan Carter", "Handré Pollard", "Michael Lynagh", "Jonny Wilkinson"], answer: "Michael Lynagh", difficulty: "Med" },
{ question: "What is the most number of points scored by an individual player in a rugby world cup match?", options: ["35", "40", "45", "48"], answer: "45", difficulty: "Hard" },
{ question: "What is the record for the most tries scored by a player at rugby world cups?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "Med" },
{ question: "How many points are awarded for a try in rugby world cup matches?", options: ["2", "3", "4", "5"], answer: "5", difficulty: "Easy" },
{ question: "How many points are awarded for a drop kick in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "3", difficulty: "Easy" },
{ question: "How many points are awarded for a penalty in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "3", difficulty: "Easy" },
{ question: "How many points are awarded for a conversion in rugby world cup matches?", options: ["1", "2", "3", "4"], answer: "2", difficulty: "Easy" },
{ question: "Who has scored the most tries in a rugby world cup match for Scotland?", options: ["Darcy Graham,Gavin Hastings", "Dan Parks,Gregor Townsend", "Gavin Hastings,Gregor Townsend", "Darcy Graham,Dan Parks"], answer: "Darcy Graham,Gavin Hastings", difficulty: "Hard" },
{ question: "Who has scored the most tries in a rugby world cup match for New Zealand?", options: ["Jonah Lomu", "Marc Ellis", "John Gallagher", "Craig Green"], answer: "Marc Ellis", difficulty: "Hard" },
{ question: "What is the most tries scored by an individual player in a rugby world cup match for Ireland?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Hard" },
{ question: "Who has scored the most tries for Fiji in a single rugby world cup match?", options: ["Vereniki Goneva", "Piri Weepu", "Peni Matawalu", "Waisea Nayacalevu"], answer: "Vereniki Goneva", difficulty: "Hard" },
{ question: "Who has the most overall conversions in rugby world cups?", options: ["Dan Carter", "Gavin Hastings", "Jonny Wilkinson", "Michael Lynagh"], answer: "Dan Carter", difficulty: "Med" },
{ question: "Who scored the most conversions in the 2023 rugby world cup?", options: ["Handré Pollard", "Thomas Ramos", "Richie Mo'unga", "George Ford"], answer: "Thomas Ramos", difficulty: "Hard" },
{ question: "Who has scored the most conversions in a single rugby world cup match?", options: ["Grant Fox", "Simon Culhane", "Richie Mo'unga", "Dan Carter"], answer: "Simon Culhane", difficulty: "Hard" },
{ question: "Who has scored the most penalties in rugby world cups?", options: ["Jonny Wilkinson", "Michael Lynagh", "Andrew Mehrtens", "Dan Carter"], answer: "Jonny Wilkinson", difficulty: "Med" },
{ question: "What is the record for most penalties by a single player in one rugby world cup tournament?", options: ["27", "31", "35", "37"], answer: "31", difficulty: "Hard" },
{ question: "Who scored the most penalties in the 1995 rugby world cup?", options: ["Gonzalo Quesada", "Matt Burke", "Gonzalo Quesada", "Thierry Lacroix"], answer: "Thierry Lacroix", difficulty: "Hard" },
{ question: "Who has scored the most drop goals in the history of rugby world cups?", options: ["Jonny Wilkinson", "Jannie de Beer", "Rob Andrew", "Handré Pollard"], answer: "Jonny Wilkinson", difficulty: "Med" },
{ question: "Who has scored the most drop goals in one rugby world cup tournament?", options: ["Jonny Wilkinson", "Jannie de Beer", "Rob Andrew", "Handré Pollard"], answer: "Jonny Wilkinson", difficulty: "Med" },
{ question: "How many forwards are there in a rugby team?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "Easy" },
{ question: "How many wings are there in a rugby team?", options: ["1", "2", "3", "4"], answer: "2", difficulty: "Easy" },
{ question: "How many players are in the back line of a rugby team?", options: ["5", "6", "7", "8"], answer: "7", difficulty: "Easy" },
{ question: "What number is the scrum half in rugby?", options: ["7", "8", "9", "10"], answer: "9", difficulty: "Easy" },
{ question: "What numbers do the props wear in rugby?", options: ["1 & 2", "2 & 3", "3 & 4", "4 & 5"], answer: "1 & 3", difficulty: "Easy" },
{ question: "How many half-backs are there in a rugby team?", options: ["1", "2", "3", "4"], answer: "2", difficulty: "Med" },
{ question: "How many times has Richie McCaw won the rugby world cup?", options: ["0", "1", "2", "3"], answer: "2", difficulty: "Easy" },
{ question: "What shape is a rugby ball?", options: ["Square", "Triangle", "Round", "Oval"], answer: "Oval", difficulty: "Easy" },
{ question: "Which country did Ritchie McCaw play rugby world cup rugby for?", options: ["England", "Australia", "Scotland", "New Zealand"], answer: "New Zealand", difficulty: "Easy" },
{ question: "The “All Blacks” refer to which rugby playing nation?", options: ["Ivory Coast", "Zimbabwe", "South Africa", "New Zealand"], answer: "New Zealand", difficulty: "Easy" },
{ question: "Which country did Johnny Sexton play rugby world cup rugby for?", options: ["England", "Ireland", "Scotland", "Wales"], answer: "Ireland", difficulty: "Easy" },
{ question: "Which country did Brian O'Driscoll captain at rugby world cups?", options: ["England", "Ireland", "Scotland", "Wales"], answer: "Ireland", difficulty: "Easy" },
{ question: "Which country is Siya Kolisi from?", options: ["South Africa", "Fiji", "Tonga", "Samoa"], answer: "South Africa", difficulty: "Easy" },
{ question: "Which stadium in England has hosted a rugby world cup final at least once?", options: ["Twickeham", "Sandy Park", "Kingsholm Stadium", "Ashton Gate"], answer: "Twickeham", difficulty: "Easy" },
{ question: "What is the main rugby stadium in Auckland called?", options: ["Auckland National Stadium", "North Harbour", "Waikato", "Eden Park"], answer: "Eden Park", difficulty: "Easy" },
{ question: "Who has played the most rugby world cup matches?", options: ["Sam Whitelock", "Richie McCaw", "Keven Mealamu", "Sonny Bill Williams"], answer: "Sam Whitelock", difficulty: "Med" },
{ question: "Who has the most winning appearances in matches for South Africa at rugby world cups?", options: ["François Steyn", "Jannie de Beer", "Morne Steyn", "Handré Pollard"], answer: "François Steyn", difficulty: "Med" },
{ question: "How many nations have qualified for rugby world cups?", options: ["23", "26", "29", "33"], answer: "23", difficulty: "Hard" },
{ question: "How many nations have appeared at all rugby world cups?", options: ["8", "10", "12", "14"], answer: "10", difficulty: "Hard" },
{ question: "Who is the youngest ever scorer in a rugby world cup game?", options: ["Dan Carter", "François Steyn", "George North", "Johnny Wilkinson"], answer: "George North", difficulty: "Hard" },
{ question: "Who is the oldest player to win a rugby world cup final?", options: ["Ritchie McCaw", "Schalk Brits", "Duane Vermeulen", "Dan Carter"], answer: "Duane Vermeulen", difficulty: "Hard" },
{ question: "Who is the youngest player to win a rugby world cup final?", options: ["Jonah Lomu", "Dan Carter", "François Steyn", "Dan Carter"], answer: "François Steyn", difficulty: "Hard" },
{ question: "Who is the oldest player to appear in a world cup match?", options: ["Diego Ormaechea", "Sam Whitelock", "Richie McCaw", "Keven Mealamu"], answer: "Diego Ormaechea", difficulty: "Hard" },
{ question: "Which captain lifted the 1987 rugby world cup?", options: ["David Kirk", "Craig Green", "Grant Fox", "John Gallagher"], answer: "David Kirk", difficulty: "Med" },
{ question: "Who was the coach of the 1991 rugby world cup winning team?", options: ["Nick Farr-Jones", "Bob Dwyer", "Rod MacQueen", "James Burke"], answer: "Bob Dwyer", difficulty: "Med" },
{ question: "Which team got the most red cards in 1995?", options: ["South Africa", "Samoa", "Tonga", "Canada"], answer: "Canada", difficulty: "Med" },
{ question: "How many red cards has Tonga received at the rugby world cup", options: ["1", "2", "3", "4"], answer: "4", difficulty: "Hard" },
{ question: "How many red cards has Samoa received at the rugby world cup", options: ["1", "2", "3", "4"], answer: "4", difficulty: "Hard" },
{ question: "How many red cards have New Zealand and South Africa received at rugby world cups?", options: ["0", "1", "2", "3"], answer: "2", difficulty: "Hard" },
{ question: "Ignoring cancelled rugby world cup matches, how many games have been drawn at rugby world cups?", options: ["4", "6", "8", "10"], answer: "4", difficulty: "Hard" },
{ question: "How many rugby world cups has Portugal played in?", options: ["0", "1", "2", "3"], answer: "2", difficulty: "Hard" },
{ question: "Ignoring cancelled rugby world cup matches, how many games have had a nil scoreline by at least one team?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Hard" },
{ question: "Which game has had the highest attendance at rugby world cups?", options: ["Ireland v Romania", "South Africa v New Zealand", "England v New Zealand", "Australia v England"], answer: "Ireland v Romania", difficulty: "Med" },
{ question: "Which game has had the lowest attendance at rugby world cups?", options: ["Ivory Coast v Zimbabwe", "Argentina v Italy", "Chile v Namibia", "Uruguay v Romania"], answer: "Argentina v Italy", difficulty: "Med" },
{ question: "Who was the first sole host nation to be eliminated in the pool stage of a rugby world cup?", options: ["England", "France", "Wales", "Scotland"], answer: "England", difficulty: "Hard" },
{ question: "How many times have teams played each other twice at the same world cup?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Med" },
{ question: "How many times have England played Ireland at the rugby world cup?", options: ["0", "1", "2", "3"], answer: "0", difficulty: "Med" },
{ question: "Which rugby world cup final is the only one where both finalists had previously lost a game in the tournament?", options: ["1987", "2003", "2019", "2023"], answer: "2023", difficulty: "Hard" },
{ question: "How many times have New Zealand played the opening world cup match?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Med" },
{ question: "Which teams have made the quarter finals of every world cup they have competed in?", options: ["France, New Zealand, South Africa", "New Zealand, France, England", "New Zealand, Australia, South Africa", "New Zealand, France, Australia"], answer: "France, New Zealand, South Africa", difficulty: "Med" },
{ question: "Which is the only non-English speaking team to make it to the rugby world cup final?", options: ["Argentina", "France", "Italy", "Japan"], answer: "France", difficulty: "Med" },
{ question: "Which tier 2 nation has played every world cup?", options: ["Japan", "Italy", "Argentina", "Wales"], answer: "Japan", difficulty: "Hard" },
{ question: "How many tier 2 countries have made it to the quarter finals?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Hard" },
{ question: "Which year was the rugby world cup’s highest scoring final match played?", options: ["1987", "1995", "2015", "2023"], answer: "2015", difficulty: "Med" },
{ question: "How many players have won the world cup rugby twice?", options: ["29", "37", "39", "44"], answer: "44", difficulty: "Hard" },
{ question: "How many Australian players have won the rugby world cup twice?", options: ["0", "5", "8", "15"], answer: "5", difficulty: "Hard" },
{ question: "How many New Zealand players have won the world cup rugby twice?", options: ["14", "18", "21", "24"], answer: "14", difficulty: "Hard" },
{ question: "How many South African players have won the rugby world cup twice?", options: ["15", "20", "25", "30"], answer: "25", difficulty: "Hard" },
{ question: "How many world cup games has New Zealand played?", options: ["44", "54", "64", "74"], answer: "64", difficulty: "Hard" },
{ question: "How many world cup games has New Zealand won?", options: ["44", "54", "64", "74"], answer: "54", difficulty: "Hard" },
{ question: "How many world cup games has New Zealand lost?", options: ["3", "6", "9", "12"], answer: "9", difficulty: "Hard" },
{ question: "How many games has the USA won at the rugby world cup finals?", options: ["0", "1", "2", "3"], answer: "3", difficulty: "Hard" },
{ question: "How many games has Portugal won at the rugby world cup finals?", options: ["0", "1", "2", "3"], answer: "1", difficulty: "Hard" },
{ question: "How many seconds were left on the clock when Johnny Wilkinson scored the winning drop kick for England against Australia in the 2003 final?", options: ["16", "26", "36", "46"], answer: "26", difficulty: "Hard" },
{ question: "Who holds the record for the longest drop goal in a rugby world cup match?", options: ["Andrew Miller", "Johnny Wilkinson", "Jannie De Beer", "Dan Carter"], answer: "Andrew Miller", difficulty: "Hard" },
{ question: "Has Russia ever played in the rugby world cup tournament?", options: ["Yes", "No", "Only Qualifying Games", "Only Preliminary Games"], answer: "Yes", difficulty: "Med" },
{ question: "Has Spain ever played in the rugby world cup tournament?", options: ["Yes", "No", "Only Qualifying Games", "Only Preliminary Games"], answer: "Yes", difficulty: "Med" },
{ question: "Does rugby have an offside rule?", options: ["Yes", "No", "Only For Attacking Plays", "Only For Defensive Plays"], answer: "Yes", difficulty: "Easy" },
{ question: "Which of the following items can rugby players NOT legally wear while playing a game at the rugby world cup?", options: ["Gloves", "Mittens", "Goggles", "Head protection"], answer: "Gloves", difficulty: "Med" },
{ question: "How far is the longest drop goal ever scored at the world cup?", options: ["50m", "52m", "54m", "56m"], answer: "52m", difficulty: "Hard" },
{ question: "Which stadium hosted the 2003 rugby world cup final?", options: ["Telstra Stadium", "SCG", "MCG", "The Gabba"], answer: "Telstra Stadium", difficulty: "Med" },
{ question: "Which stadium hosted the 2019 rugby world cup final?", options: ["Toyota Stadium", "Nissan Stadium", "Yokohama Stadium", "Tokyo Stadium"], answer: "Nissan Stadium", difficulty: "Med" },
{ question: "How many world cup finals has South Africa won at the Stade De France?", options: ["0", "1", "2", "3"], answer: "2", difficulty: "Med" },
{ question: "Which rugby player became the first springbok to score in all four possible ways in one test match?", options: ["Joel Stransky", "Handré Pollard", "Jannie De Beer", "François Steyn"], answer: "Joel Stransky", difficulty: "Med" },
{ question: "How many officials are on the field during a rugby world cup game?", options: ["1", "2", "3", "4"], answer: "1", difficulty: "Easy" },
{ question: "What is the maximum number of replacements a team can have available for a rugby world cup match?", options: ["4", "6", "8", "10"], answer: "8", difficulty: "Med" },
];

const MAX_QUESTIONS = 12;
let availableQuestions = [...rugbyQuestions];
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let oppositionScore = 0;

function selectQuestions() {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const randIndex = Math.floor(Math.random() * availableQuestions.length);
    selectedQuestions.push(availableQuestions.splice(randIndex, 1)[0]);
  }
}

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
  }, 500);
}

function showFinalScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2 class="text-white">Full Time!</h2>
    <p class="text-white">Your final score: ${score}</p>
    <button class="btn btn-light mt-3" onclick="restartQuiz()">Play Again</button>
  `;
}

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

// DOMContentLoaded — page is ready
document.addEventListener("DOMContentLoaded", function () {
  // Create Account button logic
  const createAccountBtn = document.getElementById("create-account-btn");
  const startSection = document.getElementById("start-section") || document.querySelector(".hero-section");
  const signupSection = document.getElementById("signup-section");

  if (createAccountBtn && startSection && signupSection) {
    createAccountBtn.addEventListener("click", function () {
      startSection.classList.add("d-none");
      signupSection.classList.remove("d-none");
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("signup-username").value.trim();
      const password = document.getElementById("signup-password").value.trim();

      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }

      alert("Account created successfully!");
      signupSection.classList.add("d-none");
      if (startSection) startSection.classList.remove("d-none");
    });
  }

  // Start button logic
  const startBtn = document.getElementById("start-btn");
  const scoreboard = document.querySelector(".center-scoreboard");
  const quizEngine = document.getElementById("quiz-engine");

  if (startBtn && scoreboard && quizEngine) {
    startBtn.addEventListener("click", function () {
      startSection.classList.add("d-none");
      scoreboard.classList.remove("d-none");
      quizEngine.classList.remove("d-none");
      startQuiz();
    });
  }

// Login button logic 
  // ✅ Login button shows login form
  const loginBtn = document.getElementById("login-btn");
  const loginSection = document.getElementById("login-section");

  if (loginBtn && loginSection) {
    loginBtn.addEventListener("click", function () {
      const startSection = document.getElementById("start-section") || document.querySelector(".hero-section");
      const signupSection = document.getElementById("signup-section");

      if (startSection) startSection.classList.add("d-none");
      if (signupSection) signupSection.classList.add("d-none");
      loginSection.classList.remove("d-none");
    });
  }

  // ✅ Login form submission logic
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }

      alert("Login successful!");
      loginSection.classList.add("d-none");
      window.location.href = "play.html"; // ✅ Go to quiz page
    });
  }
});
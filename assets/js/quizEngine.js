
// select 12 questions handle clicks score based on rugby rules,
// + show a final screen.

const MAX_QUESTIONS = 12;
let availableQuestions = [...rugbyQuestions]; // makse SURE rugbyQuestions.js is loaded first!!!
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;

//opposition score 
let oppositionScore = 0; //new function to add oppositions scores

// Shuffle and select 12 questions
function selectQuestions() {
    for (let i = 0; i < MAX_QUESTIONS; i++) {
        const randIndex = Math.floor(Math.random() * availableQuestions.length);
        selectedQuestions.push(availableQuestions.splice(randIndex, 1)[0]);
    }
}

// Display current question and options
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


// Handle answer click
function handleAnswerClick(event) {
    const selected = event.target.textContent;
    const correct = selectedQuestions[currentIndex].answer;
    const isCorrect = selected === correct;




    // Scoring logic - basic - need to change for quarterfinal/semi/final
    if (isCorrect) {
        streak++;
        if (streak >= 5) {
            score += 5; // Try
        } else if (streak >= 3) {
            score += 3; // Drop Goal
        } else {
            score += 2; // Conversion
        }

        document.getElementById("playerScore").textContent = score; // Update the scoreboard display player's score



        event.target.classList.add("btn-success");
    } else {
        streak = 0;
        //score -= 3; remove negative scores
        oppositionScore += 3; // add opposition scores
        
        
         document.getElementById("opponentScore").textContent = oppositionScore; // Update the scoreboard display opposition's score
        
        
        
        event.target.classList.add("btn-danger");

        // Optional: Flash a message saying "Opposition scores!"
        //const container = document.getElementById("quiz-container");
        //container.innerHTML = `<p class="text-danger fw-bold">Opposition scores 3 points!</p>`;
    }


    // Disable all buttons after answer
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);



    // Show next question after 1.5seconds
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < selectedQuestions.length) {
            displayQuestion();
        } else {
            showFinalScore();
        }
    }, 1500);
}

// Show final score screen
function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = `
        <h2 class="text-white">Full Time!</h2>
        <p class="text-white">Your final score: ${score}</p>
        <button class="btn btn-light mt-3" onclick="restartQuiz()">Play Again</button>
    `;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById("quiz-container").innerHTML = ""; // Clear final score
    document.getElementById("start-section").classList.add("d-none");
    document.getElementById("quiz-engine").classList.remove("d-none");

    selectedQuestions = [];
    currentIndex = 0;
    score = 0;

    oppositionScore = 0; // Reset opposition score

    streak = 0;

    availableQuestions = [...rugbyQuestions]; // Reset the full question pool
    selectQuestions();
    displayQuestion();

}

// Hook everything up
//document.addEventListener("DOMContentLoaded", function () {
    //selectQuestions();
    //displayQuestion();

    //document.querySelectorAll(".option-btn").forEach(btn => {
        //btn.addEventListener("click", handleAnswerClick);
   // });
//});

// start quizz with button
function startQuiz() {
    selectedQuestions = [];
    currentIndex = 0;
    score = 0;
    streak = 0;
    availableQuestions = [...rugbyQuestions];

    selectQuestions();
    displayQuestion();

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", handleAnswerClick);
    });
}

// link start button
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            document.getElementById("start-section").classList.add("d-none");
            document.getElementById("quiz-engine").classList.remove("d-none");
            startQuiz();
        });
    }
});
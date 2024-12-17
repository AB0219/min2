let currentQuestionIndex = 0;
let score = 0;
let startTime = 0;
let totalTime = 0;
let elapsedSeconds = 0;
let questionStartTime = 0;

let clockInterval;
let markedQuestions = [];  // Array to hold marked question indices
let skippedQuestions = []; // Array to hold skipped question indices

// Shuffle the questions array and select only the first 10 questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    questions.length = 10;
}

function startQuiz() {
    shuffleQuestions();  // Shuffle questions before starting
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('quizPage').classList.remove('hidden');
    document.getElementById('clock').style.display = 'block';
    showQuestion(currentQuestionIndex);
    startTimer();
}

function startTimer() {
    startTime = Date.now();

    clockInterval = setInterval(() => {
        elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('clock').innerText = `Time: ${elapsedSeconds}s`;
    }, 1000);
}

function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    const questionData = questions[index];

    questionStartTime = Date.now();

    questionContainer.innerHTML = `
        <p><strong>${index + 1}. ${questionData.question}</strong></p>
        ${questionData.options.map((option, i) => 
            `<button class="option" onclick="selectOption(${i})">${option}</button>`
        ).join('')}
    `;

    document.getElementById('nextButton').disabled = true;
    document.getElementById('timeTakenNote').innerText = '';
    document.getElementById('skipButton').disabled = false;
    document.getElementById('markButton').disabled = false;
}

function selectOption(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);

    document.getElementById('timeTakenNote').innerText = `Time taken to answer this question: ${timeTaken} seconds`;

    totalTime += timeTaken;

    if (selectedIndex === questionData.correct) {
        score++;
    }

    document.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });

    document.getElementById('nextButton').disabled = false;
}

function skipQuestion() {
    skippedQuestions.push(currentQuestionIndex);  // Mark as skipped
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function markForReview() {
    markedQuestions.push(currentQuestionIndex);  // Mark as reviewed
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(clockInterval);
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');

    const iqScore = calculateIQ(score);
    const resultMessage = `Your IQ Score: <strong>${iqScore}</strong><br>`;
    const timeMessage = `Total Time Taken: <strong>${totalTime} seconds</strong>`;
    const answeredMessage = `Questions Answered: <strong>${currentQuestionIndex}</strong><br>`;
    const correctMessage = `Correct Answers: <strong>${score}</strong><br>`;
    const markedMessage = `Questions Marked for Review: <strong>${markedQuestions.length}</strong><br>`;
    const skippedMessage = `Questions Skipped (attempted but not answered): <strong>${skippedQuestions.length}</strong><br>`;

    let feedback;
    if (iqScore < 90) {
        feedback = "Below Average IQ. Keep practicing!";
    } else if (iqScore < 110) {
        feedback = "Average IQ. Well done!";
    } else if (iqScore < 130) {
        feedback = "Above Average IQ. Great job!";
    } else {
        feedback = "Genius IQ! Excellent!";
    }

    document.getElementById('resultMessage').innerHTML = resultMessage + timeMessage + answeredMessage + correctMessage + markedMessage + skippedMessage + feedback;
}
let currentQuestionIndex = 0;
let score = 0;
let startTime = 0;
let totalTime = 0;
let elapsedSeconds = 0;
let questionStartTime = 0;

let clockInterval;
let markedQuestions = [];  // Array to hold marked question indices
let skippedQuestions = []; // Array to hold skipped question indices

// Shuffle the questions array and select only the first 10 questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    questions.length = 10;
}

function startQuiz() {
    shuffleQuestions();  // Shuffle questions before starting
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('quizPage').classList.remove('hidden');
    document.getElementById('clock').style.display = 'block';
    showQuestion(currentQuestionIndex);
    startTimer();
}

function startTimer() {
    startTime = Date.now();

    clockInterval = setInterval(() => {
        elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('clock').innerText = `Time: ${elapsedSeconds}s`;
    }, 1000);
}

function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    const questionData = questions[index];

    questionStartTime = Date.now();

    questionContainer.innerHTML = `
        <p><strong>${index + 1}. ${questionData.question}</strong></p>
        ${questionData.options.map((option, i) => 
            `<button class="option" onclick="selectOption(${i})">${option}</button>`
        ).join('')}
    `;

    document.getElementById('nextButton').disabled = true;
    document.getElementById('timeTakenNote').innerText = '';
    document.getElementById('skipButton').disabled = false;
    document.getElementById('markButton').disabled = false;
}

function selectOption(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);

    document.getElementById('timeTakenNote').innerText = `Time taken to answer this question: ${timeTaken} seconds`;

    totalTime += timeTaken;

    if (selectedIndex === questionData.correct) {
        score++;
    }

    document.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });

    document.getElementById('nextButton').disabled = false;
}

function skipQuestion() {
    skippedQuestions.push(currentQuestionIndex);  // Mark as skipped
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function markForReview() {
    markedQuestions.push(currentQuestionIndex);  // Mark as reviewed
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(clockInterval);
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');

    const iqScore = calculateIQ(score);
    const resultMessage = `Your IQ Score: <strong>${iqScore}</strong><br>`;
    const timeMessage = `Total Time Taken: <strong>${totalTime} seconds</strong>`;
    const answeredMessage = `Questions Answered: <strong>${currentQuestionIndex}</strong><br>`;
    const correctMessage = `Correct Answers: <strong>${score}</strong><br>`;
    const markedMessage = `Questions Marked for Review: <strong>${markedQuestions.length}</strong><br>`;
    const skippedMessage = `Questions Skipped (attempted but not answered): <strong>${skippedQuestions.length}</strong><br>`;

    let feedback;
    if (iqScore < 90) {
        feedback = "Below Average IQ. Keep practicing!";
    } else if (iqScore < 110) {
        feedback = "Average IQ. Well done!";
    } else if (iqScore < 130) {
        feedback = "Above Average IQ. Great job!";
    } else {
        feedback = "Genius IQ! Excellent!";
    }

    document.getElementById('resultMessage').innerHTML = resultMessage + timeMessage + answeredMessage + correctMessage + markedMessage + skippedMessage + feedback;
}

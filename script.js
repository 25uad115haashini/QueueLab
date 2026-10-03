let queue = [];
let operations = 0;

const queueContainer = document.getElementById("queueContainer");
const queueSizeDisplay = document.getElementById("queueSize");
const frontValue = document.getElementById("frontValue");
const rearValue = document.getElementById("rearValue");
const message = document.getElementById("message");
const valueInput = document.getElementById("valueInput");
const operationCount = document.getElementById("operationCount");
const liveQueueSize = document.getElementById("liveQueueSize");
const liveFront = document.getElementById("liveFront");
const liveRear = document.getElementById("liveRear");

function updateQueueDisplay() {

    queueContainer.innerHTML = "";

    queue.forEach((value) => {

        const element = document.createElement("div");

        element.className = "queue-element";
        element.textContent = value;

        queueContainer.appendChild(element);
    });

operationCount.textContent = operations;
liveQueueSize.textContent = queue.length;
liveFront.textContent = queue.length > 0 ? queue[0] : "—";
liveRear.textContent = queue.length > 0 ? queue[queue.length - 1] : "—";
    queueSizeDisplay.textContent = queue.length;

    frontValue.textContent =
        queue.length > 0 ? queue[0] : "—";

    rearValue.textContent =
        queue.length > 0 ? queue[queue.length - 1] : "—";
}


function showMessage(text) {

    message.textContent = text;
}


function enqueue() {

    const value = valueInput.value.trim();

    if (value === "") {

        showMessage("⚠️ Please enter a value first.");
        return;
    }


    queue.push(value);

    operations++;

    updateQueueDisplay();

    showMessage(
        `✓ Element ${value} successfully added to the REAR.`
    );

    valueInput.value = "";

    valueInput.focus();
}


function dequeue() {

    if (queue.length === 0) {

        showMessage(
            "⚠️ Queue Underflow! The queue is empty."
        );

        return;
    }

    const firstElement = document.querySelector(".queue-element");

    if (firstElement) {
        firstElement.classList.add("dequeue-animation");
    }

    setTimeout(() => {

        const removed = queue.shift();

        operations++;

        updateQueueDisplay();

        showMessage(
            `✓ Element ${removed} removed from the FRONT.`
        );

    }, 400);
}

function peek() {

    if (queue.length === 0) {
        showMessage("⚠️ Queue is empty. Nothing to peek.");
        return;
    }

    const firstElement = document.querySelector(".queue-element");

    if (firstElement) {
        firstElement.classList.add("peek-highlight");

        setTimeout(() => {
            firstElement.classList.remove("peek-highlight");
        }, 1000);
    }

    showMessage(`👀 Peek → Front element is ${queue[0]}.`);
}


function queueSize() {

    showMessage(
        `📊 Current queue size is ${queue.length}.`
    );
}


function isEmpty() {

    if (queue.length === 0) {

        showMessage(
            "✓ Queue is EMPTY."
        );

    } else {

        showMessage(
            `✓ Queue is NOT EMPTY. It contains ${queue.length} element(s).`
        );
    }
}


function clearQueue() {

    if (queue.length === 0) {

        showMessage(
            "Queue is already empty."
        );

        return;
    }


    queue = [];

    operations++;

    updateQueueDisplay();

    showMessage(
        "✓ Queue cleared successfully."
    );
}
// =============================
// QUEUE QUIZ
// =============================

const quizQuestions = [
    {
        question: "Which principle does a Queue follow?",
        options: [
            "LIFO — Last In First Out",
            "FIFO — First In First Out",
            "Random Access",
            "FILO — First In Last Out"
        ],
        answer: 1
    },

    {
        question: "Which operation adds an element to the Queue?",
        options: [
            "Dequeue",
            "Peek",
            "Enqueue",
            "Clear"
        ],
        answer: 2
    },

    {
        question: "Which operation removes an element from the Queue?",
        options: [
            "Enqueue",
            "Dequeue",
            "Peek",
            "Size"
        ],
        answer: 1
    },

    {
        question: "Where is a new element inserted in a Queue?",
        options: [
            "FRONT",
            "Middle",
            "REAR",
            "Anywhere"
        ],
        answer: 2
    },

    {
        question: "What is the time complexity of Enqueue in our Queue?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

function loadQuestion() {

    const question = quizQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("quizQuestion").textContent =
        question.question;

    const optionsContainer =
        document.getElementById("quizOptions");

    optionsContainer.innerHTML = "";

    document.getElementById("quizResult").textContent =
        "Select an answer to continue.";

    document.getElementById("quizResult").style.color = "#bbb";

    document.getElementById("nextButton").style.display = "none";

    quizAnswered = false;

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = () => checkQuizAnswer(button, index);

        optionsContainer.appendChild(button);
    });
}

function checkQuizAnswer(button, selectedAnswer) {

    if (quizAnswered) return;

    quizAnswered = true;

    const correctAnswer =
        quizQuestions[currentQuestion].answer;

    const allButtons =
        document.querySelectorAll(".quiz-options button");

    allButtons.forEach(btn => {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        quizScore++;

        document.getElementById("quizResult").textContent =
            "🎉 Correct! Great job.";

        document.getElementById("quizResult").style.color =
            "#5cffb0";

    } else {

        button.classList.add("wrong");

        allButtons[correctAnswer].classList.add("correct");

        document.getElementById("quizResult").textContent =
            "❌ Incorrect. The highlighted answer is correct.";

        document.getElementById("quizResult").style.color =
            "#ff6b8a";
    }

    // If this is the LAST question
    if (currentQuestion === quizQuestions.length - 1) {

        setTimeout(() => {
            showQuizResult();
        }, 800);

    } else {

        document.getElementById("nextButton").style.display =
            "inline-block";
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        // Quiz completed
        document.getElementById("nextButton").style.display = "none";

        showQuizResult();
    }
}

function showQuizResult() {

    document.getElementById("questionNumber").textContent = "✓";

    document.getElementById("quizQuestion").textContent =
        "Quiz Completed! 🎉";

    document.getElementById("quizOptions").innerHTML = "";

    const result = document.getElementById("quizResult");

    result.textContent =
        `Your Score: ${quizScore} / ${quizQuestions.length}`;

    result.style.color = "#ff5bd1";
    result.style.fontSize = "20px";
    result.style.fontWeight = "700";

    // Hide Next Question button
    document.getElementById("nextButton").style.display = "none";
}
function restartQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    const nextButton =
        document.getElementById("nextButton");

    nextButton.textContent = "Next Question →";
    nextButton.onclick = nextQuestion;

    loadQuestion();
}

updateQueueDisplay();
loadQuestion();
document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const nextButton = document.getElementById("next-btn");
    const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
    const scoreElement = document.getElementById("score");
    const feedbackForm = document.getElementById("feedback-form");

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What does HTML stand for?",
            answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correctAnswer: "Hyper Text Markup Language"
        },
        {
            question: "Who is making the Web standards?",
            answers: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
            correctAnswer: "The World Wide Web Consortium"
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            answers: ["<heading>", "<h1>", "<h6>"],
            correctAnswer: "<h1>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            answers: ["<br>", "<break>", "<lb>"],
            correctAnswer: "<br>"
        },
        {
            question: "What does CSS stand for?",
            answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            answers: ["style", "class", "styles"],
            correctAnswer: "style"
        },
        {
            question: "Which is the correct CSS syntax?",
            answers: ["body {color: black;}", "{body;color:black;}", "body:color=black;"],
            correctAnswer: "body {color: black;}"
        },
        {
            question: "How do you insert a comment in a CSS file?",
            answers: ["// this is a comment", "/* this is a comment */", "' this is a comment"],
            correctAnswer: "/* this is a comment */"
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: ["<script>", "<javascript>", "<js>"],
            correctAnswer: "<script>"
        },
        {
            question: "How do you write \"Hello World\" in an alert box?",
            answers: ["alertBox(\"Hello World\");", "msgBox(\"Hello World\");", "alert(\"Hello World\");"],
            correctAnswer: "alert(\"Hello World\");"
        }
    ];

    function loadQuestion() {
        quizContainer.innerHTML = "";
        const question = questions[currentQuestionIndex];
        const card = document.createElement("div");
        card.className = "card";
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const questionElement = document.createElement("h5");
        questionElement.className = "card-title";
        questionElement.textContent = question.question;
        cardBody.appendChild(questionElement);

        question.answers.forEach(answer => {
            const answerButton = document.createElement("button");
            answerButton.className = "btn btn-outline-primary btn-block";
            answerButton.textContent = answer;
            answerButton.onclick = () => selectAnswer(answer);
            cardBody.appendChild(answerButton);
        });

        card.appendChild(cardBody);
        quizContainer.appendChild(card);
    }

    function selectAnswer(answer) {
        const question = questions[currentQuestionIndex];
        if (answer === question.correctAnswer) {
            score++;
        }
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
        resultModal.show();
    }

    nextButton.addEventListener("click", () => {
        loadQuestion();
    });

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const toast = new bootstrap.Toast(document.getElementById("feedbackToast"));
        toast.show();
        feedbackForm.reset();
    });

    loadQuestion();
});

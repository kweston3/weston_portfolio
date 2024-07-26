document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is my favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
      answer: 0,
    },
    {
      question: "What is my favorite hobby?",
      options: ["Hiking", "Reading", "Gaming", "Cooking"],
      answer: 2,
    },
    {
      question: "Which framework do I use the most?",
      options: ["React", "Angular", "Vue", "Svelte"],
      answer: 0,
    },
    {
      question: "What is my favorite sport?",
      options: ["Basketball", "Soccer", "Football", "Baseball"],
      answer: 1,
    },
    {
      question: "Where did I go to college?",
      options: ["MIT", "Harvard", "Stanford", "University of Wisconsin"],
      answer: 3,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  const questionContainer = document.getElementById("question-container");
  const timerElement = document.getElementById("timer");
  const timerContainer = document.getElementById("timer-container");
  const scoreContainer = document.getElementById("score-container");
  const scoreElement = document.getElementById("score");
  const startBtn = document.getElementById("start-btn");
  const startContainer = document.getElementById("start-container");
  const quizSection = document.getElementById("quiz-section");

  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      ${question.options
        .map(
          (option, index) => `
        <div class="option-div" data-index="${index}">
          ${option}
        </div>
      `
        )
        .join("")}
    `;
    startTimer();
    timerContainer.classList.remove("hide");
  }

  function startTimer() {
    let timeLeft = 10;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft -= 1;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        checkAnswer(-1); // No answer selected
      }
    }, 1000);
  }

  function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const question = questions[currentQuestionIndex];
    const correctIndex = question.answer;
    const options = document.querySelectorAll(".option-div");

    options.forEach((option, index) => {
      option.classList.remove("correct", "incorrect");
      if (index === correctIndex) {
        option.classList.add("correct");
      } else if (index === selectedIndex) {
        option.classList.add("incorrect");
      }
    });

    if (selectedIndex === correctIndex) {
      score += 1;
    }

    timerContainer.classList.add("hide");

    // Wait for 1 second before loading the next question
    setTimeout(() => {
      currentQuestionIndex += 1;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }, 1000); // 1-second delay
  }

  function showScore() {
    questionContainer.classList.add("hide");
    timerContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    scoreElement.textContent = score;
  }

  function startQuiz() {
    startContainer.classList.add("hide");
    quizSection.classList.remove("hide");

    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    loadQuestion();
  }

  startBtn.addEventListener("click", () => {
    startQuiz();
    startBtn.classList.add("hide"); // Hide the start button
  });

  questionContainer.addEventListener("click", (event) => {
    const index = event.target.getAttribute("data-index");
    if (index !== null) {
      checkAnswer(parseInt(index));
    }
  });
});

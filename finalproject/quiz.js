const quizMode = document.querySelector("#quiz-mode");
const questionEl = document.querySelector("#question");
const answerInput = document.querySelector("#answer-input");
const feedbackEl = document.querySelector("#feedback");
const lastCorrectEl = document.querySelector("#last-correct");

const correctCountEl = document.querySelector("#correct-count");
const incorrectCountEl = document.querySelector("#incorrect-count");
const streakCountEl = document.querySelector("#streak-count");

const scoreKey = "oppidumMeumScore";
let currentQuestion = null;

const verbQuestions = [
  {
    prompt: "Verb mode: For amare, what is the perfect passive participle?",
    answer: "amatus"
  },
  {
    prompt: "Verb mode: Give the 1st person plural imperfect active indicative of monere.",
    answer: "monebamus"
  },
  {
    prompt: "Verb mode: Give the 2nd person singular future active indicative of ducere.",
    answer: "duces"
  },
  {
    prompt: "Verb mode: Give the 3rd person plural present active indicative of audire.",
    answer: "audiunt"
  },
  {
    prompt: "Verb mode: For esse, what is the 1st person singular present indicative?",
    answer: "sum"
  },
  {
    prompt: "Verb mode: Give the 3rd person singular imperfect active indicative of amare.",
    answer: "amabat"
  }
];

const declensionQuestions = [
  {
    prompt: "Declension mode: What is the genitive singular of puella?",
    answer: "puellae"
  },
  {
    prompt: "Declension mode: What is the dative plural of servus?",
    answer: "servis"
  },
  {
    prompt: "Declension mode: What is the nominative/accusative plural of bellum?",
    answer: "bella"
  },
  {
    prompt: "Declension mode: What is the genitive singular of rex?",
    answer: "regis"
  },
  {
    prompt: "Declension mode: What is the genitive plural of manus?",
    answer: "manuum"
  },
  {
    prompt: "Declension mode: What is the dative singular of dies?",
    answer: "diei"
  }
];

function normalizeInput(value) {
  return value.trim().toLowerCase();
}

function getStoredScore() {
  const rawScore = localStorage.getItem(scoreKey);
  if (!rawScore) {
    return { correct: 0, incorrect: 0, streak: 0 };
  }

  try {
    const parsed = JSON.parse(rawScore);
    return {
      correct: Number(parsed.correct) ?? 0,
      incorrect: Number(parsed.incorrect) ?? 0,
      streak: Number(parsed.streak) ?? 0
    };
  } catch {
    return { correct: 0, incorrect: 0, streak: 0 };
  }
}

function setStoredScore(score) {
  localStorage.setItem(scoreKey, JSON.stringify(score));
}

function updateScoreView() {
  const score = getStoredScore();
  correctCountEl.textContent = String(score.correct);
  incorrectCountEl.textContent = String(score.incorrect);
  streakCountEl.textContent = String(score.streak);
}

function getQuestionPool() {
  return quizMode.value === "verb" ? verbQuestions : declensionQuestions;
}

function newQuestion() {
  const pool = getQuestionPool();
  currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  questionEl.textContent = currentQuestion.prompt;
  feedbackEl.textContent = "";
  feedbackEl.className = "";
  lastCorrectEl.textContent = "";
  answerInput.value = "";
  answerInput.focus();
}

function submitAnswer() {
  if (!currentQuestion) {
    feedbackEl.textContent = "Generate a question first.";
    feedbackEl.className = "incorrect";
    return;
  }

  const userAnswer = normalizeInput(answerInput.value);
  const expectedAnswer = normalizeInput(currentQuestion.answer);
  const score = getStoredScore();

  if (userAnswer === expectedAnswer) {
    score.correct += 1;
    score.streak += 1;
    feedbackEl.textContent = "Correct.";
    feedbackEl.className = "correct";
    lastCorrectEl.textContent = "";
  } else {
    score.incorrect += 1;
    score.streak = 0;
    feedbackEl.textContent = "Not quite.";
    feedbackEl.className = "incorrect";
    lastCorrectEl.textContent = `Expected answer: ${currentQuestion.answer}`;
  }

  setStoredScore(score);
  updateScoreView();
}

document.querySelector("#submit-answer")?.addEventListener("click", submitAnswer);
document.querySelector("#new-question")?.addEventListener("click", newQuestion);
document.querySelector("#reset-score")?.addEventListener("click", () => {
  setStoredScore({ correct: 0, incorrect: 0, streak: 0 });
  updateScoreView();
  feedbackEl.textContent = "Score reset.";
  feedbackEl.className = "";
  lastCorrectEl.textContent = "";
});

quizMode.addEventListener("change", newQuestion);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

updateScoreView();
newQuestion();

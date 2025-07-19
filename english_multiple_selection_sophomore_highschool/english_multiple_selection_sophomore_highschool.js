const quiz = [
  {
    question: "Which of the following are verbs?",
    options: ["Run", "Book", "Jump", "Blue"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which of these are pronouns?",
    options: ["He", "She", "Car", "It"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following words are adjectives?",
    options: ["Tall", "Smart", "Write", "Cold"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are examples of present continuous tense?",
    options: ["She is dancing", "I am sleep", "They are playing", "We plays soccer"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which words are synonyms of 'happy'?",
    options: ["Glad", "Joyful", "Sad", "Cheerful"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are parts of a recount text?",
    options: ["Orientation", "Complication", "Events", "Re-orientation"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which of the following are modal verbs?",
    options: ["Can", "Will", "Do", "Must"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are adverbs of frequency?",
    options: ["Always", "Never", "Run", "Sometimes"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which sentences are imperative?",
    options: ["Close the door!", "Do your homework.", "I am closing the door.", "Please be quiet."],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are forms of the verb ‘to be’?",
    options: ["Am", "Is", "Do", "Are"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are genres of text?",
    options: ["Narrative", "Recount", "Adjective", "Procedure"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are correct past tense forms?",
    options: ["Went", "Buyed", "Ate", "Took"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which are punctuation marks?",
    options: ["Comma (,)", "Full stop (.)", "Question mark (?)", "Book"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are examples of countable nouns?",
    options: ["Apples", "Water", "Chairs", "Books"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which are parts of a procedure text?",
    options: ["Goal", "Materials", "Steps", "Feelings"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are conjunctions?",
    options: ["And", "But", "Because", "Fast"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are correct examples of simple present tense?",
    options: ["She plays guitar", "They swim every Sunday", "He go to school", "We eat lunch"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are examples of prepositions?",
    options: ["On", "Under", "Behind", "Quickly"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are informal greetings?",
    options: ["Hey", "What's up", "Good evening", "Hi"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are examples of passive voice?",
    options: ["The book was read by her", "She reads the book", "The cake is made by Anna", "He is eating a cake"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which are interrogative words?",
    options: ["What", "Why", "How", "Tall"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are synonyms of ‘big’?",
    options: ["Large", "Huge", "Tiny", "Enormous"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are antonyms of ‘hot’?",
    options: ["Cold", "Cool", "Warm", "Freezing"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are verbs in past participle form?",
    options: ["Eaten", "Gone", "Break", "Written"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are transition words?",
    options: ["Therefore", "Then", "Because", "Run"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are used in writing a biography?",
    options: ["Date of birth", "Hobbies", "Achievements", "Conjunctions"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which sentences express obligation?",
    options: ["You must study", "You should sleep early", "I can go now", "You have to do it"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which words are nouns?",
    options: ["Apple", "Jump", "City", "Book"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which are components of a narrative text?",
    options: ["Orientation", "Complication", "Resolution", "Conclusion"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are regular verbs?",
    options: ["Walked", "Played", "Went", "Cleaned"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which sentences use future tense?",
    options: ["I will go tomorrow", "He goes now", "She is walking", "They will arrive soon"],
    correctAnswers: [0, 3]
  },
  {
    question: "Which are correct spellings?",
    options: ["Beautiful", "Receive", "Beutiful", "Recieve"],
    correctAnswers: [0, 1]
  },
  {
    question: "Which of these are adjectives describing personality?",
    options: ["Kind", "Brave", "Table", "Funny"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are compound sentences?",
    options: ["I was tired, but I finished my work", "She likes tea and coffee", "He runs every day", "It rained, so I stayed home"],
    correctAnswers: [0, 3]
  },
  {
    question: "Which of the following are parts of a formal letter?",
    options: ["Date", "Salutation", "Steps", "Signature"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are ways to express opinion?",
    options: ["I think", "In my opinion", "I believe", "Because I can"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are examples of cause-effect connectors?",
    options: ["Because", "Since", "Therefore", "Although"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are question tags?",
    options: ["isn’t it?", "don’t you?", "won’t they?", "and then?"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are conditional sentence starters?",
    options: ["If", "Unless", "Although", "Since"],
    correctAnswers: [0, 1]
  }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.style.display = "block";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "option";
    checkbox.value = index;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + option));
    optionsDiv.appendChild(label);
  });

  document.getElementById("right-or-wrong").innerText = "";
}

function submitAnswer() {
  const selectedCheckboxes = document.querySelectorAll('input[name="option"]:checked');
  const selectedValues = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value)).sort();
  const correctAnswers = quiz[currentQuestion].correctAnswers.slice().sort();

  const feedback = document.getElementById("right-or-wrong");

  const isCorrect = selectedValues.length === correctAnswers.length &&
    selectedValues.every((val, index) => val === correctAnswers[index]);

  // Convert correct answer indexes to text (e.g., "2", "3", "5")
  const correctText = correctAnswers.map(i => quiz[currentQuestion].options[i]).join(", ");

  if (isCorrect) {
    score++;
    feedback.innerText = `✅ Correct!`;
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Wrong!\nCorrect answer: ${correctText}`;
    feedback.style.color = "red";
  }

  // Move to next question after 1.5s
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h2>You scored ${score} out of ${quiz.length}</h2>`;
}

window.onload = showQuestion;
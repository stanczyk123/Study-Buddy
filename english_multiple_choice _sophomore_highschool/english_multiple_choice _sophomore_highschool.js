const quiz = [
  {
    question: "What is the synonym of the word 'happy'?",
    options: ["Sad", "Angry", "Glad", "Upset"],
    answer: 2
  },
  {
    question: "Which sentence is grammatically correct?",
    options: ["She don't like apples.", "She doesn't like apples.", "She isn't like apples.", "She not likes apples."],
    answer: 1
  },
  {
    question: "Choose the correct passive voice: 'They built the bridge in 1990.'",
    options: ["The bridge was built in 1990.", "The bridge built in 1990.", "They are built the bridge in 1990.", "The bridge is build in 1990."],
    answer: 0
  },
  {
    question: "Which of the following is a noun?",
    options: ["Run", "Beautiful", "Book", "Quickly"],
    answer: 2
  },
  {
    question: "Complete the sentence: 'If I were you, I ____ take the opportunity.'",
    options: ["will", "would", "was", "have"],
    answer: 1
  },
  {
    question: "Which of the following is an adjective?",
    options: ["Walk", "Quick", "Slowly", "Loudly"],
    answer: 1
  },
  {
    question: "What is the antonym of 'difficult'?",
    options: ["Hard", "Tough", "Easy", "Complicated"],
    answer: 2
  },
  {
    question: "Choose the correct question tag: 'You are tired, ____?'",
    options: ["aren't you", "isn't you", "are you", "do you"],
    answer: 0
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definetly", "Definitely", "Definitaly"],
    answer: 2
  },
  {
    question: "Which is the correct comparative form of 'good'?",
    options: ["Gooder", "More good", "Better", "Best"],
    answer: 2
  },
  {
    question: "What is the function of a preposition?",
    options: ["Connect clauses", "Describe a noun", "Show direction or location", "Express strong feelings"],
    answer: 2
  },
  {
    question: "Which sentence uses present perfect tense?",
    options: ["I eat lunch.", "I will eat lunch.", "I have eaten lunch.", "I am eating lunch."],
    answer: 2
  },
  {
    question: "What is the plural form of 'child'?",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: 2
  },
  {
    question: "Which of the following is an imperative sentence?",
    options: ["Please open the door.", "Do you like coffee?", "I am happy.", "He is reading a book."],
    answer: 0
  },
  {
    question: "Identify the correct indirect speech: 'She said, \"I am tired.\"'",
    options: ["She said she was tired.", "She said I was tired.", "She said she is tired.", "She say she tired."],
    answer: 0
  },
  {
    question: "Which word is a conjunction?",
    options: ["Under", "Because", "Quick", "Many"],
    answer: 1
  },
  {
    question: "Which one is an example of a compound sentence?",
    options: ["I like coffee.", "He is tired but he keeps working.", "Because he was tired.", "Working hard is good."],
    answer: 1
  },
  {
    question: "Which sentence is in the future tense?",
    options: ["She walks to school.", "She walked to school.", "She will walk to school.", "She walking to school."],
    answer: 2
  },
  {
    question: "What is the root word of 'unhappiness'?",
    options: ["Happy", "Unhappy", "Happiness", "None"],
    answer: 0
  },
  {
    question: "Choose the correct conditional: 'If I study hard, ____'",
    options: ["I pass the test.", "I will pass the test.", "I passed the test.", "I would pass the test."],
    answer: 1
  },
  {
    question: "Which one is NOT a type of text?",
    options: ["Narrative", "Descriptive", "Expository", "Subjunctive"],
    answer: 3
  },
  {
    question: "Choose the correct word: 'She ___ to the store yesterday.'",
    options: ["go", "goes", "gone", "went"],
    answer: 3
  },
  {
    question: "Which of the following is a synonym for 'begin'?",
    options: ["Start", "End", "Close", "Finish"],
    answer: 0
  },
  {
    question: "Choose the correct order of adjectives: 'A ____ car.'",
    options: ["red big fast", "fast red big", "big fast red", "big red fast"],
    answer: 3
  },
  {
    question: "Which modal verb expresses ability?",
    options: ["Should", "Must", "Can", "Would"],
    answer: 2
  },
  {
    question: "Which is an example of a recount text?",
    options: ["Fairy tale", "Biography", "Science article", "Manual book"],
    answer: 1
  },
  {
    question: "Complete the sentence: 'He has been working ____ morning.'",
    options: ["for", "since", "at", "in"],
    answer: 1
  },
  {
    question: "What is the synonym of 'clever'?",
    options: ["Foolish", "Smart", "Dumb", "Slow"],
    answer: 1
  },
  {
    question: "Which sentence is written in passive voice?",
    options: ["She writes a letter.", "A letter is written by her.", "She is writing a letter.", "She has written a letter."],
    answer: 1
  },
  {
    question: "What does 'plural' mean?",
    options: ["More than one", "Negative", "Adjective", "Past tense"],
    answer: 0
  },
  {
    question: "Which one is a descriptive text?",
    options: ["How to make noodles", "My lovely cat", "The story of Malin Kundang", "A news article"],
    answer: 1
  },
  {
    question: "Choose the correct negative sentence:",
    options: ["She not go to school.", "She didn’t goes to school.", "She doesn’t go to school.", "She don’t goes to school."],
    answer: 2
  },
  {
    question: "Which word is an adverb?",
    options: ["Soft", "Softly", "Softer", "Softest"],
    answer: 1
  },
  {
    question: "Which of these is a simple sentence?",
    options: ["Although I was late, I still joined.", "I read a book.", "I like tea, but he likes coffee.", "If I win, I’ll be happy."],
    answer: 1
  },
  {
    question: "Which one is the correct plural form?",
    options: ["Mans", "Men", "Manses", "Manes"],
    answer: 1
  },
  {
    question: "What is the opposite of 'early'?",
    options: ["Fast", "Quick", "Late", "Soon"],
    answer: 2
  },
  {
    question: "Which of the following is an expression of agreement?",
    options: ["I don't think so", "I agree with you", "That's wrong", "You're incorrect"],
    answer: 1
  },
  {
    question: "Which sentence uses the correct punctuation?",
    options: ["he is happy.", "He is happy", "He is happy.", "He is Happy"],
    answer: 2
  },
  {
    question: "Which is the correct reported speech of: 'He said, \"I love English.\"'?",
    options: ["He said I love English.", "He said he loved English.", "He said he love English.", "He said he loves English."],
    answer: 1
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

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(label);
    });
}

function submitAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    const feedback = document.getElementById("right-or-wrong");

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    const answerIndex = parseInt(selected.value);
    const correctIndex = quiz[currentQuestion].answer;
    const correctText = quiz[currentQuestion].options[correctIndex];

    if (answerIndex === correctIndex) {
        score++;
        feedback.innerText = "✅ Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `❌ Wrong! Correct answer: ${correctText}`;
        feedback.style.color = "red";
    }

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        feedback.innerText = ""; // clear message
        if (currentQuestion < quiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500); // 1.5 seconds pause
}


function showResult() {
    document.getElementById("question-container").style.display = "none";
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerText = `You scored ${score} out of ${quiz.length}`;
}

// Start quiz when page loads
window.onload = showQuestion;
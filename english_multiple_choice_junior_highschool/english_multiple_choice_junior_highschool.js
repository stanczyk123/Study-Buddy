const quiz = [
  {
    question: "What is the correct plural form of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 1
  },

  {
    question: "Which sentence is grammatically correct?",
    options: ["He go to school every day.", "She goes to school every day.", "They goes to school every day.", "We goes to school every day."],
    answer: 1
  },

  {
    question: "What is the opposite of 'happy'?",
    options: ["Excited", "Sad", "Proud", "Glad"],
    answer: 1
  },

  {
    question: "Choose the correct form: 'She _____ a beautiful dress.'",
    options: ["wear", "wears", "wearing", "wore"],
    answer: 1
  },

  {
    question: "Which word is a noun?",
    options: ["Run", "Quick", "Happiness", "Slow"],
    answer: 2
  },

  {
    question: "What is the past form of 'eat'?",
    options: ["Eats", "Ate", "Eating", "Eated"],
    answer: 1
  },

  {
    question: "What time is it? It's 08:45.",
    options: ["A quarter past eight", "A quarter to nine", "Eight forty-five", "Nine forty-five"],
    answer: 1
  },

  {
    question: "Which sentence uses the present continuous tense?",
    options: ["He plays football.", "He is playing football.", "He played football.", "He has played football."],
    answer: 1
  },

  {
    question: "Which word is an adjective?",
    options: ["Beauty", "Beautiful", "Beautify", "Beautifully"],
    answer: 1
  },

  {
    question: "Which is a correct invitation expression?",
    options: ["Do you go to my party?", "You must come party.", "Would you like to come to my party?", "Why not going to party?"],
    answer: 2
  },

  {
    question: "Which sentence expresses an ability?",
    options: ["I must run fast.", "I can run fast.", "I should run fast.", "I need to run fast."],
    answer: 1
  },

  {
    question: "Which sentence is a suggestion?",
    options: ["You must do your homework.", "You should study tonight.", "You will do well.", "You did great."],
    answer: 1
  },

  {
    question: "Which is a correct greeting in the morning?",
    options: ["Good night", "Good morning", "Good evening", "See you"],
    answer: 1
  },

  {
    question: "Choose the correct question tag: 'You are a student, _____?'",
    options: ["aren’t you", "are you", "do you", "did you"],
    answer: 0
  },

  {
    question: "Which word is a pronoun?",
    options: ["Table", "Run", "She", "Big"],
    answer: 2
  },

  {
    question: "Which of the following is a correct apology?",
    options: ["Sorry for being late.", "I not come.", "Come again!", "Forget it!"],
    answer: 0
  },

  {
    question: "Which preposition is correct: 'She is good _____ math'?",
    options: ["on", "in", "at", "to"],
    answer: 2
  },

  {
    question: "Which sentence describes a daily routine?",
    options: ["He is watching TV.", "He watched TV yesterday.", "He watches TV every day.", "He has watched TV."],
    answer: 2
  },

  {
    question: "Which is a correct expression for asking someone's name?",
    options: ["Who you are?", "What your name?", "What's your name?", "What are you?"],
    answer: 2
  },

  {
    question: "Which word is the past tense of 'go'?",
    options: ["Gone", "Went", "Going", "Goes"],
    answer: 1
  },

  {
    question: "Which one is an expression of congratulation?",
    options: ["Happy birthday!", "Congratulations!", "Thank you!", "Nice to meet you!"],
    answer: 1
  },

  {
    question: "Complete the sentence: 'Rani and Rina _____ to the market yesterday.'",
    options: ["go", "went", "goes", "going"],
    answer: 1
  },

  {
    question: "Choose the correct sentence.",
    options: ["He don't like apples.", "He doesn't like apples.", "He didn't likes apples.", "He not like apples."],
    answer: 1
  },

  {
    question: "What does the sign 'No Smoking' mean?",
    options: ["You can smoke.", "You must smoke.", "You must not smoke.", "Smoking is allowed."],
    answer: 2
  },

  {
    question: "What is the synonym of 'big'?",
    options: ["Small", "Tiny", "Large", "Short"],
    answer: 2
  },

  {
    question: "Which is an expression of offering help?",
    options: ["Do you help me?", "May I help you?", "You help me?", "Can you be helped?"],
    answer: 1
  },

  {
    question: "Which one is a polite expression?",
    options: ["Give me that!", "I want it now!", "Could you help me, please?", "You must do it!"],
    answer: 2
  },

  {
    question: "Choose the correct response: 'Thank you.'",
    options: ["Yes.", "No.", "You're welcome.", "Okay."],
    answer: 2
  },

  {
    question: "What is the antonym of 'cold'?",
    options: ["Cool", "Hot", "Warm", "Freeze"],
    answer: 1
  },

  {
    question: "Choose the correct form: 'The cat is _____ the table.'",
    options: ["on", "in", "at", "by"],
    answer: 0
  },

  {
    question: "Which one is a fruit?",
    options: ["Potato", "Tomato", "Carrot", "Mango"],
    answer: 3
  },

  {
    question: "Which sentence is in the future tense?",
    options: ["I will study tomorrow.", "I studied yesterday.", "I am studying now.", "I study every day."],
    answer: 0
  },

  {
    question: "Choose the correct comparison: 'This book is _____ than that one.'",
    options: ["more interesting", "most interesting", "interesting", "interested"],
    answer: 0
  },

  {
    question: "What is the superlative form of 'good'?",
    options: ["Gooder", "More good", "Best", "Better"],
    answer: 2
  },

  {
    question: "Which of the following is a part of the body?",
    options: ["Jump", "Hand", "Write", "Sing"],
    answer: 1
  },

  {
    question: "Which of the following is a mode of transportation?",
    options: ["Book", "Plane", "Pen", "Phone"],
    answer: 1
  },

  {
    question: "What is the correct response to 'How are you?'",
    options: ["I’m fine, thank you.", "My name is John.", "Yes, I do.", "See you."],
    answer: 0
  },

  {
    question: "Choose the correct sentence.",
    options: ["There is three cats.", "There are three cats.", "There is three cat.", "There are a cat."],
    answer: 1
  },

  {
    question: "What is the capital of Indonesia?",
    options: ["Bali", "Jakarta", "Surabaya", "Bandung"],
    answer: 1
  },

  {
    question: "Which sentence expresses permission?",
    options: ["You must go.", "You should go.", "You may go.", "You can’t go."],
    answer: 2
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
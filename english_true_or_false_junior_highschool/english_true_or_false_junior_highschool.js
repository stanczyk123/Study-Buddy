const quiz = [
  {
    question: "The word 'beautiful' is an adjective.",
    answer: true
  },
  {
    question: "The past tense of 'go' is 'went'.",
    answer: true
  },
  {
    question: "‘He don’t like apples’ is grammatically correct.",
    answer: false
  },
  {
    question: "‘They are playing football’ is in present continuous tense.",
    answer: true
  },
  {
    question: "‘Books’ is a singular noun.",
    answer: false
  },
  {
    question: "‘Am’, ‘is’, and ‘are’ are examples of be-verbs.",
    answer: true
  },
  {
    question: "‘Fastly’ is the correct adverb form of ‘fast’.",
    answer: false
  },
  {
    question: "‘She is a nurse.’ is a nominal sentence.",
    answer: true
  },
  {
    question: "‘You was late’ is correct grammar.",
    answer: false
  },
  {
    question: "The opposite of ‘cold’ is ‘hot’.",
    answer: true
  },
  {
    question: "The word ‘jump’ is a verb.",
    answer: true
  },
  {
    question: "The word ‘quickly’ is an adjective.",
    answer: false
  },
  {
    question: "‘How old are you?’ is asking about age.",
    answer: true
  },
  {
    question: "‘My name are Sarah.’ is a correct sentence.",
    answer: false
  },
  {
    question: "‘He is my friend’ is a statement.",
    answer: true
  },
  {
    question: "‘What time is it?’ is an expression to offer something.",
    answer: false
  },
  {
    question: "‘Can I help you?’ is an offering expression.",
    answer: true
  },
  {
    question: "‘Would you like some tea?’ is a greeting.",
    answer: false
  },
  {
    question: "‘I can swim’ means having ability.",
    answer: true
  },
  {
    question: "‘Where are you go?’ is grammatically correct.",
    answer: false
  },
  {
    question: "‘I was born in Jakarta.’ is a past tense sentence.",
    answer: true
  },
  {
    question: "‘She don’t likes cake.’ is grammatically correct.",
    answer: false
  },
  {
    question: "The word ‘they’ is a pronoun.",
    answer: true
  },
  {
    question: "‘Happy’ is a verb.",
    answer: false
  },
  {
    question: "‘Do you like music?’ is a yes-no question.",
    answer: true
  },
  {
    question: "‘Where do you live?’ is asking about location.",
    answer: true
  },
  {
    question: "‘Good evening’ is used to say goodbye.",
    answer: false
  },
  {
    question: "‘Thank you’ is used to express gratitude.",
    answer: true
  },
  {
    question: "‘Don’t be late!’ is a command sentence.",
    answer: true
  },
  {
    question: "‘Excuse me’ is used to get someone’s attention.",
    answer: true
  },
  {
    question: "‘He go to school’ is a correct sentence.",
    answer: false
  },
  {
    question: "‘Could you help me?’ is a polite request.",
    answer: true
  },
  {
    question: "‘Nice to meet you’ is used when saying goodbye.",
    answer: false
  },
  {
    question: "‘What is your hobby?’ is asking about interest.",
    answer: true
  },
  {
    question: "‘I doesn’t like it’ is grammatically correct.",
    answer: false
  },
  {
    question: "‘Tall’, ‘short’, and ‘fat’ are all adjectives.",
    answer: true
  },
  {
    question: "‘No smoking’ means you can smoke here.",
    answer: false
  },
  {
    question: "‘How are you?’ is a greeting.",
    answer: true
  },
  {
    question: "‘Playing’ is the past form of ‘play’.",
    answer: false
  },
  {
    question: "‘She has a new bike’ is a possessive sentence.",
    answer: true
  }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerText = q.question;

    // Clear selected radio buttons
    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach(radio => radio.checked = false);
}

function submitAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
    const feedbackDiv = document.getElementById("result");
    feedbackDiv.style.display = "block";

    if (!selectedRadio) {
        alert("Please select True or False.");
        return;
    }

    const selectedValue = selectedRadio.value === "true";
    const correctAnswer = quiz[currentQuestion].answer;

    if (selectedValue === correctAnswer) {
        score++;
        feedbackDiv.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
        feedbackDiv.innerHTML = `<p style="color: red;">❌ Wrong!<br>The correct answer is: <strong>${correctAnswer ? "True" : "False"}</strong></p>`;
    }

    setTimeout(() => {
        feedbackDiv.style.display = "none";
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }, 1500);
}

function showFinalResult() {
    document.getElementById("question-container").style.display = "none";
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<h2>You got ${score} out of ${quiz.length} questions right!</h2>`;
}

window.onload = showQuestion;
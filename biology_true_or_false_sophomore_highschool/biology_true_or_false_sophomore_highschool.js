const quiz = [
  {
    question: "All living organisms are made up of cells.",
    answer: true
  },

  {
    question: "Mitochondria are responsible for photosynthesis.",
    answer: false
  },

  {
    question: "The nucleus controls cell activities.",
    answer: true
  },

  {
    question: "Xylem transports food in plants.",
    answer: false
  },

  {
    question: "DNA carries genetic information.",
    answer: true
  },

  {
    question: "Red blood cells are responsible for immunity.",
    answer: false
  },

  {
    question: "The heart is part of the circulatory system.",
    answer: true
  },

  {
    question: "Photosynthesis requires carbon dioxide and sunlight.",
    answer: true
  },

  {
    question: "All fungi can perform photosynthesis.",
    answer: false
  },

  {
    question: "Viruses are considered living organisms.",
    answer: false
  },

  {
    question: "The smallest unit of life is a cell.",
    answer: true
  },

  {
    question: "White blood cells help defend the body from infection.",
    answer: true
  },

  {
    question: "The liver produces insulin.",
    answer: false
  },

  {
    question: "Reptiles are cold-blooded animals.",
    answer: true
  },

  {
    question: "The female reproductive cell is called ovum.",
    answer: true
  },

  {
    question: "Bacteria can reproduce sexually.",
    answer: false
  },

  {
    question: "The human respiratory system includes the lungs and trachea.",
    answer: true
  },

  {
    question: "All vertebrates have backbones.",
    answer: true
  },

  {
    question: "Cilia are used for locomotion in some unicellular organisms.",
    answer: true
  },

  {
    question: "The kidney filters carbon dioxide from the blood.",
    answer: false
  },

  {
    question: "The pancreas produces digestive enzymes.",
    answer: true
  },

  {
    question: "Fungi reproduce only by spores.",
    answer: false
  },

  {
    question: "Chloroplasts are found only in animal cells.",
    answer: false
  },

  {
    question: "Protists are unicellular organisms.",
    answer: true
  },

  {
    question: "The skin helps regulate body temperature.",
    answer: true
  },

  {
    question: "The small intestine is where most nutrient absorption occurs.",
    answer: true
  },

  {
    question: "Asexual reproduction requires two parents.",
    answer: false
  },

  {
    question: "Plants exchange gases through stomata.",
    answer: true
  },

  {
    question: "Herbivores eat both plants and animals.",
    answer: false
  },

  {
    question: "Lymph nodes are part of the immune system.",
    answer: true
  },

  {
    question: "The pulmonary artery carries oxygenated blood.",
    answer: false
  },

  {
    question: "The cerebrum controls voluntary actions.",
    answer: true
  },

  {
    question: "Mammals lay eggs.",
    answer: false
  },

  {
    question: "Transpiration occurs in animal cells.",
    answer: false
  },

  {
    question: "All animals have a nervous system.",
    answer: false
  },

  {
    question: "Enzymes speed up chemical reactions.",
    answer: true
  },

  {
    question: "Cytoplasm is the fluid inside the nucleus.",
    answer: false
  },

  {
    question: "Ecosystems include both living and non-living components.",
    answer: true
  },

  {
    question: "Fertilization in humans typically occurs in the uterus.",
    answer: false
  },

  {
    question: "Lichens are a symbiotic relationship between fungi and algae.",
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
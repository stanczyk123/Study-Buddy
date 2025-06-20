const quiz = [
  {
    question: "Mitochondria are known as the powerhouse of the cell.",
    answer: true
  },
  {
    question: "Photosynthesis takes place in the mitochondria.",
    answer: false
  },
  {
    question: "DNA is a double helix molecule.",
    answer: true
  },
  {
    question: "Red blood cells carry oxygen using hemoglobin.",
    answer: true
  },
  {
    question: "Chlorophyll is found in animal cells.",
    answer: false
  },
  {
    question: "The smallest unit of life is the cell.",
    answer: true
  },
  {
    question: "Bacteria are classified as eukaryotic organisms.",
    answer: false
  },
  {
    question: "The human body has 206 bones.",
    answer: true
  },
  {
    question: "All enzymes are proteins.",
    answer: true
  },
  {
    question: "Meiosis results in four genetically identical cells.",
    answer: false
  },
  {
    question: "The pulmonary vein carries oxygen-rich blood.",
    answer: true
  },
  {
    question: "The large intestine is responsible for nutrient absorption.",
    answer: false
  },
  {
    question: "Insulin is produced by the pancreas.",
    answer: true
  },
  {
    question: "The function of xylem is to transport water in plants.",
    answer: true
  },
  {
    question: "All living organisms reproduce sexually.",
    answer: false
  },
  {
    question: "The cerebellum controls balance and coordination.",
    answer: true
  },
  {
    question: "Fungi can perform photosynthesis.",
    answer: false
  },
  {
    question: "The human heart has four chambers.",
    answer: true
  },
  {
    question: "Proteins are made up of amino acids.",
    answer: true
  },
  {
    question: "Viruses are considered living organisms.",
    answer: false
  },
  {
    question: "The kidney filters blood and forms urine.",
    answer: true
  },
  {
    question: "Ecosystems contain both biotic and abiotic components.",
    answer: true
  },
  {
    question: "The cell wall is only found in animal cells.",
    answer: false
  },
  {
    question: "Cytoplasm is the fluid inside the cell where organelles are suspended.",
    answer: true
  },
  {
    question: "Heredity is the passing of traits from parents to offspring.",
    answer: true
  },
  {
    question: "The dominant allele always masks the recessive allele.",
    answer: true
  },
  {
    question: "A mutation always causes disease.",
    answer: false
  },
  {
    question: "The phloem transports food in plants.",
    answer: true
  },
  {
    question: "Bones produce blood cells in the bone marrow.",
    answer: true
  },
  {
    question: "A heterotroph can make its own food.",
    answer: false
  },
  {
    question: "The diaphragm helps in breathing.",
    answer: true
  },
  {
    question: "The main product of photosynthesis is oxygen.",
    answer: false  // It's glucose
  },
  {
    question: "Lipids are important for storing energy.",
    answer: true
  },
  {
    question: "The nucleus contains the cell’s genetic material.",
    answer: true
  },
  {
    question: "The function of the liver is to pump blood.",
    answer: false
  },
  {
    question: "Natural selection is a mechanism of evolution.",
    answer: true
  },
  {
    question: "Respiration in cells always requires oxygen.",
    answer: false
  },
  {
    question: "The human body has more than one type of muscle tissue.",
    answer: true
  },
  {
    question: "Genetic engineering involves altering the DNA of organisms.",
    answer: true
  },
  {
    question: "Biotic factors include sunlight and temperature.",
    answer: false
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
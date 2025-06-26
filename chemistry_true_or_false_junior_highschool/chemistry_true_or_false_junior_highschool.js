const chemistryTrueFalseQuiz = [
  {
    question: "Water is a compound composed of hydrogen and oxygen.",
    answer: true
  },
  {
    question: "Air is a pure substance.",
    answer: false
  },
  {
    question: "Melting ice is a physical change.",
    answer: true
  },
  {
    question: "Rusting of iron is a physical change.",
    answer: false
  },
  {
    question: "Atoms are the smallest particles of an element.",
    answer: true
  },
  {
    question: "Oxygen is a metal.",
    answer: false
  },
  {
    question: "Acids turn blue litmus paper red.",
    answer: true
  },
  {
    question: "Bases have a sour taste.",
    answer: false
  },
  {
    question: "Saltwater is a homogeneous mixture.",
    answer: true
  },
  {
    question: "The boiling point of water is 100°C at sea level.",
    answer: true
  },
  {
    question: "Carbon dioxide is essential for photosynthesis.",
    answer: true
  },
  {
    question: "Mercury is a liquid metal at room temperature.",
    answer: true
  },
  {
    question: "Every molecule of water has two hydrogen atoms.",
    answer: true
  },
  {
    question: "Filtration is used to separate a solid from a liquid.",
    answer: true
  },
  {
    question: "Litmus paper is used to measure temperature.",
    answer: false
  },
  {
    question: "Evaporation involves changing a liquid into a gas.",
    answer: true
  },
  {
    question: "Oil and water mix completely.",
    answer: false
  },
  {
    question: "A molecule is formed when two or more atoms bond together.",
    answer: true
  },
  {
    question: "Hydrochloric acid (HCl) is a base.",
    answer: false
  },
  {
    question: "Atoms of the same element can have different numbers of neutrons.",
    answer: true
  },
  {
    question: "The periodic table arranges elements by increasing atomic number.",
    answer: true
  },
  {
    question: "Aluminum is a good conductor of electricity.",
    answer: true
  },
  {
    question: "Distillation separates mixtures based on melting point.",
    answer: false
  },
  {
    question: "All metals are magnetic.",
    answer: false
  },
  {
    question: "Water can exist as a solid, liquid, or gas.",
    answer: true
  },
  {
    question: "Table salt is also known as sodium chloride.",
    answer: true
  },
  {
    question: "An acid has a pH greater than 7.",
    answer: false
  },
  {
    question: "Copper is an example of a non-metal.",
    answer: false
  },
  {
    question: "Physical changes do not produce new substances.",
    answer: true
  },
  {
    question: "Boiling water is a chemical change.",
    answer: false
  },
  {
    question: "Hydrogen is the lightest element.",
    answer: true
  },
  {
    question: "Oxygen is needed for combustion to occur.",
    answer: true
  },
  {
    question: "Solutions are always colored liquids.",
    answer: false
  },
  {
    question: "In a chemical reaction, mass is conserved.",
    answer: true
  },
  {
    question: "A mixture always has a fixed composition.",
    answer: false
  },
  {
    question: "H₂O is an example of a chemical formula.",
    answer: true
  },
  {
    question: "Neutrons are negatively charged.",
    answer: false
  },
  {
    question: "Carbon dioxide turns limewater milky.",
    answer: true
  },
  {
    question: "The nucleus of an atom contains protons and neutrons.",
    answer: true
  },
  {
    question: "Soap is produced by the reaction between an acid and a base.",
    answer: false
  }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = chemistryTrueFalseQuiz[currentQuestion];
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
    const correctAnswer = chemistryTrueFalseQuiz[currentQuestion].answer;

    if (selectedValue === correctAnswer) {
        score++;
        feedbackDiv.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
        feedbackDiv.innerHTML = `<p style="color: red;">❌ Wrong!<br>The correct answer is: <strong>${correctAnswer ? "True" : "False"}</strong></p>`;
    }

    setTimeout(() => {
        feedbackDiv.style.display = "none";
        currentQuestion++;
        if (currentQuestion < chemistryTrueFalseQuiz.length) {
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
    resultDiv.innerHTML = `<h2>You got ${score} out of ${chemistryTrueFalseQuiz.length} questions right!</h2>`;
}

window.onload = showQuestion;
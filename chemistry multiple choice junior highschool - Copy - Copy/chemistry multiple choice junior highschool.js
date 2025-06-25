const chemistryQuiz = [
  {
    question: "Which of the following is a chemical change?",
    options: ["Melting ice", "Evaporation", "Burning wood", "Boiling water"],
    answer: 2
  },
  {
    question: "The smallest unit of an element is called a:",
    options: ["Atom", "Molecule", "Proton", "Electron"],
    answer: 0
  },
  {
    question: "What is the symbol for the element oxygen?",
    options: ["O", "Ox", "Oy", "Om"],
    answer: 0
  },
  {
    question: "Which of the following is a mixture?",
    options: ["Salt", "Sugar", "Air", "Water"],
    answer: 2
  },
  {
    question: "Which state of matter has a fixed shape and volume?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 0
  },
  {
    question: "Water is made of which two elements?",
    options: ["Hydrogen and Oxygen", "Hydrogen and Carbon", "Oxygen and Nitrogen", "Carbon and Oxygen"],
    answer: 0
  },
  {
    question: "Which of these is a metal?",
    options: ["Oxygen", "Nitrogen", "Iron", "Carbon"],
    answer: 2
  },
  {
    question: "Which of the following is an acid?",
    options: ["HCl", "NaOH", "CaCO₃", "NaCl"],
    answer: 0
  },
  {
    question: "Which of the following is a base?",
    options: ["H₂SO₄", "NaCl", "NaOH", "HCl"],
    answer: 2
  },
  {
    question: "Which of the following is a neutral substance?",
    options: ["HCl", "NaOH", "Water", "Vinegar"],
    answer: 2
  },
  {
    question: "Which of the following is used to test for acids and bases?",
    options: ["Thermometer", "Litmus paper", "Barometer", "Voltmeter"],
    answer: 1
  },
  {
    question: "What color does blue litmus paper turn in acid?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a physical property?",
    options: ["Color", "Boiling point", "Melting point", "Reactivity with acid"],
    answer: 3
  },
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    answer: 2
  },
  {
    question: "Which of the following is a compound?",
    options: ["Oxygen", "Water", "Iron", "Gold"],
    answer: 1
  },
  {
    question: "Which method is best for separating sand and water?",
    options: ["Distillation", "Filtration", "Evaporation", "Condensation"],
    answer: 1
  },
  {
    question: "Which of these elements is liquid at room temperature?",
    options: ["Mercury", "Oxygen", "Iron", "Carbon"],
    answer: 0
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    answer: 2
  },
  {
    question: "The atomic number of an element tells us the number of:",
    options: ["Electrons", "Protons", "Neutrons", "Atoms"],
    answer: 1
  },
  {
    question: "Which of the following is a good conductor of electricity?",
    options: ["Wood", "Plastic", "Copper", "Rubber"],
    answer: 2
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    answer: 0
  },
  {
    question: "Which of the following is a physical change?",
    options: ["Burning", "Rusting", "Freezing", "Baking"],
    answer: 2
  },
  {
    question: "Which of the following is an element?",
    options: ["Water", "Air", "Hydrogen", "Salt"],
    answer: 2
  },
  {
    question: "Which of these is a non-metal?",
    options: ["Aluminum", "Iron", "Sulfur", "Zinc"],
    answer: 2
  },
  {
    question: "What happens when iron reacts with oxygen and water?",
    options: ["Combustion", "Corrosion", "Evaporation", "Dissolution"],
    answer: 1
  },
  {
    question: "Which of the following substances is soluble in water?",
    options: ["Oil", "Salt", "Sand", "Plastic"],
    answer: 1
  },
  {
    question: "What is the main component of air?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    answer: 2
  },
  {
    question: "Which of these is NOT a chemical change?",
    options: ["Burning", "Rusting", "Melting", "Cooking"],
    answer: 2
  },
  {
    question: "Which one is a characteristic of a gas?",
    options: ["Fixed shape", "Fixed volume", "Easily compressible", "High density"],
    answer: 2
  },
  {
    question: "Which one is an indicator of chemical reaction?",
    options: ["Change in color", "Change in size", "Change in texture", "Change in taste"],
    answer: 0
  },
  {
    question: "How many hydrogen atoms are in H₂O?",
    options: ["1", "2", "3", "0"],
    answer: 1
  },
  {
    question: "Which of the following is used in making soap?",
    options: ["Salt", "Base", "Acid", "Water"],
    answer: 1
  },
  {
    question: "Which element is commonly used in light bulb filaments?",
    options: ["Iron", "Copper", "Tungsten", "Aluminum"],
    answer: 2
  },
  {
    question: "The process of water changing into vapor is called:",
    options: ["Condensation", "Evaporation", "Freezing", "Melting"],
    answer: 1
  },
  {
    question: "Which gas turns limewater milky?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    answer: 1
  },
  {
    question: "Which of the following is a homogeneous mixture?",
    options: ["Salt water", "Sand and water", "Oil and water", "Soil"],
    answer: 0
  },
  {
    question: "Which process is used to get salt from seawater?",
    options: ["Filtration", "Evaporation", "Condensation", "Distillation"],
    answer: 1
  },
  {
    question: "Which of the following substances is flammable?",
    options: ["Water", "Gasoline", "Sand", "Salt"],
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Gd", "Go", "Au", "Ag"],
    answer: 2
  },
  {
    question: "What is formed when an acid reacts with a base?",
    options: ["Salt and water", "Only salt", "Only water", "Gas"],
    answer: 0
  }
];



let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = chemistryQuiz[currentQuestion];
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
    const correctIndex = chemistryQuiz[currentQuestion].answer;
    const correctText = chemistryQuiz[currentQuestion].options[correctIndex];

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
        if (currentQuestion < chemistryQuiz.length) {
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
    resultDiv.innerText = `You scored ${score} out of ${chemistryQuiz.length}`;
}

// Start quiz when page loads
window.onload = showQuestion;
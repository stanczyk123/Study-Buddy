const chemistryQuiz = [
  {
    question: "Which of the following is a compound?",
    options: ["Air", "Iron", "Water", "Oxygen"],
    answer: 2
  },

  {
    question: "What is the relative atomic mass of carbon (C)?",
    options: ["12", "6", "16", "14"],
    answer: 0
  },

  {
    question: "Which of these is an element?",
    options: ["NaCl", "H2O", "O2", "CO2"],
    answer: 2
  },

  {
    question: "What is the chemical formula of sulfuric acid?",
    options: ["HCl", "H2SO4", "HNO3", "H2CO3"],
    answer: 1
  },

  {
    question: "Which of the following is an example of a physical change?",
    options: ["Burning wood", "Melting ice", "Rusting iron", "Cooking egg"],
    answer: 1
  },

  {
    question: "Which subatomic particle has a positive charge?",
    options: ["Proton", "Electron", "Neutron", "Ion"],
    answer: 0
  },

  {
    question: "Which gas is produced when magnesium reacts with hydrochloric acid?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    answer: 2
  },

  {
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "1"],
    answer: 1
  },

  {
    question: "Which compound is a base?",
    options: ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    answer: 1
  },

  {
    question: "What is the name of the compound NaCl?",
    options: ["Sodium nitrate", "Sodium chloride", "Sodium carbonate", "Sodium sulfate"],
    answer: 1
  },

  {
    question: "Which process involves a chemical change?",
    options: ["Freezing water", "Boiling alcohol", "Burning paper", "Melting wax"],
    answer: 2
  },

  {
    question: "What type of bond is formed between sodium and chlorine?",
    options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    answer: 1
  },

  {
    question: "Which one is an indicator?",
    options: ["Sugar", "Salt", "Litmus", "Water"],
    answer: 2
  },

  {
    question: "What is the atomic number of oxygen?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },

  {
    question: "Which of the following is an acid?",
    options: ["NaOH", "Ca(OH)2", "HCl", "NH3"],
    answer: 2
  },

  {
    question: "What is the name of HNO3?",
    options: ["Nitrous acid", "Nitric acid", "Hydrochloric acid", "Carbonic acid"],
    answer: 1
  },

  {
    question: "Which metal is the most reactive?",
    options: ["Gold", "Silver", "Potassium", "Copper"],
    answer: 2
  },

  {
    question: "What is the function of a catalyst?",
    options: ["Changes the product", "Slows down the reaction", "Speeds up the reaction", "Changes color"],
    answer: 2
  },

  {
    question: "What is the symbol for iron?",
    options: ["Ir", "Fe", "In", "Fr"],
    answer: 1
  },

  {
    question: "Which is a characteristic of metals?",
    options: ["Brittle", "Dull", "Good conductor", "Poor conductor"],
    answer: 2
  },

  {
    question: "Which of these is a diatomic molecule?",
    options: ["O2", "Na", "Cl", "C"],
    answer: 0
  },

  {
    question: "What is formed when an acid reacts with a base?",
    options: ["Salt and gas", "Salt and water", "Water and oxygen", "Salt only"],
    answer: 1
  },

  {
    question: "Which of the following is not a mixture?",
    options: ["Air", "Saltwater", "Distilled water", "Soil"],
    answer: 2
  },

  {
    question: "What is the basic unit of matter?",
    options: ["Element", "Atom", "Molecule", "Compound"],
    answer: 1
  },

  {
    question: "Which of these is a noble gas?",
    options: ["Oxygen", "Chlorine", "Argon", "Hydrogen"],
    answer: 2
  },

  {
    question: "Which of the following elements is found in organic compounds?",
    options: ["Iron", "Carbon", "Zinc", "Sodium"],
    answer: 1
  },

  {
    question: "Which of these is an example of a homogeneous mixture?",
    options: ["Sand and water", "Oil and water", "Salt and water", "Soil"],
    answer: 2
  },

  {
    question: "Which is the correct chemical symbol for potassium?",
    options: ["P", "K", "Pt", "Po"],
    answer: 1
  },

  {
    question: "What is the state of matter with definite shape and volume?",
    options: ["Gas", "Liquid", "Solid", "Plasma"],
    answer: 2
  },

  {
    question: "Which of the following is a covalent compound?",
    options: ["NaCl", "HCl", "CO2", "MgO"],
    answer: 2
  },

  {
    question: "What color does blue litmus paper turn in acid?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: 0
  },

  {
    question: "Which of these is a non-metal?",
    options: ["Sodium", "Magnesium", "Chlorine", "Aluminum"],
    answer: 2
  },

  {
    question: "What happens to atoms during a chemical reaction?",
    options: ["They disappear", "They change identity", "They rearrange", "They melt"],
    answer: 2
  },

  {
    question: "What is the boiling point of water at 1 atm?",
    options: ["100°C", "90°C", "80°C", "110°C"],
    answer: 0
  },

  {
    question: "Which of the following is an alkali metal?",
    options: ["Calcium", "Magnesium", "Potassium", "Iron"],
    answer: 2
  },

  {
    question: "Which of these changes is exothermic?",
    options: ["Boiling", "Condensation", "Melting", "Evaporation"],
    answer: 1
  },

  {
    question: "What is Avogadro’s number approximately?",
    options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁵"],
    answer: 1
  },

  {
    question: "Which gas turns limewater milky?",
    options: ["O2", "CO2", "H2", "N2"],
    answer: 1
  },

  {
    question: "Which of the following are indicators?",
    options: ["Litmus", "Phenolphthalein", "Methyl orange", "All of them"],
    answer: 3
  },

  {
    question: "What kind of reaction is: A + B → AB?",
    options: ["Decomposition", "Combustion", "Synthesis", "Neutralization"],
    answer: 2
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
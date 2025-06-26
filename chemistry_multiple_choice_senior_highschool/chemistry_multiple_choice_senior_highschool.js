const chemistryQuiz = [
  {
    question: "Which of the following is a chemical change?",
    options: ["Melting ice", "Boiling water", "Burning paper", "Evaporating alcohol"],
    answer: 2
  },
  {
    question: "What is the pH of a neutral solution at 25°C?",
    options: ["0", "7", "14", "1"],
    answer: 1
  },
  {
    question: "Which subatomic particles are found in the nucleus?",
    options: ["Electrons only", "Protons and neutrons", "Neutrons and electrons", "Protons and electrons"],
    answer: 1
  },
  {
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["O2", "N2", "CO2", "H2"],
    answer: 2
  },
  {
    question: "What is the oxidation number of sulfur in H2SO4?",
    options: ["+2", "+4", "+6", "-2"],
    answer: 2
  },
  {
    question: "What is the correct electron configuration of Na (atomic number 11)?",
    options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3p¹", "1s² 2s² 2p⁶", "1s² 2s² 2p⁵ 3s²"],
    answer: 0
  },
  {
    question: "Which element has the highest electronegativity?",
    options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    answer: 0
  },
  {
    question: "Avogadro’s number is approximately:",
    options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁰"],
    answer: 1
  },
  {
    question: "Which compound is ionic?",
    options: ["H2O", "CO2", "NaCl", "CH4"],
    answer: 2
  },
  {
    question: "Which of these is an example of a base?",
    options: ["HCl", "CH3COOH", "NaOH", "H2SO4"],
    answer: 2
  },
  {
    question: "Which of the following is a strong acid?",
    options: ["CH3COOH", "H2CO3", "HCl", "HNO2"],
    answer: 2
  },
  {
    question: "Which process separates solid from liquid?",
    options: ["Evaporation", "Filtration", "Distillation", "Chromatography"],
    answer: 1
  },
  {
    question: "Which is the correct name for NaNO3?",
    options: ["Sodium nitrate", "Sodium nitrite", "Sodium sulfate", "Sodium oxide"],
    answer: 0
  },
  {
    question: "The number of neutrons in ⁴⁰Ca is:",
    options: ["20", "18", "22", "40"],
    answer: 2
  },
  {
    question: "Which of the following is a redox reaction?",
    options: [
      "HCl + NaOH → NaCl + H2O",
      "2H2 + O2 → 2H2O",
      "CaCO3 → CaO + CO2",
      "AgNO3 + NaCl → AgCl + NaNO3"
    ],
    answer: 1
  },
  {
    question: "The ideal gas law is:",
    options: [
      "PV = nRT",
      "P = n/VRT",
      "V = nRT/P",
      "P + V = nRT"
    ],
    answer: 0
  },
  {
    question: "Which of the following substances is a molecular compound?",
    options: ["NaCl", "KBr", "CO2", "MgO"],
    answer: 2
  },
  {
    question: "Which of these factors affects reaction rate?",
    options: [
      "Temperature",
      "Concentration",
      "Catalyst",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "The molar mass of H2SO4 is:",
    options: ["98 g/mol", "94 g/mol", "100 g/mol", "96 g/mol"],
    answer: 0
  },
  {
    question: "In electrolysis of water, what gases are produced?",
    options: [
      "Hydrogen and oxygen",
      "Hydrogen and nitrogen",
      "Oxygen and nitrogen",
      "Hydrogen only"
    ],
    answer: 0
  },
  {
    question: "Which of these is an alloy?",
    options: ["Iron", "Brass", "Aluminum", "Copper"],
    answer: 1
  },
  {
    question: "Which is a noble gas?",
    options: ["O2", "N2", "He", "CO2"],
    answer: 2
  },
  {
    question: "What happens to pH when HCl is added to water?",
    options: ["Increases", "Decreases", "Remains neutral", "Becomes basic"],
    answer: 1
  },
  {
    question: "What color does litmus paper turn in acid?",
    options: ["Red", "Blue", "Green", "Colorless"],
    answer: 0
  },
  {
    question: "Which type of bond is formed between metal and non-metal?",
    options: ["Covalent", "Ionic", "Hydrogen", "Van der Waals"],
    answer: 1
  },
  {
    question: "Which element is found in all organic compounds?",
    options: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
    answer: 1
  },
  {
    question: "Which gas is evolved when zinc reacts with hydrochloric acid?",
    options: ["O2", "CO2", "H2", "Cl2"],
    answer: 2
  },
  {
    question: "The atomic number is the number of:",
    options: ["Protons", "Neutrons", "Electrons", "Neutrons + Protons"],
    answer: 0
  },
  {
    question: "Which state of matter has a fixed shape and volume?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 0
  },
  {
    question: "Which of the following is amphoteric?",
    options: ["NaOH", "HCl", "H2O", "Al(OH)3"],
    answer: 3
  },
  {
    question: "The number of moles in 18g of H2O is:",
    options: ["1 mol", "2 mol", "0.5 mol", "3 mol"],
    answer: 0
  },
  {
    question: "Which of the following is an exothermic process?",
    options: ["Boiling", "Condensation", "Melting", "Sublimation"],
    answer: 1
  },
  {
    question: "What type of reaction is: A + B → AB?",
    options: ["Decomposition", "Combustion", "Synthesis", "Single replacement"],
    answer: 2
  },
  {
    question: "Which acid is present in vinegar?",
    options: ["Citric acid", "Acetic acid", "Sulfuric acid", "Hydrochloric acid"],
    answer: 1
  },
  {
    question: "Which is not a property of metals?",
    options: ["Malleable", "Ductile", "Good conductor", "Brittle"],
    answer: 3
  },
  {
    question: "Which of these shows the correct order of reactivity?",
    options: ["K > Na > Mg", "Na > K > Mg", "Mg > K > Na", "K > Mg > Na"],
    answer: 0
  },
  {
    question: "Which process turns gas directly to solid?",
    options: ["Sublimation", "Deposition", "Condensation", "Melting"],
    answer: 1
  },
  {
    question: "Which element is used in nuclear fission?",
    options: ["Hydrogen", "Carbon", "Uranium", "Chlorine"],
    answer: 2
  },
  {
    question: "Which is a halogen?",
    options: ["Oxygen", "Nitrogen", "Chlorine", "Sodium"],
    answer: 2
  },
  {
    question: "What is the main component of natural gas?",
    options: ["Butane", "Methane", "Propane", "Ethane"],
    answer: 1
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
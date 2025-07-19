const quiz = [
  {
    question: "Which of the following are characteristics of living organisms?",
    options: ["Growth", "Reproduction", "Breathing", "Rusting"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which organs are part of the human digestive system?",
    options: ["Stomach", "Heart", "Intestines", "Esophagus"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which of the following are examples of vertebrates?",
    options: ["Frog", "Bird", "Earthworm", "Fish"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which parts are found in a plant cell but not in an animal cell?",
    options: ["Chloroplast", "Cell wall", "Vacuole", "Nucleus"],
    correctAnswers: [0, 1]
  },
  {
    question: "What are the functions of the human skeleton?",
    options: ["Support the body", "Pump blood", "Protect organs", "Help movement"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which of the following are excretory organs in humans?",
    options: ["Lungs", "Kidneys", "Skin", "Liver"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these animals undergo metamorphosis?",
    options: ["Frog", "Butterfly", "Cat", "Mosquito"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are functions of roots in plants?",
    options: ["Absorb water", "Anchor the plant", "Make food", "Store food"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are producers in a food chain?",
    options: ["Grass", "Algae", "Cow", "Tree"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are common methods of reproduction in plants?",
    options: ["Seeds", "Cuttings", "Budding", "Fragmentation"],
    correctAnswers: [0, 1]
  },
  {
    question: "Which of the following are organs in the respiratory system?",
    options: ["Lungs", "Nose", "Trachea", "Liver"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are infectious diseases?",
    options: ["Flu", "Tetanus", "Diabetes", "Tuberculosis"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "What are functions of the skin?",
    options: ["Protection", "Temperature control", "Digestion", "Sense of touch"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are plant hormones?",
    options: ["Auxin", "Gibberellin", "Adrenaline", "Ethylene"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following can cause pollution?",
    options: ["Factory smoke", "Deforestation", "Composting", "Plastic waste"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are renewable resources?",
    options: ["Solar energy", "Wind", "Petroleum", "Water"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "What do white blood cells do?",
    options: ["Fight infections", "Transport oxygen", "Produce antibodies", "Clot blood"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which of the following are found in both plant and animal cells?",
    options: ["Cell membrane", "Nucleus", "Chloroplast", "Cytoplasm"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "What are examples of carnivores?",
    options: ["Tiger", "Eagle", "Cow", "Lion"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are functions of the circulatory system?",
    options: ["Transport nutrients", "Pump blood", "Remove waste", "Digest food"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are sexually transmitted infections (STIs)?",
    options: ["HIV/AIDS", "Syphilis", "Malaria", "Gonorrhea"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following help in pollination?",
    options: ["Wind", "Bees", "Butterflies", "Soil"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are non-renewable resources?",
    options: ["Coal", "Oil", "Natural gas", "Sunlight"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following organs are part of the urinary system?",
    options: ["Kidneys", "Bladder", "Ureters", "Liver"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these diseases are caused by bacteria?",
    options: ["Tuberculosis", "Cholera", "Flu", "Typhoid"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which body parts are involved in excretion?",
    options: ["Lungs", "Skin", "Kidneys", "Intestines"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which animals are cold-blooded?",
    options: ["Frog", "Snake", "Bird", "Lizard"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which characteristics apply to mammals?",
    options: ["Have fur", "Lay eggs", "Warm-blooded", "Feed young with milk"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which organisms can reproduce asexually?",
    options: ["Bacteria", "Amoeba", "Humans", "Hydra"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are endangered species in Indonesia?",
    options: ["Orangutan", "Komodo dragon", "Elephant", "Sparrow"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these can cause disease in humans?",
    options: ["Bacteria", "Viruses", "Fungi", "Red blood cells"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "What are signs of puberty?",
    options: ["Voice changes", "Hair growth", "Taller height", "Tooth decay"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are waste products in humans?",
    options: ["Urea", "Carbon dioxide", "Water", "Blood"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are major food nutrients?",
    options: ["Carbohydrates", "Proteins", "Minerals", "Amino acids"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which tools are used to observe cells?",
    options: ["Microscope", "Telescope", "Hand lens", "Spectrometer"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which of the following diseases are caused by viruses?",
    options: ["Flu", "COVID-19", "Chickenpox", "Diabetes"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which animals live both on land and in water?",
    options: ["Frog", "Turtle", "Fish", "Duck"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which parts of the eye help focus light?",
    options: ["Cornea", "Lens", "Retina", "Iris"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following belong to arthropods?",
    options: ["Spider", "Crab", "Butterfly", "Worm"],
    correctAnswers: [0, 1, 2]
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
  const selectedValues = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value));

  const correctAnswers = quiz[currentQuestion].correctAnswers;
  const sortedCorrect = [...correctAnswers].sort().toString();
  const sortedSelected = [...selectedValues].sort().toString();

  const feedback = document.getElementById("right-or-wrong");

  if (sortedCorrect === sortedSelected) {
    score++;
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    const correctTexts = correctAnswers.map(i => quiz[currentQuestion].options[i]);
    feedback.innerText = `❌ Wrong! Correct answers: ${correctTexts.join(", ")}`;
    feedback.style.color = "red";
  }

  // Move to next question after 2 seconds
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 2000);
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h2>You scored ${score} out of ${quiz.length}</h2>`;
}

window.onload = showQuestion;
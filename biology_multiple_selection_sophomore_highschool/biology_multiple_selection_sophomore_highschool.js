const quiz = [
  {
    question: "Which of the following are organelles found in plant cells?",
    options: ["Chloroplast", "Mitochondria", "Cell wall", "Centrioles"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are parts of the human digestive system?",
    options: ["Stomach", "Liver", "Pancreas", "Heart"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are types of asexual reproduction?",
    options: ["Binary fission", "Budding", "Fragmentation", "Fertilization"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which organisms can perform photosynthesis?",
    options: ["Algae", "Plants", "Cyanobacteria", "Fungi"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are functions of the skeletal system?",
    options: ["Support", "Movement", "Protection", "Digestion"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are components of blood?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Nephrons"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are plant hormones?",
    options: ["Auxin", "Gibberellin", "Insulin", "Ethylene"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which of these are examples of vertebrates?",
    options: ["Frogs", "Fish", "Birds", "Snails"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which are characteristics of mammals?",
    options: ["Warm-blooded", "Hair or fur", "Lay eggs", "Produce milk"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which are examples of natural ecosystems?",
    options: ["Forest", "River", "Desert", "Zoo"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these cells are found in human blood?",
    options: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Neurons"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which are examples of renewable natural resources?",
    options: ["Solar energy", "Wind", "Water", "Coal"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are plant tissues?",
    options: ["Xylem", "Phloem", "Meristem", "Myelin"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which factors affect the rate of photosynthesis?",
    options: ["Light intensity", "Carbon dioxide concentration", "Temperature", "Soil color"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are genetic disorders?",
    options: ["Down syndrome", "Hemophilia", "Diabetes", "Thalassemia"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which of the following are diseases caused by viruses?",
    options: ["Flu", "HIV/AIDS", "Tuberculosis", "COVID-19"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which of these organs are part of the human respiratory system?",
    options: ["Lungs", "Trachea", "Bronchi", "Kidneys"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are symptoms of malaria?",
    options: ["Fever", "Chills", "Headache", "Toothache"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which processes are involved in the water cycle?",
    options: ["Evaporation", "Condensation", "Precipitation", "Combustion"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are digestive enzymes?",
    options: ["Amylase", "Pepsin", "Lipase", "Insulin"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are excretory organs in humans?",
    options: ["Kidneys", "Lungs", "Skin", "Pancreas"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are parts of a flower?",
    options: ["Stigma", "Anther", "Ovary", "Leaf"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are insect characteristics?",
    options: ["Three body segments", "Six legs", "Wings", "Backbone"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following cause environmental pollution?",
    options: ["Smoke", "Plastic waste", "Noise", "Sunlight"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are examples of biodiversity?",
    options: ["Species diversity", "Genetic diversity", "Ecosystem diversity", "Language diversity"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which are examples of abiotic components?",
    options: ["Air", "Water", "Sunlight", "Fungi"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are types of muscle in the human body?",
    options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Neural muscle"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which processes are involved in cellular respiration?",
    options: ["Glycolysis", "Krebs cycle", "Electron transport chain", "Photosynthesis"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are characteristics of amphibians?",
    options: ["Live in water and land", "Lay eggs", "Cold-blooded", "Have feathers"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are adaptations of desert plants?",
    options: ["Thick stems", "Small leaves", "Deep roots", "Large leaves"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are methods of disease prevention?",
    options: ["Vaccination", "Hand washing", "Unclean water", "Balanced diet"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which components belong to the nervous system?",
    options: ["Brain", "Spinal cord", "Nerves", "Bones"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which organs help regulate blood sugar?",
    options: ["Pancreas", "Liver", "Muscles", "Skin"],
    correctAnswers: [0, 1]
  },

  {
    question: "Which are sexually transmitted diseases (STDs)?",
    options: ["Syphilis", "Gonorrhea", "HIV", "Measles"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which substances are macronutrients?",
    options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which structures are found in animal cells?",
    options: ["Mitochondria", "Nucleus", "Ribosomes", "Cell wall"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which are examples of producers in an ecosystem?",
    options: ["Grass", "Algae", "Trees", "Cows"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which factors are needed for seed germination?",
    options: ["Water", "Oxygen", "Warmth", "Light"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following can lead to extinction?",
    options: ["Habitat loss", "Pollution", "Climate change", "Genetic mutation"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of these are genetic materials?",
    options: ["DNA", "RNA", "Enzymes", "Proteins"],
    correctAnswers: [0, 1]
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
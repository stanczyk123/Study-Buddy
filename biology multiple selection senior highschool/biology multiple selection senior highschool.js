const quiz = [
  {
    question: "Which of the following are components of the cell membrane?",
    options: ["Phospholipids", "Proteins", "Cholesterol", "Cellulose"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which organelles are involved in protein synthesis?",
    options: ["Nucleus", "Ribosomes", "Golgi apparatus", "Lysosomes"],
    correctAnswers: [1, 2]
  },
  {
    question: "Which of the following are phases of mitosis?",
    options: ["Prophase", "Metaphase", "Anaphase", "Cytokinesis"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are functions of the liver?",
    options: ["Detoxification", "Bile production", "Insulin production", "Storage of glycogen"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are part of the central nervous system?",
    options: ["Brain", "Spinal cord", "Nerves", "Reflex arc"],
    correctAnswers: [0, 1]
  },
  {
    question: "Which of the following are types of connective tissue?",
    options: ["Blood", "Bone", "Cartilage", "Muscle"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which processes occur during photosynthesis?",
    options: ["Carbon dioxide uptake", "Oxygen release", "Glucose formation", "Water formation"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these hormones are produced by the pancreas?",
    options: ["Insulin", "Glucagon", "Adrenaline", "Somatostatin"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following structures are found in plant cells but not in animal cells?",
    options: ["Chloroplasts", "Cell wall", "Large central vacuole", "Lysosomes"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are infectious diseases?",
    options: ["Tuberculosis", "Malaria", "Diabetes", "Influenza"],
    correctAnswers: [0, 1, 3]
  },

  {
    question: "Which of these are part of the male reproductive system?",
    options: ["Testes", "Vas deferens", "Ovaries", "Prostate gland"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these blood components are involved in clotting?",
    options: ["Platelets", "Red blood cells", "Fibrinogen", "White blood cells"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which organisms reproduce using binary fission?",
    options: ["Bacteria", "Amoeba", "Paramecium", "Fungi"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are included in Mendel’s laws of inheritance?",
    options: ["Law of Segregation", "Law of Independent Assortment", "Law of Dominance", "Law of Mutation"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are examples of abiotic factors?",
    options: ["Sunlight", "Water", "Soil", "Fungi"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following organs are involved in the excretory system?",
    options: ["Kidneys", "Lungs", "Liver", "Heart"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are part of DNA structure?",
    options: ["Deoxyribose", "Phosphate group", "Nitrogen base", "Ribose"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following diseases are caused by viruses?",
    options: ["HIV/AIDS", "COVID-19", "Tetanus", "Smallpox"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are examples of renewable natural resources?",
    options: ["Sunlight", "Wind", "Fossil fuels", "Water"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are digestive enzymes?",
    options: ["Amylase", "Pepsin", "Lipase", "Insulin"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are types of asexual reproduction?",
    options: ["Budding", "Fission", "Pollination", "Spore formation"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are symptoms of diabetes mellitus?",
    options: ["Increased thirst", "Frequent urination", "Weight gain", "Fatigue"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are parts of the respiratory system?",
    options: ["Trachea", "Alveoli", "Esophagus", "Bronchi"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these organelles have a double membrane?",
    options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are autotrophic organisms?",
    options: ["Algae", "Green plants", "Cyanobacteria", "Fungi"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are types of muscle tissue?",
    options: ["Skeletal", "Cardiac", "Smooth", "Connective"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are found in the human circulatory system?",
    options: ["Arteries", "Veins", "Capillaries", "Nephrons"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are caused by genetic disorders?",
    options: ["Hemophilia", "Down syndrome", "Sickle cell anemia", "Tuberculosis"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are stages of the menstrual cycle?",
    options: ["Menstruation", "Ovulation", "Fertilization", "Luteal phase"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are types of ecological interactions?",
    options: ["Predation", "Mutualism", "Parasitism", "Diffusion"],
    correctAnswers: [0, 1, 2]
  },

  {
    question: "Which of the following are characteristics of living things?",
    options: ["Reproduction", "Growth", "Movement", "Rusting"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are functions of the skeletal system?",
    options: ["Support", "Protection", "Movement", "Digestion"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these diseases are sexually transmitted?",
    options: ["Syphilis", "HIV/AIDS", "Malaria", "Gonorrhea"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following help maintain homeostasis?",
    options: ["Sweating", "Shivering", "Breathing", "Photosynthesis"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are types of RNA?",
    options: ["mRNA", "tRNA", "rRNA", "dRNA"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are products of aerobic respiration?",
    options: ["Carbon dioxide", "Water", "Oxygen", "ATP"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are human body systems?",
    options: ["Nervous", "Digestive", "Endocrine", "Biotic"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following nutrients are macronutrients?",
    options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are part of the nephron?",
    options: ["Glomerulus", "Bowman’s capsule", "Loop of Henle", "Islets of Langerhans"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are examples of genetic engineering?",
    options: ["Transgenic plants", "Cloning", "Selective breeding", "Gene therapy"],
    correctAnswers: [0, 1, 3]
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
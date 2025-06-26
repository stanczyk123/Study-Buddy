const quiz = [
  {
    question: "Which organelle is responsible for cellular respiration?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"],
    answer: 2
  },
  {
    question: "Which of the following is a characteristic of animal cells?",
    options: ["Cell wall", "Chloroplast", "Large central vacuole", "Centrioles"],
    answer: 3
  },
  {
    question: "Xylem tissue in plants functions to ...",
    options: ["Transport food", "Transport water and minerals", "Store energy", "Perform photosynthesis"],
    answer: 1
  },
  {
    question: "What phase of mitosis is characterized by chromosomes lining up in the middle of the cell?",
    options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    answer: 1
  },
  {
    question: "What is the term for the genetic makeup of an organism?",
    options: ["Phenotype", "Genotype", "Trait", "Gene"],
    answer: 1
  },
  {
    question: "Gametes are formed through the process of ...",
    options: ["Mitosis", "Binary fission", "Meiosis", "Budding"],
    answer: 2
  },
  {
    question: "What is the main function of the respiratory system?",
    options: ["Pumping blood", "Digesting food", "Gas exchange", "Producing hormones"],
    answer: 2
  },
  {
    question: "Which structure in the leaf is responsible for gas exchange?",
    options: ["Xylem", "Phloem", "Stomata", "Cuticle"],
    answer: 2
  },
  {
    question: "Which of the following is the correct order of taxonomic ranks?",
    options: ["Phylum, Kingdom, Class, Family", "Kingdom, Phylum, Class, Order", "Family, Order, Class, Genus", "Genus, Class, Family, Phylum"],
    answer: 1
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Brainstem", "Cerebellum", "Medulla oblongata"],
    answer: 2
  },
  {
    question: "The site of fertilization in the female reproductive system is ...",
    options: ["Uterus", "Ovary", "Vagina", "Fallopian tube"],
    answer: 3
  },
  {
    question: "What type of mutation involves the substitution of one nucleotide for another?",
    options: ["Insertion", "Deletion", "Substitution", "Duplication"],
    answer: 2
  },
  {
    question: "Which enzyme breaks down starch into sugar in the mouth?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    answer: 1
  },
  {
    question: "Which blood cells are responsible for fighting infection?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: 1
  },
  {
    question: "Which of the following is a biotic component of an ecosystem?",
    options: ["Air", "Water", "Soil", "Bacteria"],
    answer: 3
  },
  {
    question: "Which of the following diseases is caused by a virus?",
    options: ["Tuberculosis", "Influenza", "Malaria", "Ringworm"],
    answer: 1
  },
  {
    question: "Which structure carries urine from the kidneys to the bladder?",
    options: ["Urethra", "Nephron", "Ureter", "Loop of Henle"],
    answer: 2
  },
  {
    question: "Which biomolecule is the main source of energy?",
    options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
    answer: 2
  },
  {
    question: "Which gas is produced during photosynthesis?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Methane"],
    answer: 2
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    options: ["Adrenaline", "Insulin", "Thyroxine", "Glucagon"],
    answer: 1
  },
  {
    question: "What is the role of ribosomes in the cell?",
    options: ["Energy production", "Protein synthesis", "Waste removal", "Photosynthesis"],
    answer: 1
  },
  {
    question: "In the food chain, herbivores are ...",
    options: ["Primary consumers", "Producers", "Tertiary consumers", "Decomposers"],
    answer: 0
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    options: ["Cornea", "Lens", "Pupil", "Iris"],
    answer: 3
  },
  {
    question: "Which of the following is inherited genetically?",
    options: ["Tattoo", "Height", "Language", "Accent"],
    answer: 1
  },
  {
    question: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organ system"],
    answer: 2
  },
  {
    question: "What is the function of the large intestine?",
    options: ["Absorption of nutrients", "Digestion of food", "Absorption of water", "Production of enzymes"],
    answer: 2
  },
  {
    question: "What is the main nitrogenous waste in human urine?",
    options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
    answer: 1
  },
  {
    question: "Which structure connects muscles to bones?",
    options: ["Ligament", "Cartilage", "Tendon", "Joint"],
    answer: 2
  },
  {
    question: "Which of the following organisms reproduces by binary fission?",
    options: ["Frog", "Bacteria", "Mushroom", "Earthworm"],
    answer: 1
  },
  {
    question: "Which structure in plant cells is not found in animal cells?",
    options: ["Nucleus", "Mitochondria", "Cell wall", "Ribosomes"],
    answer: 2
  },
  {
    question: "What is the function of phloem in plants?",
    options: ["Transport water", "Transport food", "Support plant structure", "Store nutrients"],
    answer: 1
  },
  {
    question: "Which gas is absorbed during respiration?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    answer: 0
  },
  {
    question: "What is the shape of DNA?",
    options: ["Single helix", "Double helix", "Triple helix", "Circular"],
    answer: 1
  },
  {
    question: "Which vitamin is produced in the skin by sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    question: "Which organ in the body filters blood to form urine?",
    options: ["Liver", "Kidney", "Pancreas", "Heart"],
    answer: 1
  },
  {
    question: "Which kingdom do mushrooms belong to?",
    options: ["Plantae", "Animalia", "Fungi", "Protista"],
    answer: 2
  },
  {
    question: "Which part of the flower produces pollen?",
    options: ["Pistil", "Ovary", "Petal", "Anther"],
    answer: 3
  },
  {
    question: "Which system is responsible for transporting nutrients and oxygen?",
    options: ["Digestive system", "Respiratory system", "Circulatory system", "Excretory system"],
    answer: 2
  },
  {
    question: "What is the main function of enzymes?",
    options: ["Speed up chemical reactions", "Transport oxygen", "Fight diseases", "Store energy"],
    answer: 0
  },
  {
    question: "Which organ is part of both the digestive and endocrine system?",
    options: ["Liver", "Pancreas", "Stomach", "Gall bladder"],
    answer: 1
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
    const correctIndex = quiz[currentQuestion].answer;
    const correctText = quiz[currentQuestion].options[correctIndex];

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
        if (currentQuestion < quiz.length) {
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
    resultDiv.innerText = `You scored ${score} out of ${quiz.length}`;
}

// Start quiz when page loads
window.onload = showQuestion;
const quiz = [
  {
    question: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    answer: 2
  },
  {
    question: "Which organ is responsible for pumping blood?",
    options: ["Liver", "Lung", "Heart", "Kidney"],
    answer: 2
  },
  {
    question: "Photosynthesis mainly takes place in which part of the plant?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: 2
  },
  {
    question: "Which of the following is a vertebrate?",
    options: ["Fish", "Worm", "Snail", "Ant"],
    answer: 0
  },
  {
    question: "What gas is used by plants during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: 1
  },
  {
    question: "Which part of the digestive system absorbs nutrients?",
    options: ["Stomach", "Esophagus", "Small intestine", "Large intestine"],
    answer: 2
  },
  {
    question: "Which of the following is a characteristic of living things?",
    options: ["Reproduction", "Reflection", "Rotation", "Radiation"],
    answer: 0
  },
  {
    question: "What is the function of red blood cells?",
    options: ["Fight infection", "Clot blood", "Transport oxygen", "Digest food"],
    answer: 2
  },
  {
    question: "Which organ is part of the respiratory system?",
    options: ["Heart", "Lung", "Stomach", "Kidney"],
    answer: 1
  },
  {
    question: "What do we call the process where plants make their own food?",
    options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
    answer: 2
  },
  {
    question: "Which of the following is not an invertebrate?",
    options: ["Frog", "Spider", "Earthworm", "Crab"],
    answer: 0
  },
  {
    question: "What is the function of the skeletal system?",
    options: ["Pump blood", "Control breathing", "Support body", "Digest food"],
    answer: 2
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    options: ["Cornea", "Lens", "Iris", "Retina"],
    answer: 2
  },
  {
    question: "Which of these animals is cold-blooded?",
    options: ["Bird", "Frog", "Dog", "Cat"],
    answer: 1
  },
  {
    question: "What is the function of the kidneys?",
    options: ["Filter blood", "Pump blood", "Digest food", "Store urine"],
    answer: 0
  },
  {
    question: "Which kingdom does mushroom belong to?",
    options: ["Plantae", "Fungi", "Animalia", "Protista"],
    answer: 1
  },
  {
    question: "Which nutrient is the main source of energy?",
    options: ["Protein", "Carbohydrate", "Vitamin", "Mineral"],
    answer: 1
  },
  {
    question: "Which part of the brain controls balance?",
    options: ["Cerebrum", "Medulla", "Cerebellum", "Spinal cord"],
    answer: 2
  },
  {
    question: "Which of the following diseases is caused by a virus?",
    options: ["Malaria", "Tuberculosis", "Influenza", "Typhoid"],
    answer: 2
  },
  {
    question: "Which one is a part of the male reproductive system?",
    options: ["Ovary", "Uterus", "Testis", "Vagina"],
    answer: 2
  },
  {
    question: "Which of the following organisms reproduce by binary fission?",
    options: ["Fungi", "Bacteria", "Insects", "Fish"],
    answer: 1
  },
  {
    question: "Which part of the plant transports water?",
    options: ["Phloem", "Xylem", "Stomata", "Root hair"],
    answer: 1
  },
  {
    question: "Which organ is responsible for making insulin?",
    options: ["Liver", "Pancreas", "Stomach", "Spleen"],
    answer: 1
  },
  {
    question: "Which organ system includes the skin?",
    options: ["Circulatory", "Respiratory", "Integumentary", "Endocrine"],
    answer: 2
  },
  {
    question: "What do herbivores eat?",
    options: ["Meat", "Fruits", "Plants", "Both meat and plants"],
    answer: 2
  },
  {
    question: "Which sense organ is used to detect sound?",
    options: ["Eye", "Ear", "Nose", "Skin"],
    answer: 1
  },
  {
    question: "What is the function of chlorophyll?",
    options: ["Absorb water", "Make glucose", "Trap sunlight", "Produce oxygen"],
    answer: 2
  },
  {
    question: "Which part of the flower develops into fruit?",
    options: ["Petal", "Sepal", "Stigma", "Ovary"],
    answer: 3
  },
  {
    question: "What is the name of the largest organ in the human body?",
    options: ["Liver", "Skin", "Lung", "Brain"],
    answer: 1
  },
  {
    question: "Which of the following animals undergo metamorphosis?",
    options: ["Frog", "Chicken", "Dog", "Cow"],
    answer: 0
  },
  {
    question: "Which of the following is a function of white blood cells?",
    options: ["Transport oxygen", "Digest food", "Fight disease", "Store nutrients"],
    answer: 2
  },
  {
    question: "What is a consumer in a food chain?",
    options: ["An organism that produces food", "An organism that eats others", "An organism that decomposes", "An organism that makes energy"],
    answer: 1
  },
  {
    question: "What happens during exhalation?",
    options: ["Air enters lungs", "Carbon dioxide is released", "Oxygen is absorbed", "Blood is filtered"],
    answer: 1
  },
  {
    question: "Where does fertilization occur in humans?",
    options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
    answer: 2
  },
  {
    question: "Which of these is a non-infectious disease?",
    options: ["Diabetes", "Malaria", "Typhoid", "Dengue"],
    answer: 0
  },
  {
    question: "Which part of the body helps in movement?",
    options: ["Muscles", "Liver", "Pancreas", "Kidney"],
    answer: 0
  },
  {
    question: "Which cell structure controls cell activities?",
    options: ["Cell wall", "Mitochondria", "Nucleus", "Cytoplasm"],
    answer: 2
  },
  {
    question: "Which of these reproduce using spores?",
    options: ["Moss", "Fungi", "Bacteria", "Fish"],
    answer: 0
  },
  {
    question: "Which body system includes bones?",
    options: ["Digestive system", "Skeletal system", "Respiratory system", "Circulatory system"],
    answer: 1
  },
  {
    question: "Which of the following are vertebrates?",
    options: ["Bird", "Fish", "Insect", "Worm"],
    answer: 0
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
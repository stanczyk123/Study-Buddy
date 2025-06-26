const chemistryTrueFalseQuiz = [
  {
    question: "Water is a compound made up of hydrogen and oxygen.",
    answer: true
  },
  {
    question: "The atomic number is equal to the number of neutrons in an atom.",
    answer: false
  },
  {
    question: "A molecule of oxygen is written as O2.",
    answer: true
  },
  {
    question: "Evaporation is a chemical change.",
    answer: false
  },
  {
    question: "Acids have a pH less than 7.",
    answer: true
  },
  {
    question: "Sodium is a non-metal element.",
    answer: false
  },
  {
    question: "NaCl is an ionic compound.",
    answer: true
  },
  {
    question: "Electrons are found in the nucleus of an atom.",
    answer: false
  },
  {
    question: "Carbon dioxide turns limewater milky.",
    answer: true
  },
  {
    question: "The periodic table arranges elements by decreasing atomic mass.",
    answer: false
  },
  {
    question: "Hydrogen is the lightest element.",
    answer: true
  },
  {
    question: "The formula for methane is CH4.",
    answer: true
  },
  {
    question: "Bases turn red litmus paper blue.",
    answer: true
  },
  {
    question: "Copper is a poor conductor of electricity.",
    answer: false
  },
  {
    question: "A catalyst speeds up a chemical reaction without being consumed.",
    answer: true
  },
  {
    question: "All metals are liquids at room temperature.",
    answer: false
  },
  {
    question: "Distilled water is a pure substance.",
    answer: true
  },
  {
    question: "An ion is an atom that has lost or gained electrons.",
    answer: true
  },
  {
    question: "The chemical symbol for gold is Au.",
    answer: true
  },
  {
    question: "All chemical reactions release heat.",
    answer: false
  },
  {
    question: "Elements in the same group have similar properties.",
    answer: true
  },
  {
    question: "HCl is a base.",
    answer: false
  },
  {
    question: "Boiling point is a physical property of a substance.",
    answer: true
  },
  {
    question: "An exothermic reaction absorbs heat from the surroundings.",
    answer: false
  },
  {
    question: "The molar mass of oxygen (O2) is 32 g/mol.",
    answer: true
  },
  {
    question: "Compounds are made up of only one type of atom.",
    answer: false
  },
  {
    question: "Electrons have a negative charge.",
    answer: true
  },
  {
    question: "Litmus is an example of an acid.",
    answer: false
  },
  {
    question: "Atoms are the smallest unit of a chemical element.",
    answer: true
  },
  {
    question: "The atomic mass is the sum of protons and electrons.",
    answer: false
  },
  {
    question: "Ammonia (NH3) is a basic compound.",
    answer: true
  },
  {
    question: "H2O is an example of a covalent compound.",
    answer: true
  },
  {
    question: "The chemical symbol for calcium is Ca.",
    answer: true
  },
  {
    question: "The pH scale ranges from 1 to 10.",
    answer: false
  },
  {
    question: "Group 18 elements are known as noble gases.",
    answer: true
  },
  {
    question: "A physical change alters the identity of a substance.",
    answer: false
  },
  {
    question: "Rusting is a chemical reaction between iron, water, and oxygen.",
    answer: true
  },
  {
    question: "CO2 is a compound.",
    answer: true
  },
  {
    question: "Bases have a sour taste.",
    answer: false
  },
  {
    question: "All acids contain hydrogen atoms.",
    answer: true
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
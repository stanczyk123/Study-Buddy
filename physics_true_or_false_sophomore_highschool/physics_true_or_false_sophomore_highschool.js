const quiz = [
  {
    question: "Speed is a scalar quantity.",
    answer: true
  },
  {
    question: "Acceleration is defined as the change in speed per unit time.",
    answer: false
  },
  {
    question: "Velocity includes direction, while speed does not.",
    answer: true
  },
  {
    question: "Newton's First Law is also known as the Law of Inertia.",
    answer: true
  },
  {
    question: "A balanced force causes a change in motion.",
    answer: false
  },
  {
    question: "Work is done when there is no displacement.",
    answer: false
  },
  {
    question: "The unit of work is the joule (J).",
    answer: true
  },
  {
    question: "Gravitational potential energy depends on mass, height, and gravity.",
    answer: true
  },
  {
    question: "The formula for kinetic energy is ½mv².",
    answer: true
  },
  {
    question: "Power is the rate of doing work.",
    answer: true
  },
  {
    question: "Friction always acts in the direction of motion.",
    answer: false
  },
  {
    question: "Weight is mass times gravity.",
    answer: true
  },
  {
    question: "Mass changes depending on location.",
    answer: false
  },
  {
    question: "An object at rest has zero momentum.",
    answer: true
  },
  {
    question: "Momentum is conserved in a closed system.",
    answer: true
  },
  {
    question: "Pascal’s law is about the behavior of gases.",
    answer: false
  },
  {
    question: "Archimedes’ principle explains buoyant force.",
    answer: true
  },
  {
    question: "An ideal machine has 100% efficiency.",
    answer: true
  },
  {
    question: "A pulley is a type of simple machine.",
    answer: true
  },
  {
    question: "Sound cannot travel through a vacuum.",
    answer: true
  },
  {
    question: "Light travels faster in glass than in air.",
    answer: false
  },
  {
    question: "The unit of frequency is hertz (Hz).",
    answer: true
  },
  {
    question: "Red light has a shorter wavelength than blue light.",
    answer: false
  },
  {
    question: "Concave lenses always converge light rays.",
    answer: false
  },
  {
    question: "Convex mirrors always form virtual images.",
    answer: true
  },
  {
    question: "The law of reflection states that the angle of incidence equals the angle of reflection.",
    answer: true
  },
  {
    question: "Refraction occurs when light changes speed between two media.",
    answer: true
  },
  {
    question: "Electric current is measured in volts.",
    answer: false
  },
  {
    question: "Ohm’s law relates voltage, current, and resistance.",
    answer: true
  },
  {
    question: "A series circuit has more than one path for current.",
    answer: false
  },
  {
    question: "An ammeter is connected in parallel in a circuit.",
    answer: false
  },
  {
    question: "Current is the flow of electrons.",
    answer: true
  },
  {
    question: "Insulators allow current to flow easily.",
    answer: false
  },
  {
    question: "Magnetic field lines around a bar magnet form closed loops.",
    answer: true
  },
  {
    question: "Earth’s magnetic field is strongest at the equator.",
    answer: false
  },
  {
    question: "Acceleration due to gravity on Earth is approximately 9.8 m/s².",
    answer: true
  },
  {
    question: "Work and energy have the same unit: joule.",
    answer: true
  },
  {
    question: "Hydroelectric power uses the energy of moving water to generate electricity.",
    answer: true
  },
  {
    question: "Heat always flows from a colder object to a hotter object.",
    answer: false
  },
  {
    question: "Conduction requires a medium to transfer heat.",
    answer: true
  }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = quiz[currentQuestion];
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
    const correctAnswer = quiz[currentQuestion].answer;

    if (selectedValue === correctAnswer) {
        score++;
        feedbackDiv.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
        feedbackDiv.innerHTML = `<p style="color: red;">❌ Wrong!<br>The correct answer is: <strong>${correctAnswer ? "True" : "False"}</strong></p>`;
    }

    setTimeout(() => {
        feedbackDiv.style.display = "none";
        currentQuestion++;
        if (currentQuestion < quiz.length) {
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
    resultDiv.innerHTML = `<h2>You got ${score} out of ${quiz.length} questions right!</h2>`;
}

window.onload = showQuestion;
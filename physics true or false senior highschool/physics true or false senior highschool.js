const quiz = [
  {
    question: "Acceleration is the rate of change of velocity.",
    answer: true
  },
  {
    question: "Sound waves can travel through a vacuum.",
    answer: false
  },
  {
    question: "The unit of electric current is the ampere.",
    answer: true
  },
  {
    question: "The acceleration due to gravity on Earth is approximately 9.8 m/s².",
    answer: true
  },
  {
    question: "In a vacuum, heavier objects fall faster than lighter ones.",
    answer: false
  },
  {
    question: "Friction always opposes the motion of an object.",
    answer: true
  },
  {
    question: "Energy can be created and destroyed.",
    answer: false
  },
  {
    question: "Kinetic energy increases with the square of speed.",
    answer: true
  },
  {
    question: "A concave mirror can produce both real and virtual images.",
    answer: true
  },
  {
    question: "Ohm’s Law states that current equals voltage divided by resistance.",
    answer: true
  },
  {
    question: "The SI unit of work is the watt.",
    answer: false
  },
  {
    question: "The frequency of a wave is measured in hertz (Hz).",
    answer: true
  },
  {
    question: "A transformer works only with direct current (DC).",
    answer: false
  },
  {
    question: "The speed of light is slower in water than in air.",
    answer: true
  },
  {
    question: "The total momentum in a closed system is conserved.",
    answer: true
  },
  {
    question: "X-rays have lower energy than visible light.",
    answer: false
  },
  {
    question: "Voltage is the rate of flow of electric charge.",
    answer: false
  },
  {
    question: "A capacitor stores electrical energy.",
    answer: true
  },
  {
    question: "The force of gravity between two objects increases as their distance increases.",
    answer: false
  },
  {
    question: "Current is a scalar quantity.",
    answer: true
  },
  {
    question: "A plane mirror always produces a real image.",
    answer: false
  },
  {
    question: "Gamma rays have no mass and no charge.",
    answer: true
  },
  {
    question: "The unit of power is joule.",
    answer: false
  },
  {
    question: "The image formed by a convex lens can be real or virtual.",
    answer: true
  },
  {
    question: "Displacement is the same as distance.",
    answer: false
  },
  {
    question: "The magnetic field around a straight current-carrying wire is circular.",
    answer: true
  },
  {
    question: "The boiling point of pure water at sea level is 100°C.",
    answer: true
  },
  {
    question: "Temperature is a measure of the average kinetic energy of particles.",
    answer: true
  },
  {
    question: "An object moving with constant speed must be experiencing a net force.",
    answer: false
  },
  {
    question: "Work is done when a force is applied and displacement occurs.",
    answer: true
  },
  {
    question: "Pascal’s principle applies to gases only.",
    answer: false
  },
  {
    question: "A body in equilibrium has zero net force acting on it.",
    answer: true
  },
  {
    question: "Hooke’s law relates force and voltage in a resistor.",
    answer: false
  },
  {
    question: "Infrared radiation is invisible to the human eye.",
    answer: true
  },
  {
    question: "Electric field lines point away from positive charges.",
    answer: true
  },
  {
    question: "Momentum is conserved in inelastic collisions.",
    answer: true
  },
  {
    question: "A wave with high frequency has a long wavelength.",
    answer: false
  },
  {
    question: "A neutron has no electric charge.",
    answer: true
  },
  {
    question: "The total internal reflection occurs when light passes from air to water.",
    answer: false
  },
  {
    question: "Radio waves travel faster than gamma rays.",
    answer: false
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

const quiz = [
  {
    question: "What is the basic unit of force in the SI system?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answer: 1
  },
  {
    question: "Which of the following is an example of kinetic energy?",
    options: ["A stretched rubber band", "A moving car", "Water in a dam", "A charged battery"],
    answer: 1
  },
  {
    question: "What does a thermometer measure?",
    options: ["Pressure", "Mass", "Temperature", "Volume"],
    answer: 2
  },
  {
    question: "Which color of light has the shortest wavelength?",
    options: ["Red", "Yellow", "Green", "Violet"],
    answer: 3
  },
  {
    question: "Which force pulls objects toward the center of the Earth?",
    options: ["Magnetic", "Friction", "Gravitational", "Electric"],
    answer: 2
  },
  {
    question: "The rate of change of velocity is called?",
    options: ["Speed", "Velocity", "Acceleration", "Force"],
    answer: 2
  },
  {
    question: "Which of the following is a conductor of electricity?",
    options: ["Rubber", "Wood", "Plastic", "Copper"],
    answer: 3
  },
  {
    question: "What tool is used to measure current?",
    options: ["Voltmeter", "Barometer", "Ammeter", "Thermometer"],
    answer: 2
  },
  {
    question: "What kind of lens is used to correct nearsightedness?",
    options: ["Convex", "Concave", "Flat", "Cylindrical"],
    answer: 1
  },
  {
    question: "Which one is not a form of energy?",
    options: ["Sound", "Heat", "Force", "Light"],
    answer: 2
  },
  {
    question: "Which gas is necessary for burning?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: 2
  },
  {
    question: "What happens when a light ray hits a mirror?",
    options: ["It refracts", "It diffracts", "It absorbs", "It reflects"],
    answer: 3
  },
  {
    question: "Which physical quantity is measured in meters?",
    options: ["Mass", "Length", "Force", "Time"],
    answer: 1
  },
  {
    question: "What is the function of a fuse in electrical circuits?",
    options: ["To speed up current", "To prevent overload", "To store charge", "To reduce voltage"],
    answer: 1
  },
  {
    question: "Which energy conversion occurs in a flashlight?",
    options: ["Chemical to electrical to light", "Mechanical to chemical", "Light to chemical", "Sound to electrical"],
    answer: 0
  },
  {
    question: "Which of these is a unit of work?",
    options: ["Watt", "Joule", "Newton", "Ampere"],
    answer: 1
  },
  {
    question: "Which type of mirror is used in car side mirrors?",
    options: ["Plane", "Concave", "Convex", "Spherical"],
    answer: 2
  },
  {
    question: "When you rub a balloon on your hair, it sticks to the wall due to:",
    options: ["Gravity", "Friction", "Magnetism", "Static electricity"],
    answer: 3
  },
  {
    question: "What instrument is used to measure atmospheric pressure?",
    options: ["Hygrometer", "Barometer", "Thermometer", "Ammeter"],
    answer: 1
  },
  {
    question: "Which material is most likely to reflect sound waves?",
    options: ["Foam", "Glass", "Wood", "Cotton"],
    answer: 1
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: ["Petroleum", "Coal", "Solar", "Natural gas"],
    answer: 2
  },
  {
    question: "What causes the formation of shadows?",
    options: ["Reflection", "Refraction", "Blocking of light", "Dispersion"],
    answer: 2
  },
  {
    question: "Which of the following is NOT a vector quantity?",
    options: ["Force", "Velocity", "Speed", "Acceleration"],
    answer: 2
  },
  {
    question: "Which law explains the relationship between force, mass, and acceleration?",
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a simple machine?",
    options: ["Lever", "Pulley", "Engine", "Inclined plane"],
    answer: 2
  },
  {
    question: "What happens to a metal wire when heated?",
    options: ["It contracts", "It expands", "It disappears", "It becomes colder"],
    answer: 1
  },
  {
    question: "What is the function of lubricants in machines?",
    options: ["Increase speed", "Reduce friction", "Store energy", "Generate heat"],
    answer: 1
  },
  {
    question: "Which wave can travel through a vacuum?",
    options: ["Sound", "Water", "Light", "Shock wave"],
    answer: 2
  },
  {
    question: "Sound travels fastest through which medium?",
    options: ["Air", "Vacuum", "Water", "Solid"],
    answer: 3
  },
  {
    question: "In what unit is electrical power measured?",
    options: ["Joule", "Ampere", "Watt", "Volt"],
    answer: 2
  },
  {
    question: "Which of the following is an example of refraction?",
    options: ["Echo", "Shadow", "Rainbow", "Mirror image"],
    answer: 2
  },
  {
    question: "What do we call the bending of light when it passes from one medium to another?",
    options: ["Reflection", "Diffraction", "Refraction", "Dispersion"],
    answer: 2
  },
  {
    question: "Which of the following instruments is used to measure time?",
    options: ["Stopwatch", "Ammeter", "Voltmeter", "Thermometer"],
    answer: 0
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "50°C"],
    answer: 0
  },
  {
    question: "Which planet has the strongest gravity?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2
  },
  {
    question: "What is inertia?",
    options: ["The tendency of an object to stay at rest or in motion", "The rate of change of velocity", "The measure of energy", "The distance traveled"],
    answer: 0
  },
  {
    question: "What causes day and night?",
    options: ["Revolution of the Earth", "Rotation of the Earth", "Tilt of Earth's axis", "Movement of the Sun"],
    answer: 1
  },
  {
    question: "Which of these is used to see very small objects?",
    options: ["Telescope", "Thermometer", "Microscope", "Spectrometer"],
    answer: 2
  },
  {
    question: "What type of energy is stored in a stretched rubber band?",
    options: ["Kinetic", "Thermal", "Potential", "Electric"],
    answer: 2
  },
  {
    question: "Which one is not affected by gravity?",
    options: ["A ball falling", "A satellite orbiting", "Light in vacuum", "An apple hanging"],
    answer: 2
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

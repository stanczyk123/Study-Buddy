const quiz = [
  {
    question: "What is the value of 7 + 5 × 2?",
    options: ["24", "19", "17", "26"],
    answer: 2
  },
  {
    question: "Which of the following is a prime number?",
    options: ["9", "11", "15", "21"],
    answer: 1
  },
  {
    question: "What is the area of a triangle with base 6 cm and height 4 cm?",
    options: ["10 cm²", "24 cm²", "12 cm²", "20 cm²"],
    answer: 2
  },
  {
    question: "Simplify: 3(2x + 4) =",
    options: ["6x + 4", "5x + 12", "6x + 12", "2x + 12"],
    answer: 2
  },
  {
    question: "What is the value of 2³?",
    options: ["6", "8", "9", "4"],
    answer: 1
  },
  {
    question: "Find the value of x: x/4 = 5",
    options: ["9", "15", "20", "10"],
    answer: 2
  },
  {
    question: "What is the perimeter of a square with side length 7 cm?",
    options: ["14 cm", "28 cm", "21 cm", "49 cm"],
    answer: 1
  },
  {
    question: "What is the result of 5²?",
    options: ["10", "15", "25", "30"],
    answer: 2
  },
  {
    question: "What is 1/2 of 36?",
    options: ["18", "12", "24", "20"],
    answer: 0
  },
  {
    question: "Convert 0.75 to a fraction.",
    options: ["3/5", "1/2", "3/4", "2/3"],
    answer: 2
  },
  {
    question: "What is the least common multiple (LCM) of 4 and 5?",
    options: ["20", "10", "15", "25"],
    answer: 0
  },
  {
    question: "Solve: 9 - 3 × 2",
    options: ["12", "6", "3", "9"],
    answer: 2
  },
  {
    question: "Find the next number in the sequence: 2, 4, 8, 16, ...",
    options: ["18", "24", "32", "20"],
    answer: 2
  },
  {
    question: "What is the square root of 49?",
    options: ["6", "7", "8", "9"],
    answer: 1
  },
  {
    question: "What is 60% of 50?",
    options: ["25", "30", "35", "20"],
    answer: 1
  },
  {
    question: "A rectangle has a length of 10 cm and width of 4 cm. What is its area?",
    options: ["40 cm²", "14 cm²", "30 cm²", "28 cm²"],
    answer: 0
  },
  {
    question: "Solve: -3 + 7",
    options: ["10", "4", "-4", "3"],
    answer: 1
  },
  {
    question: "What is the value of 15 ÷ 3 × 2?",
    options: ["10", "5", "15", "20"],
    answer: 0
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    question: "What is the value of x in the equation x - 6 = 9?",
    options: ["3", "15", "6", "9"],
    answer: 1
  },

    {
    question: "What is the value of 3² + 4²?",
    options: ["7", "12", "25", "30"],
    answer: 2
  },
  {
    question: "What is the greatest common divisor (GCD) of 24 and 36?",
    options: ["6", "8", "12", "18"],
    answer: 2
  },
  {
    question: "If a triangle has angles 90°, 30°, and x°, what is the value of x?",
    options: ["60°", "45°", "90°", "30°"],
    answer: 0
  },
  {
    question: "What is the result of 5 × (2 + 3)?",
    options: ["10", "15", "25", "30"],
    answer: 2
  },
  {
    question: "Which of the following is a prime number?",
    options: ["4", "6", "7", "9"],
    answer: 2
  },
  {
    question: "Which number is both a square and a cube?",
    options: ["4", "8", "36", "64"],
    answer: 3
  },
  {
    question: "What is the value of x if 2x - 3 = 7?",
    options: ["2", "5", "7", "10"],
    answer: 1
  },
  {
    question: "What is the perimeter of a square with side length 6 cm?",
    options: ["12 cm", "18 cm", "24 cm", "36 cm"],
    answer: 2
  },
  {
    question: "What is the area of a triangle with base 10 cm and height 6 cm?",
    options: ["30 cm²", "60 cm²", "20 cm²", "15 cm²"],
    answer: 0
  },
  {
    question: "What is the next number in the pattern: 2, 4, 8, 16, ...?",
    options: ["18", "20", "24", "32"],
    answer: 3
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: 2
  },
  {
    question: "Which of the following fractions is the largest?",
    options: ["1/4", "1/3", "2/5", "3/10"],
    answer: 1
  },
  {
    question: "If a = 3 and b = 2, what is the value of ab + a?",
    options: ["6", "9", "12", "15"],
    answer: 1
  },
  {
    question: "How many faces does a cube have?",
    options: ["4", "6", "8", "12"],
    answer: 1
  },
  {
    question: "What is the volume of a cube with side length 5 cm?",
    options: ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
    answer: 2
  },
  {
    question: "What is the mean of the numbers: 4, 6, 8, 10, 12?",
    options: ["8", "9", "10", "11"],
    answer: 0
  },
  {
    question: "Which of the following numbers is divisible by 6?",
    options: ["24", "25", "26", "27"],
    answer: 0
  },
  {
    question: "Which operation is performed first in the expression: 6 + 4 × 2?",
    options: ["Addition", "Multiplication", "Subtraction", "Division"],
    answer: 1
  },
  {
    question: "The product of two negative numbers is:",
    options: ["Negative", "Positive", "Zero", "Undefined"],
    answer: 1
  },
  {
    question: "What is the result of 100 ÷ 4?",
    options: ["20", "25", "30", "40"],
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
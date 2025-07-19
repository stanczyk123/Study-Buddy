const quiz = [
  { question: "The value of √25 is 5.", answer: true },
  { question: "π is exactly equal to 3.14.", answer: false },
  { question: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.", answer: true },
  { question: "A linear equation can have more than one solution.", answer: false },
  { question: "The graph of y = x² is a parabola.", answer: true },
  { question: "The number 0 is neither positive nor negative.", answer: true },
  { question: "The sum of the interior angles of a triangle is 360°.", answer: false },
  { question: "If a function is even, f(x) = f(-x).", answer: true },
  { question: "The value of log(1) is 1.", answer: false },
  { question: "A prime number has exactly two factors.", answer: true },
  { question: "The median is always one of the values in a data set.", answer: false },
  { question: "A square is a type of rectangle.", answer: true },
  { question: "The perimeter of a circle is called its area.", answer: false },
  { question: "If x = 2, then 3x + 1 = 7.", answer: true },
  { question: "A negative number raised to an even power is positive.", answer: true },
  { question: "The slope of a horizontal line is 0.", answer: true },
  { question: "The value of 2³ is 9.", answer: false },
  { question: "The standard deviation measures how spread out numbers are.", answer: true },
  { question: "In set notation, ∩ represents union.", answer: false },
  { question: "An equation with two variables can be represented by a line.", answer: true },
  { question: "The square root of a negative number is a real number.", answer: false },
  { question: "In a probability of 1, the event is certain to happen.", answer: true },
  { question: "In geometry, a point has size and dimension.", answer: false },
  { question: "Volume of a cube with side s is s³.", answer: true },
  { question: "A histogram is used to display categorical data.", answer: false },
  { question: "An obtuse angle is more than 90° but less than 180°.", answer: true },
  { question: "Multiplying two negative numbers results in a negative number.", answer: false },
  { question: "In a quadratic equation ax² + bx + c = 0, the graph is always a line.", answer: false },
  { question: "A ratio can be expressed as a fraction.", answer: true },
  { question: "The value of 5! (5 factorial) is 120.", answer: true },
  { question: "A rational number cannot be written as a fraction.", answer: false },
  { question: "The mode is the value that appears most often in a data set.", answer: true },
  { question: "The area of a triangle is base times height.", answer: false },
  { question: "The number 1 is not a prime number.", answer: true },
  { question: "In a function, each input must have exactly one output.", answer: true },
  { question: "A system of equations can have no solution.", answer: true },
  { question: "An inequality compares two expressions using =.", answer: false },
  { question: "Parallel lines never intersect.", answer: true },
  { question: "The angle sum of a quadrilateral is 180°.", answer: false },
  { question: "A decagon has 10 sides.", answer: true }
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
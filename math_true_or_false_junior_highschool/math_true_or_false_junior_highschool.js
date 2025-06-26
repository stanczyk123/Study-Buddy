const quiz = [
  { question: "A triangle has three sides.", answer: true },
  { question: "The sum of angles in a triangle is 180°.", answer: true },
  { question: "15 is a prime number.", answer: false },
  { question: "The square root of 25 is 5.", answer: true },
  { question: "An obtuse angle is more than 90°.", answer: true },
  { question: "A rectangle has four equal sides.", answer: false },
  { question: "A cube has 6 faces.", answer: true },
  { question: "5 + 3 × 2 equals 16.", answer: false },
  { question: "The value of π is approximately 3.14.", answer: true },
  { question: "A line segment has infinite length.", answer: false },
  { question: "Area of a rectangle is length × width.", answer: true },
  { question: "All even numbers are divisible by 2.", answer: true },
  { question: "A circle has 360°.", answer: true },
  { question: "The result of 4² is 8.", answer: false },
  { question: "Volume of a cube is s³ (side × side × side).", answer: true },
  { question: "0 is a natural number.", answer: false },
  { question: "The GCD of 9 and 15 is 3.", answer: true },
  { question: "Perimeter of a square is 4 × side.", answer: true },
  { question: "Two parallel lines never meet.", answer: true },
  { question: "In a fraction, the denominator is the top number.", answer: false },
  { question: "The decimal 0.5 is equal to 1/2.", answer: true },
  { question: "3/4 is smaller than 2/3.", answer: false },
  { question: "Angles in a quadrilateral add up to 360°.", answer: true },
  { question: "The mode is the number that appears most often.", answer: true },
  { question: "An isosceles triangle has all equal sides.", answer: false },
  { question: "A negative × a positive is negative.", answer: true },
  { question: "100 divided by 5 is 15.", answer: false },
  { question: "Every square is a rectangle.", answer: true },
  { question: "A rhombus has four right angles.", answer: false },
  { question: "Mean is the same as average.", answer: true },
  { question: "Multiplying any number by 0 gives 0.", answer: true },
  { question: "In statistics, the range is the difference between highest and lowest values.", answer: true },
  { question: "A decimal can never be written as a fraction.", answer: false },
  { question: "A prism has curved surfaces.", answer: false },
  { question: "In geometry, a point has no size.", answer: true },
  { question: "An equilateral triangle has three equal angles.", answer: true },
  { question: "The fraction 4/8 simplifies to 2/4.", answer: true },
  { question: "An acute angle is greater than 90°.", answer: false },
  { question: "The product of two odd numbers is always odd.", answer: true },
  { question: "A parallelogram has exactly one pair of parallel sides.", answer: false }
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
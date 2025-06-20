const quiz = [
    {
        question: "The derivative of cos(x) is -sin(x).",
        answer: true
    },
    {
        question: "The value of π is exactly 3.14.",
        answer: false
    },
    { 
        question: "The derivative of sin(x) is cos(x).", 
        answer: true 
    },
    { 
        question: "The sum of the angles in a triangle is 180 degrees.", 
        answer: true 
    },
    { 
        question: "If a function is continuous, it must be differentiable.", 
        answer: false 
    },
    { 
        question: "π is a rational number.", 
        answer: false 
    },
    { 
        question: "A square is always a rectangle.",   
        answer: true 
    },
    {
        question: "The integral of 1/x is ln|x| + C.",
        answer: true
    },
    {  
        question: "log(1000) in base 10 is 2.", 
        answer: false 
    },
    { 
        question: "If f(x) = x², then f(-x) = f(x).", 
        answer: true 
    },
    { 
        question: "The cosine of 0° is 0.", 
        answer: false 
    }, 
    { 
        question: "The quadratic formula is used to solve linear equations.", 
        answer: false 
    },
    { 
        question: "The limit of 1/x as x approaches infinity is 0.", 
        answer: true 
    },
    { 
        question: "The function f(x) = 2x + 1 is linear.", 
        answer: true 
    },
    { 
        question: "tan(45°) = 1.", 
        answer: true 
    },
    { 
        question: "An even number is divisible by 3.", 
        answer: false 
    },
    { 
        question: "The square root of 49 is 7.", 
        answer: true 
    },
    {  
        question: "A parallelogram always has four equal sides.", 
        answer: false 
    },
    { 
        question: "In a right triangle, a² + b² = c².", 
        answer: true 
    },
    { 
        question: "The value of e (Euler’s number) is approximately 2.718.", 
        answer: true 
    },
    { 
        question: "All prime numbers are odd.", 
        answer: false  
    },
    { 
        question: "cos(90°) = 0.", 
        answer: true 
    },
    { 
        question: "The derivative of a constant is always zero.", 
        answer: true 
    },
    { 
        question: "The graph of y = x² is a straight line.", 
        answer: false 
    },
    { 
        question: "ln(1) = 0.", 
        answer: true 
    },
    { 
        question: "The sine function is odd.", 
        answer: true 
    },
    { 
        question: "The tangent function is undefined at 90°.", 
        answer: true 
    },
    { 
        question: "The determinant of a 2x2 matrix [a b; c d] is ad - bc.", 
        answer: true 
    },
    { 
        question: "The domain of √x is all real numbers.", 
        answer: false 
    }, 
    { 
        question: "A function can have two outputs for one input.", 
        answer: false 
    },
    { 
        question: "If two lines are perpendicular, their slopes are negative reciprocals.", 
        answer: true 
    },
    { 
        question: "In the unit circle, the radius is 1.", 
        answer: true 
    },
    {  
        question: "logₐ(1) = 1 for all a > 0.", 
        answer: false 
    }, 
    { 
        question: "A function is even if f(x) = f(-x).", 
        answer: true 
    },
    { 
        question: "An identity matrix has all 1's.", 
        answer: false 
    }, 
    { 
        question: "The cube root of 8 is 2.", 
        answer: true 
    },
    { 
        question: "The mean and median of a data set are always equal.", 
        answer: false 
    },
    { 
        question: "A linear equation in two variables can be graphed as a straight line.", 
        answer: true 
    },
    {
        question: "The function f(x) = x² is decreasing for all x.",
        answer: false
    },
    {
        question: "The limit of sin(x)/x as x approaches 0 is 1.",
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
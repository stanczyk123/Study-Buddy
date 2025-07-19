const quiz = [
  { question: "HTML is a programming language.", answer: false },
  { question: "A byte consists of 8 bits.", answer: true },
  { question: "The CPU is responsible for processing data.", answer: true },
  { question: "RAM is a permanent storage device.", answer: false },
  { question: "LAN stands for Local Area Network.", answer: true },
  { question: "Python is a high-level programming language.", answer: true },
  { question: "The Internet and the World Wide Web are the same.", answer: false },
  { question: "CSS is used to style HTML documents.", answer: true },
  { question: "An algorithm is a step-by-step procedure to solve a problem.", answer: true },
  { question: "SSD is slower than HDD.", answer: false },
  { question: "The binary number system uses only 1s and 0s.", answer: true },
  { question: "JavaScript is only used for backend programming.", answer: false },
  { question: "Computers operate using electricity and binary logic.", answer: true },
  { question: "A compiler translates source code into machine code.", answer: true },
  { question: "IP address is used to identify devices on a network.", answer: true },
  { question: "Cloud computing requires no internet connection.", answer: false },
  { question: "A spreadsheet is used for calculations and data analysis.", answer: true },
  { question: "Database stores structured information.", answer: true },
  { question: "RAM stands for Random Access Memory.", answer: true },
  { question: "A firewall helps protect a computer from viruses.", answer: false }, // more accurate: firewall protects network, antivirus fights viruses
  { question: "Open-source software can be modified by anyone.", answer: true },
  { question: "The function of a router is to connect different networks.", answer: true },
  { question: "Microsoft Word is used for video editing.", answer: false },
  { question: "Phishing is a type of cyber attack.", answer: true },
  { question: "LANs typically cover large geographical areas.", answer: false },
  { question: "Operating systems manage hardware and software.", answer: true },
  { question: "Syntax errors occur during program execution.", answer: false }, // they occur at compile time
  { question: "An IP address can be dynamic or static.", answer: true },
  { question: "Computer viruses can replicate themselves.", answer: true },
  { question: "A web browser is used to access websites.", answer: true },
  { question: "Email stands for Electronic Mail.", answer: true },
  { question: "AI stands for Artificial Intelligence.", answer: true },
  { question: "ROM is volatile memory.", answer: false },
  { question: "Google Chrome is an operating system.", answer: false },
  { question: "The function of a loop is to repeat a set of instructions.", answer: true },
  { question: "Binary 1010 equals decimal 10.", answer: true },
  { question: "A URL is the address of a web page.", answer: true },
  { question: "C is a markup language.", answer: false },
  { question: "Phishing and spoofing are types of cybercrime.", answer: true },
  { question: "Machine learning is part of artificial intelligence.", answer: true }
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
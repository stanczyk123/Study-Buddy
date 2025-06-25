const quiz = [
  { question: "HTML is a programming language.", answer: false },
  { question: "RAM is a type of volatile memory.", answer: true },
  { question: "A compiler translates high-level code into machine code.", answer: true },
  { question: "An IP address uniquely identifies a device on a network.", answer: true },
  { question: "A virus is a type of hardware.", answer: false },
  { question: "Binary code uses only 1 and 0.", answer: true },
  { question: "A database can store and manage large amounts of data.", answer: true },
  { question: "The CPU is responsible for executing instructions in a computer.", answer: true },
  { question: "Wi-Fi is a type of wired network.", answer: false },
  { question: "Linux is an open-source operating system.", answer: true },
  { question: "CSS is used to add interactivity to a webpage.", answer: false },
  { question: "Phishing is a type of cyber attack.", answer: true },
  { question: "The main function of an operating system is to manage hardware and software.", answer: true },
  { question: "SSD stands for Solid State Drive.", answer: true },
  { question: "The internet and the World Wide Web are the same thing.", answer: false },
  { question: "Encryption protects data from unauthorized access.", answer: true },
  { question: "Python is a markup language.", answer: false },
  { question: "An algorithm is a step-by-step procedure to solve a problem.", answer: true },
  { question: "HTTP stands for HyperText Transfer Protocol.", answer: true },
  { question: "The Control Unit is part of the CPU.", answer: true },
  { question: "Files stored in the cloud can be accessed from any device with internet.", answer: true },
  { question: "A Trojan horse is a security software.", answer: false },
  { question: "Flowcharts help represent algorithms visually.", answer: true },
  { question: "Firewall software blocks unauthorized network access.", answer: true },
  { question: "A loop is used to repeat a set of instructions in programming.", answer: true },
  { question: "Google Chrome is an example of an operating system.", answer: false },
  { question: "LAN stands for Local Area Network.", answer: true },
  { question: "QR codes can only store text data.", answer: false },
  { question: "Every function in C must have a main() function.", answer: true },
  { question: "Digital signals vary continuously over time.", answer: false },
  { question: "The ASCII table is used to represent characters in binary.", answer: true },
  { question: "Object-oriented programming focuses on procedures rather than data.", answer: false },
  { question: "Keyboard and mouse are examples of input devices.", answer: true },
  { question: "The 'if' statement is used for looping.", answer: false },
  { question: "Cache memory is faster than RAM.", answer: true },
  { question: "Cyberbullying is a form of ethical use of technology.", answer: false },
  { question: "Data in ROM can be modified during normal computer use.", answer: false },
  { question: "Cookies are small pieces of data stored by websites.", answer: true },
  { question: "The command 'mkdir' is used to delete a directory in Linux.", answer: false },
  { question: "Machine language is the lowest level of programming language.", answer: true }
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
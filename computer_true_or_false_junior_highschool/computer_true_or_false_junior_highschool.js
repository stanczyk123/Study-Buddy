const quiz = [
  { question: "The CPU is the brain of the computer.", answer: true },
  { question: "A monitor is an input device.", answer: false },
  { question: "Keyboard is used to input data into a computer.", answer: true },
  { question: "RAM stores data permanently.", answer: false },
  { question: "A printer is used to produce hard copy output.", answer: true },
  { question: "Software is the physical part of a computer.", answer: false },
  { question: "Windows and Linux are examples of operating systems.", answer: true },
  { question: "A mouse is an output device.", answer: false },
  { question: "Microsoft Word is used to process text.", answer: true },
  { question: "The internet and the World Wide Web are exactly the same.", answer: false },
  { question: "HTML is used to create web pages.", answer: true },
  { question: "A virus is a type of hardware.", answer: false },
  { question: "Ctrl + C is the shortcut to copy.", answer: true },
  { question: "The function of antivirus is to clean keyboard buttons.", answer: false },
  { question: "A scanner is used to convert physical documents into digital form.", answer: true },
  { question: "You can only save documents on a hard disk.", answer: false },
  { question: "Google Chrome is a web browser.", answer: true },
  { question: "A file extension .jpg is usually for video files.", answer: false },
  { question: "Computer programs are also called software.", answer: true },
  { question: "A CPU and a processor are the same thing.", answer: true },
  { question: "The Esc key is used to confirm commands.", answer: false },
  { question: "Ctrl + V is the shortcut for paste.", answer: true },
  { question: "Computer viruses can slow down the system.", answer: true },
  { question: "ROM can be written and erased like RAM.", answer: false },
  { question: "Spreadsheet applications are used to calculate and organize data.", answer: true },
  { question: "The delete key is used to undo the last action.", answer: false },
  { question: "A projector displays images onto a large surface.", answer: true },
  { question: "Coding is the process of writing instructions for computers.", answer: true },
  { question: "The cloud is a type of internet-based storage.", answer: true },
  { question: "Notepad is a programming language.", answer: false },
  { question: "Ctrl + Z is used to undo the last action.", answer: true },
  { question: "USB stands for Universal Serial Bus.", answer: true },
  { question: "Bluetooth is used for wired communication.", answer: false },
  { question: "Spreadsheet cells are arranged in rows and columns.", answer: true },
  { question: "Malware and software mean the same thing.", answer: false },
  { question: "Computer networks allow devices to communicate and share data.", answer: true },
  { question: "The internet works without IP addresses.", answer: false },
  { question: "Cyberbullying is a negative use of technology.", answer: true },
  { question: "Typing speed is measured in characters per minute (CPM).", answer: true },
  { question: "Smartphones cannot be considered computers.", answer: false }
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
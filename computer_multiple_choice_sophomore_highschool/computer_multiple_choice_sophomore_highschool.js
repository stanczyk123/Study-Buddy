const quiz = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Central Programming Utility", "Computer Primary Unit", "Central Performance Unit"],
    answer: 0
  },
  {
    question: "Which device is used to store data permanently?",
    options: ["RAM", "ROM", "Hard Drive", "Cache"],
    answer: 2
  },
  {
    question: "Which of the following is NOT an input device?",
    options: ["Mouse", "Keyboard", "Printer", "Scanner"],
    answer: 2
  },
  {
    question: "Which of these is a high-level programming language?",
    options: ["Assembly", "Python", "Machine code", "Binary"],
    answer: 1
  },
  {
    question: "Which language is used to design the structure of a web page?",
    options: ["CSS", "Python", "HTML", "Java"],
    answer: 2
  },
  {
    question: "What is the main function of an operating system?",
    options: ["Send emails", "Manage hardware and software", "Compile code", "Edit videos"],
    answer: 1
  },
  {
    question: "What is a computer virus?",
    options: ["A game", "A hardware", "A malicious software", "An antivirus program"],
    answer: 2
  },
  {
    question: "Which of these is used for graphic design?",
    options: ["Microsoft Excel", "Adobe Photoshop", "Windows Media Player", "Mozilla Firefox"],
    answer: 1
  },
  {
    question: "What does LAN stand for?",
    options: ["Large Area Network", "Long Access Network", "Local Area Network", "Limited Access Network"],
    answer: 2
  },
  {
    question: "Which component is responsible for processing all instructions in a computer?",
    options: ["RAM", "Hard Disk", "CPU", "Monitor"],
    answer: 2
  },

  {
    question: "Which file extension is used for a web page?",
    options: [".exe", ".docx", ".html", ".mp3"],
    answer: 2
  },
  {
    question: "Which one is a browser?",
    options: ["Google Chrome", "Microsoft Word", "Adobe Reader", "Excel"],
    answer: 0
  },
  {
    question: "What is the function of RAM?",
    options: ["Store data permanently", "Run applications temporarily", "Print documents", "Access the internet"],
    answer: 1
  },
  {
    question: "Which of these is an example of a search engine?",
    options: ["Google", "Yahoo", "Bing", "All of the above"],
    answer: 3
  },
  {
    question: "Which of the following is an output device?",
    options: ["Keyboard", "Monitor", "Mouse", "Scanner"],
    answer: 1
  },
  {
    question: "Which software is used to write code?",
    options: ["Code Editor", "Media Player", "Paint", "PowerPoint"],
    answer: 0
  },
  {
    question: "Which of the following is a type of computer network?",
    options: ["LAN", "WAN", "MAN", "All of the above"],
    answer: 3
  },
  {
    question: "What is the function of a router?",
    options: ["Displays websites", "Connects networks", "Types documents", "Stores data"],
    answer: 1
  },
  {
    question: "Which tool is used for presentations?",
    options: ["Word", "PowerPoint", "Excel", "Photoshop"],
    answer: 1
  },
  {
    question: "What is phishing?",
    options: ["Hardware setup", "Email scam", "Software update", "Social media feature"],
    answer: 1
  },

  {
    question: "What is the binary number for decimal 2?",
    options: ["10", "01", "11", "100"],
    answer: 0
  },
  {
    question: "Which software is used for spreadsheets?",
    options: ["Excel", "Word", "Paint", "VLC Player"],
    answer: 0
  },
  {
    question: "Which device is used to connect to the Internet?",
    options: ["Scanner", "Modem", "Printer", "Speaker"],
    answer: 1
  },
  {
    question: "Which is NOT a type of malware?",
    options: ["Worm", "Firewall", "Trojan", "Virus"],
    answer: 1
  },
  {
    question: "Which of the following is a cloud storage service?",
    options: ["Dropbox", "Photoshop", "Excel", "Chrome"],
    answer: 0
  },
  {
    question: "What is the full form of URL?",
    options: ["Uniform Resource Locator", "Universal Record Link", "Unique Redirect Link", "Universal Reference Locator"],
    answer: 0
  },
  {
    question: "Which of these is a valid email address?",
    options: ["@mail.com", "user@gmail", "user@gmail.com", "gmail.com"],
    answer: 2
  },
  {
    question: "Which of the following is NOT an example of software?",
    options: ["Microsoft Office", "Windows", "CPU", "Linux"],
    answer: 2
  },
  {
    question: "Which part of the computer holds data temporarily?",
    options: ["ROM", "Hard disk", "RAM", "Monitor"],
    answer: 2
  },
  {
    question: "Which key combination is used to copy text?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    answer: 1
  },

  {
    question: "Which component connects all parts of a computer?",
    options: ["CPU", "Motherboard", "RAM", "Monitor"],
    answer: 1
  },
  {
    question: "Which file format is used for videos?",
    options: [".mp4", ".mp3", ".jpg", ".txt"],
    answer: 0
  },
  {
    question: "Which of the following stores the BIOS?",
    options: ["RAM", "ROM", "CPU", "Hard Drive"],
    answer: 1
  },
  {
    question: "What does HTTP stand for?",
    options: ["Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Terminal Transfer Protocol"],
    answer: 1
  },
  {
    question: "Which one is an open-source operating system?",
    options: ["Windows", "macOS", "Linux", "iOS"],
    answer: 2
  },
  {
    question: "Which software is used to edit text?",
    options: ["Notepad", "Paint", "PowerPoint", "Photoshop"],
    answer: 0
  },
  {
    question: "What is a firewall used for?",
    options: ["Drawing", "Printing", "Network security", "Document scanning"],
    answer: 2
  },
  {
    question: "Which is a valid web domain?",
    options: [".com", ".html", ".docx", ".jpg"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a computer programming language?",
    options: ["C++", "Python", "JavaScript", "Microsoft Word"],
    answer: 3
  },
  {
    question: "What is the purpose of antivirus software?",
    options: ["Connect to Wi-Fi", "Design websites", "Protect from malware", "Edit documents"],
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
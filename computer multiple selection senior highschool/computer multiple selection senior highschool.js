const quiz = [
  {
    question: "Which of the following are examples of input devices?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are storage devices?",
    options: ["Hard Disk", "RAM", "SSD", "CD-ROM"],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which components are part of the CPU?",
    options: ["ALU", "CU", "RAM", "Registers"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are programming paradigms?",
    options: ["Procedural", "Object-Oriented", "Functional", "Mechanical"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are examples of operating systems?",
    options: ["Windows", "Linux", "Android", "Chrome"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are advantages of LAN?",
    options: ["High speed", "Low cost", "Long distance", "Data sharing"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are programming data types?",
    options: ["Integer", "Boolean", "Character", "Compile"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which devices are used in networking?",
    options: ["Router", "Switch", "Monitor", "Modem"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are examples of application software?",
    options: ["Microsoft Word", "Photoshop", "Windows", "Excel"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are functions of an operating system?",
    options: ["Memory management", "File management", "Hardware design", "Task scheduling"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are logic gates?",
    options: ["AND", "OR", "XOR", "NAND"],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "Which are characteristics of high-level programming languages?",
    options: ["Closer to human language", "Portable", "Machine code format", "Easier to debug"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which protocols are used on the Internet?",
    options: ["HTTP", "FTP", "SMTP", "PPT"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are web browsers?",
    options: ["Chrome", "Firefox", "Google", "Safari"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are threats to cybersecurity?",
    options: ["Phishing", "Malware", "Firewalls", "Trojan"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are markup languages?",
    options: ["HTML", "XML", "CSS", "JSON"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are database models?",
    options: ["Relational", "Hierarchical", "Network", "Linear"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are correct HTML tags?",
    options: ["<p>", "<h1>", "<br>", "<image>"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are conditional statements in programming?",
    options: ["if", "else", "for", "while"],
    correctAnswers: [0, 1]
  },
  {
    question: "Which are loop types in most programming languages?",
    options: ["for", "while", "do-while", "loop-until"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are types of networks?",
    options: ["LAN", "WAN", "PAN", "FTP"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which devices are considered output devices?",
    options: ["Monitor", "Printer", "Speakers", "Keyboard"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following can be found in a database table?",
    options: ["Rows", "Columns", "Records", "Attributes"],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "Which of these file extensions are for image files?",
    options: [".jpg", ".png", ".doc", ".bmp"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are mobile operating systems?",
    options: ["Android", "iOS", "Symbian", "Windows XP"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are valid CSS properties?",
    options: ["color", "font-size", "text-align", "loop"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are JavaScript frameworks?",
    options: ["React", "Vue", "Laravel", "Angular"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are types of cyberattacks?",
    options: ["DDoS", "Ransomware", "SQL Injection", "JavaScript"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are software development methodologies?",
    options: ["Waterfall", "Agile", "Scrum", "Binary"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are programming logic errors?",
    options: ["Infinite loop", "Wrong output", "Syntax error", "Divide by zero"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are server-side programming languages?",
    options: ["PHP", "Node.js", "Java", "CSS"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which components are required for a basic computer system?",
    options: ["CPU", "RAM", "Monitor", "Power supply"],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "Which of these are cloud storage services?",
    options: ["Google Drive", "Dropbox", "OneDrive", "Spotify"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are features of good algorithms?",
    options: ["Finite", "Effective", "Ambiguous", "Input/Output"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are text editors used in programming?",
    options: ["Notepad++", "VS Code", "Sublime Text", "MS Excel"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these use binary number systems?",
    options: ["Computers", "Digital watches", "Transistors", "Humans"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are software licenses?",
    options: ["Open source", "Proprietary", "Trial", "Malware"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are popular search engines?",
    options: ["Google", "Bing", "Yahoo", "Tor"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are parts of a URL?",
    options: ["Protocol", "Domain", "Path", "HTML"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which file formats are used for video?",
    options: [".mp4", ".avi", ".mov", ".txt"],
    correctAnswers: [0, 1, 2]
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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "option";
    checkbox.value = index;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + option));
    optionsDiv.appendChild(label);
  });

  document.getElementById("right-or-wrong").innerText = "";
}

function submitAnswer() {
  const selectedCheckboxes = document.querySelectorAll('input[name="option"]:checked');
  const selectedValues = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value)).sort();
  const correctAnswers = quiz[currentQuestion].correctAnswers.slice().sort();

  const feedback = document.getElementById("right-or-wrong");

  const isCorrect = selectedValues.length === correctAnswers.length &&
    selectedValues.every((val, index) => val === correctAnswers[index]);

  // Convert correct answer indexes to text (e.g., "2", "3", "5")
  const correctText = correctAnswers.map(i => quiz[currentQuestion].options[i]).join(", ");

  if (isCorrect) {
    score++;
    feedback.innerText = `✅ Correct!`;
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Wrong!\nCorrect answer: ${correctText}`;
    feedback.style.color = "red";
  }

  // Move to next question after 1.5s
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h2>You scored ${score} out of ${quiz.length}</h2>`;
}

window.onload = showQuestion;
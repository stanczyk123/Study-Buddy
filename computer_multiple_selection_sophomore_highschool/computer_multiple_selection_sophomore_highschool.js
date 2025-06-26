const quiz = [
  {
    question: "Which of the following are input devices?",
    options: ["Keyboard", "Mouse", "Printer", "Scanner"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are types of computer memory?",
    options: ["RAM", "SSD", "ROM", "CPU"],
    correctAnswers: [0, 2]
  },
  {
    question: "Which of the following are programming languages?",
    options: ["Python", "Java", "HTML", "Photoshop"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which devices can be used to store data?",
    options: ["Hard Disk", "USB Flash Drive", "Monitor", "SSD"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are operating systems?",
    options: ["Windows", "Linux", "Chrome", "MacOS"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which components are found inside the CPU?",
    options: ["ALU", "Control Unit", "RAM", "Cache"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are types of software?",
    options: ["System Software", "Application Software", "Compiler", "Router"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are advantages of using a computer network?",
    options: ["File Sharing", "Resource Sharing", "Faster Internet", "Hardware Damage"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are examples of cloud storage services?",
    options: ["Google Drive", "Dropbox", "OneDrive", "MS Paint"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are logic gates?",
    options: ["AND", "OR", "NOT", "SUM"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are examples of data types in programming?",
    options: ["Integer", "String", "Boolean", "Module"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are examples of application software?",
    options: ["Microsoft Word", "Excel", "Google Chrome", "BIOS"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which devices are considered output devices?",
    options: ["Monitor", "Speaker", "Printer", "Keyboard"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are types of topologies in computer networks?",
    options: ["Star", "Bus", "Tree", "Chain"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are security threats in computers?",
    options: ["Virus", "Worm", "Trojan", "Firewall"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are open-source operating systems?",
    options: ["Ubuntu", "Linux Mint", "Windows 10", "Fedora"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are valid loop types in most programming languages?",
    options: ["for", "while", "until", "next"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are examples of internet browsers?",
    options: ["Mozilla Firefox", "Google Chrome", "Safari", "Notepad++"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are common file extensions?",
    options: [".docx", ".jpg", ".exe", ".html"],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "Which of these are high-level programming languages?",
    options: ["Python", "Java", "C++", "Binary"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are used to protect data?",
    options: ["Antivirus", "Firewall", "Encryption", "Spam"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of the following are mobile operating systems?",
    options: ["Android", "iOS", "Windows XP", "Symbian"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of the following are relational database management systems?",
    options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are examples of structured data?",
    options: ["Tables", "Spreadsheets", "Databases", "Videos"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are features of object-oriented programming?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Iteration"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are binary numbers?",
    options: ["1010", "1101", "1234", "0011"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which of these are used for internet communication?",
    options: ["Email", "Chat", "FTP", "RAM"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are markup languages?",
    options: ["HTML", "XML", "CSS", "JS"],
    correctAnswers: [0, 1]
  },
  {
    question: "Which of these are examples of IDEs?",
    options: ["Visual Studio", "NetBeans", "Notepad", "Eclipse"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are common data structures?",
    options: ["Array", "Linked List", "Stack", "Function"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are types of cyberattacks?",
    options: ["Phishing", "DDoS", "Malware", "Backup"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are important qualities of algorithms?",
    options: ["Correctness", "Efficiency", "Complexity", "Ambiguity"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are examples of operating systems for servers?",
    options: ["Ubuntu Server", "CentOS", "Red Hat", "Windows XP"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which are types of number systems?",
    options: ["Binary", "Octal", "Decimal", "Visual"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these support wireless communication?",
    options: ["Wi-Fi", "Bluetooth", "Ethernet", "NFC"],
    correctAnswers: [0, 1, 3]
  },
  {
    question: "Which are programming paradigms?",
    options: ["Procedural", "Object-Oriented", "Functional", "Sequential"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are network devices?",
    options: ["Router", "Switch", "Hub", "Compiler"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these are compression formats?",
    options: [".zip", ".rar", ".7z", ".mp3"],
    correctAnswers: [0, 1, 2]
  },
  {
    question: "Which of these use IP addresses?",
    options: ["Websites", "Servers", "Printers (networked)", "RAM"],
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
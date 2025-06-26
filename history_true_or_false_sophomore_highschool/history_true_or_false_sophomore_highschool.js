const quiz = [
  {
    question: "The Youth Pledge was declared on October 28, 1928.",
    answer: true
  },
  {
    question: "The VOC was established by the Dutch to control spice trade in Asia.",
    answer: true
  },
  {
    question: "Majapahit was an Islamic kingdom in Indonesia.",
    answer: false
  },
  {
    question: "Soekarno and Hatta proclaimed Indonesian independence on August 17, 1945.",
    answer: true
  },
  {
    question: "Sumpah Pemuda contained a pledge to uphold one language, one nation, and one homeland.",
    answer: true
  },
  {
    question: "The Diponegoro War was fought against the British colonial government.",
    answer: false
  },
  {
    question: "Cut Nyak Dien is known as a heroine from Aceh.",
    answer: true
  },
  {
    question: "BPUPKI was established by the Dutch to prepare Indonesia’s independence.",
    answer: false
  },
  {
    question: "The Cultivation System (Tanam Paksa) was implemented during the Dutch colonial era.",
    answer: true
  },
  {
    question: "PETA was a military force formed by Japan during the occupation of Indonesia.",
    answer: true
  },
  {
    question: "Indonesia was occupied by Japan from 1942 to 1945.",
    answer: true
  },
  {
    question: "VOC stands for Vereenigde Oostindische Compagnie.",
    answer: true
  },
  {
    question: "The Renville Agreement was signed between Indonesia and the United Nations.",
    answer: false
  },
  {
    question: "The Indonesian flag was first raised on August 17, 1945.",
    answer: true
  },
  {
    question: "Sriwijaya was a Hindu kingdom located in Sumatra.",
    answer: false
  },
  {
    question: "The Ethical Policy was introduced by the Dutch to improve the welfare of the Indonesian people.",
    answer: true
  },
  {
    question: "Sukarno was Indonesia’s first vice president.",
    answer: false
  },
  {
    question: "R.A. Kartini is known for advocating women’s education.",
    answer: true
  },
  {
    question: "The Linggadjati Agreement recognized the de facto authority of the Republic of Indonesia.",
    answer: true
  },
  {
    question: "The Indonesian Constitution (UUD 1945) was drafted before independence.",
    answer: true
  },
  {
    question: "Teuku Umar fought against the Japanese in Aceh.",
    answer: false
  },
  {
    question: "The principle of democracy was already adopted during the VOC era.",
    answer: false
  },
  {
    question: "The term 'Proklamasi' refers to the declaration of Indonesian independence.",
    answer: true
  },
  {
    question: "Budi Utomo was the first Indonesian nationalist organization.",
    answer: true
  },
  {
    question: "Tan Malaka was a colonial governor during the Dutch era.",
    answer: false
  },
  {
    question: "The G30S/PKI event occurred in the 1960s.",
    answer: true
  },
  {
    question: "Indonesia gained full recognition from the Dutch in 1949.",
    answer: true
  },
  {
    question: "The first general election in Indonesia was held in 1945.",
    answer: false
  },
  {
    question: "The Indische Partij promoted unity among Indonesians.",
    answer: true
  },
  {
    question: "Patimura led a rebellion in Maluku against the Dutch.",
    answer: true
  },
  {
    question: "The Dutch established the Cultivation System to support native farmers.",
    answer: false
  },
  {
    question: "Sumpah Pemuda was declared by the Dutch authorities.",
    answer: false
  },
  {
    question: "The kingdom of Demak was one of the earliest Islamic kingdoms in Java.",
    answer: true
  },
  {
    question: "The Renville Agreement was more beneficial to Indonesia than the Linggadjati Agreement.",
    answer: false
  },
  {
    question: "Indonesia became a member of the United Nations in 1945.",
    answer: false
  },
  {
    question: "The national revolution in Indonesia lasted until 1949.",
    answer: true
  },
  {
    question: "Taman Siswa was founded by Ki Hajar Dewantara.",
    answer: true
  },
  {
    question: "The VOC was dissolved in 1908.",
    answer: false
  },
  {
    question: "The Indonesian national movement emerged in the early 20th century.",
    answer: true
  },
  {
    question: "The Dutch recognized Indonesia's independence immediately in 1945.",
    answer: false
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
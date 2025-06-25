const quiz = [
  { question: "Indonesia proclaimed its independence on August 17, 1945.", answer: true },
  { question: "Sukarno was the first President of Indonesia.", answer: true },
  { question: "BPUPKI was formed by the Japanese to prepare for Indonesian independence.", answer: true },
  { question: "The Youth Pledge (Sumpah Pemuda) was declared on May 20, 1908.", answer: false },
  { question: "VOC was a British trading company in Indonesia.", answer: false },
  { question: "Ki Hajar Dewantara is known as the Father of National Education.", answer: true },
  { question: "R.A. Kartini fought for women's rights in Indonesia.", answer: true },
  { question: "The Majapahit Kingdom reached its peak under Gadjah Mada.", answer: true },
  { question: "The capital of the Sriwijaya Kingdom was in Palembang.", answer: true },
  { question: "The Diponegoro War lasted from 1825 to 1830.", answer: true },
  { question: "Pancasila was introduced by Mohammad Hatta.", answer: false },
  { question: "The Battle of Surabaya happened on November 10, 1945.", answer: true },
  { question: "Trowulan was the capital of the Majapahit Kingdom.", answer: true },
  { question: "Sarekat Islam was a religious organization founded by the Dutch.", answer: false },
  { question: "Indonesia was colonized by the Dutch, Portuguese, British, and Japanese.", answer: true },
  { question: "The Proclamation of Indonesian Independence was read at Jalan Pegangsaan Timur No.56.", answer: true },
  { question: "Sutan Sjahrir was the typist of the Proclamation text.", answer: false },
  { question: "The Cultivation System (Tanam Paksa) was introduced by the Japanese.", answer: false },
  { question: "The Portuguese arrived in Malacca in 1511.", answer: true },
  { question: "Youth Pledge Day is celebrated every 28 October.", answer: true },
  { question: "The Sriwijaya Kingdom was a maritime power in Sumatra.", answer: true },
  { question: "Cut Nyak Dien was a female hero from Aceh.", answer: true },
  { question: "Muhammadiyah was founded by Hasyim Asy’ari.", answer: false },
  { question: "The Japanese occupation of Indonesia began in 1942.", answer: true },
  { question: "The Netherlands recognized Indonesian independence in 1945.", answer: false },
  { question: "The Mataram Kingdom was located in Central Java.", answer: true },
  { question: "Hayam Wuruk was a king of the Singhasari Kingdom.", answer: false },
  { question: "Budi Utomo was the first modern nationalist organization in Indonesia.", answer: true },
  { question: "Taman Siswa was founded by Ki Hajar Dewantara.", answer: true },
  { question: "Tan Malaka was a colonial governor.", answer: false },
  { question: "The 1945 Constitution was the first constitution of Indonesia.", answer: true },
  { question: "Indonesia became a member of the United Nations in 1945.", answer: false },
  { question: "The Dutch established the VOC in 1602.", answer: true },
  { question: "Proklamasi was declared in Yogyakarta.", answer: false },
  { question: "The Ethical Policy aimed to improve native welfare.", answer: true },
  { question: "The Japanese helped promote Indonesian nationalism.", answer: true },
  { question: "Imam Bonjol fought in the Padri War.", answer: true },
  { question: "The Borobudur temple was built during the Majapahit period.", answer: false },
  { question: "R.A. Kartini was born in Jepara.", answer: true },
  { question: "Mohammad Yamin contributed ideas for the Indonesian Constitution.", answer: true }
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
const quiz = [
  { question: "The basic unit of life is the cell.", answer: true },
  { question: "Humans can breathe using their skin.", answer: false },
  { question: "Photosynthesis requires sunlight, carbon dioxide, and water.", answer: true },
  { question: "All living things have the ability to move.", answer: false },
  { question: "The heart is part of the circulatory system.", answer: true },
  { question: "Plants absorb water through their leaves.", answer: false },
  { question: "Amoeba is a multicellular organism.", answer: false },
  { question: "Red blood cells carry oxygen in the blood.", answer: true },
  { question: "Insects breathe through their lungs.", answer: false },
  { question: "The digestive system breaks down food into nutrients.", answer: true },
  { question: "Only animals reproduce.", answer: false },
  { question: "The lungs are the main organs for respiration in humans.", answer: true },
  { question: "The brain controls the nervous system.", answer: true },
  { question: "Fish reproduce by laying eggs.", answer: true },
  { question: "Fungi can make their own food.", answer: false },
  { question: "Herbivores eat only plants.", answer: true },
  { question: "Reptiles are warm-blooded animals.", answer: false },
  { question: "The nucleus controls the activities of a cell.", answer: true },
  { question: "DNA is found in the cell membrane.", answer: false },
  { question: "Plants do not need oxygen.", answer: false },
  { question: "Bones help support the body structure.", answer: true },
  { question: "The skin is the largest organ in the human body.", answer: true },
  { question: "Viruses can be classified as living organisms.", answer: false },
  { question: "Metamorphosis occurs in frogs and butterflies.", answer: true },
  { question: "Chlorophyll is found in plant roots.", answer: false },
  { question: "White blood cells help fight infection.", answer: true },
  { question: "All bacteria are harmful.", answer: false },
  { question: "Stomata are found on the underside of leaves.", answer: true },
  { question: "The liver filters waste from the blood.", answer: false },
  { question: "Oxygen is released during photosynthesis.", answer: true },
  { question: "Nutrients are absorbed in the small intestine.", answer: true },
  { question: "The reproductive system produces hormones.", answer: true },
  { question: "The kidneys help regulate water balance.", answer: true },
  { question: "Vertebrates have a backbone.", answer: true },
  { question: "Bacteria reproduce by binary fission.", answer: true },
  { question: "An ecosystem only includes animals.", answer: false },
  { question: "Tissues are made of similar cells working together.", answer: true },
  { question: "Spiders are insects.", answer: false },
  { question: "Organisms adapt to their environment to survive.", answer: true },
  { question: "The pancreas helps in digestion and regulates blood sugar.", answer: true }
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
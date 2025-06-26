const quiz= [
  { question: "A narrative text is written to entertain the reader.", answer: true },
  { question: "The past tense of 'run' is 'runned'.", answer: false },
  { question: "An adjective describes a noun.", answer: true },
  { question: "The word 'quickly' is an adverb.", answer: true },
  { question: "Recount texts tell about future plans.", answer: false },
  { question: "'He go to school every day.' is a correct sentence.", answer: false },
  { question: "A procedure text explains how to do something.", answer: true },
  { question: "The modal 'must' shows obligation.", answer: true },
  { question: "'Although' is used to show contrast.", answer: true },
  { question: "In reported speech, 'She says she is happy' is present tense.", answer: true },
  { question: "'Much' is used with countable nouns.", answer: false },
  { question: "A descriptive text describes a person, place, or thing.", answer: true },
  { question: "The passive voice of 'They eat cake' is 'Cake eats by them'.", answer: false },
  { question: "'Could' is the past form of 'can'.", answer: true },
  { question: "'He is tallest than me.' is a correct sentence.", answer: false },
  { question: "An analytical exposition text presents arguments and opinions.", answer: true },
  { question: "An imperative sentence gives a command.", answer: true },
  { question: "'Because' is used to express cause.", answer: true },
  { question: "A formal letter usually begins with 'Hi bro!'", answer: false },
  { question: "The phrase 'take a nap' means to sleep briefly during the day.", answer: true },
  { question: "The verb in 'She has finished her work' is in present perfect tense.", answer: true },
  { question: "A news item text reports an actual event.", answer: true },
  { question: "'He doesn't likes coffee.' is grammatically correct.", answer: false },
  { question: "The synonym of 'angry' is 'furious'.", answer: true },
  { question: "A narrative text has orientation, complication, and resolution.", answer: true },
  { question: "'They was playing football.' is correct.", answer: false },
  { question: "'Would you like some tea?' is an offer.", answer: true },
  { question: "A descriptive text always uses future tense.", answer: false },
  { question: "'It is raining' is present continuous tense.", answer: true },
  { question: "'An apple a day keeps the doctor away' is a warning.", answer: false },
  { question: "In formal situations, it's appropriate to say 'What's up?'", answer: false },
  { question: "'He is a honest man.' is correct.", answer: false },
  { question: "A recount text is usually written in chronological order.", answer: true },
  { question: "'Too' and 'also' have similar meanings in some contexts.", answer: true },
  { question: "'Should' is stronger than 'must'.", answer: false },
  { question: "'I had studied before the test started.' is in past perfect tense.", answer: true },
  { question: "Gerund is the -ing form used as a noun.", answer: true },
  { question: "The opposite of 'generous' is 'stingy'.", answer: true },
  { question: "'Don't forget to do your homework!' is a suggestion.", answer: false },
  { question: "'Each student must bring their own book.' is correct.", answer: true }
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
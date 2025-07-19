const quiz = [
  { question: "The word 'beautiful' is an adjective.", answer: true },
  { question: "A noun describes an action.", answer: false },
  { question: "The past tense of 'go' is 'went'.", answer: true },
  { question: "‘They is happy’ is a grammatically correct sentence.", answer: false },
  { question: "An interrogative sentence asks a question.", answer: true },
  { question: "‘Quickly’ is an adjective.", answer: false },
  { question: "‘My father works in a hospital.’ is in the present tense.", answer: true },
  { question: "A paragraph always starts with a capital letter.", answer: true },
  { question: "The word 'library' is a verb.", answer: false },
  { question: "‘Have been’ is used in present perfect continuous tense.", answer: true },
  { question: "‘He has a car’ is in simple past tense.", answer: false },
  { question: "A narrative text tells a story.", answer: true },
  { question: "‘However’ is a conjunction.", answer: false },
  { question: "The antonym of ‘strong’ is ‘weak’.", answer: true },
  { question: "‘Would’ is a modal verb.", answer: true },
  { question: "The correct plural of ‘mouse’ is ‘mouses’.", answer: false },
  { question: "‘Eating’ is a gerund.", answer: true },
  { question: "The word 'and' connects two words or clauses.", answer: true },
  { question: "‘He don’t like cake.’ is correct grammar.", answer: false },
  { question: "‘Descriptive’ texts describe something in detail.", answer: true },
  { question: "The synonym of ‘begin’ is ‘end’.", answer: false },
  { question: "A recount text tells past experiences.", answer: true },
  { question: "The sentence ‘She is running fast’ uses present continuous tense.", answer: true },
  { question: "‘Always’ is an adverb of frequency.", answer: true },
  { question: "‘I will goes to school tomorrow.’ is correct.", answer: false },
  { question: "‘Because’ is used to show cause and effect.", answer: true },
  { question: "The modal 'can' expresses ability.", answer: true },
  { question: "‘How to Make Fried Rice’ is an example of a narrative text.", answer: false },
  { question: "‘Am, is, are’ are forms of the verb ‘to be’.", answer: true },
  { question: "A procedure text explains how to do something.", answer: true },
  { question: "‘She is smart and kind.’ is a simple sentence.", answer: false },
  { question: "‘To swim’ is an infinitive form.", answer: true },
  { question: "‘Very’ is an adjective.", answer: false },
  { question: "‘He didn’t came yesterday.’ is grammatically correct.", answer: false },
  { question: "Punctuation is not important in writing.", answer: false },
  { question: "A biography text tells about someone's life.", answer: true },
  { question: "‘Quick’ and ‘slow’ are antonyms.", answer: true },
  { question: "‘Please close the door.’ is an imperative sentence.", answer: true },
  { question: "An expository text is used to entertain.", answer: false },
  { question: "‘I was sleeping when he came.’ is in past continuous tense.", answer: true }
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
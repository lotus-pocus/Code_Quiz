//variables
var startButton = document.querySelector("#start-screen");
var questionWrap = document.querySelector("#question-wrap");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var timeEl = document.querySelector("#time");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");
var finalScore = document.getElementById("final-score");
var time = questions.length * 30;
var answers = questions.answers;
var currentQuestionIndex = 0;
var correctAnswer = 0;



var currentQuestion = questions[currentQuestionIndex];

//set up start button event

startButton.addEventListener('click', startQuiz);

function startQuiz() {

    startButton.setAttribute("class", "hide");

    questionWrap.removeAttribute("class");



    //set up timer

        var totalTime = 150
        //use the set interval method to call a function to be executed every 1000 milliseconds
        timeEl.innerText = totalTime;

        var startTimer = setInterval(function () {
            totalTime--;
            timeEl.innerText = totalTime;

            if (totalTime <= 0) {
                clearInterval(startTimer);

                if (currentQuestionIndex < questions.length -1) {
                    gameOver ();
                }
            }
        }, 1000);


// show questions and choices





questionWrap.innerHTML =`
<div class="question">
<h3>${currentQuestion.title}<h3>
<ul></ul>
</div>
`;

var ul = questionWrap.querySelector('ul');
var choices = questions[currentQuestionIndex].choices;



for (var choice of choices) {
    ul.insertAdjacentHTML('beforeend', `<button>${choice}</button>`);
}

questionWrap.addEventListener('click', function(event) {
    var answer = questions[currentQuestionIndex].answer;
    console.log(event.target.innerText)
})


    // choiceA.innerText = currentQuestion.choices[0];
    // choiceB.innerText = currentQuestion.choices[1];
    // choiceC.innerText = currentQuestion.choices[2];
    // choiceD.innerText = currentQuestion.choices[3];
    
// after the question is answered, show if the answer is correct

function checkAnswer(answers) {
    if (questions[currentQuestionIndex].answers === questions[currentQuestionIndex].choices[answers]) {
        correctAnswer++;
        answerCheck.innerText = "Correct!";

    } else {
        timeLeft -= 10;
        time.innerText = timeLeft;
        answerCheck.innerText = "Wrong! The answer is: " + questions[currentQuestionIndex].answers;
    }

    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(questionWrap[currentQuestionIndex]);
}

function showQuestion(questions) {
questionWrap.innerText = questions.questions;
}


// function chooseA() { checkAnswer(0); }

// function chooseB() { checkAnswer(1); }

// function chooseC() { checkAnswer(2); }

// function chooseD() { checkAnswer(3); }

// choiceA.addEventListener("click", chooseA);
// choiceB.addEventListener("click", chooseB);
// choiceC.addEventListener("click", chooseC);
// choiceD.addEventListener("click", chooseD);


    // for (var i = 0; i < choices.length; i++) {
    //     var choice = choices[i];
    //     var isCorrect = currentQuestion.answer === choice;

    //     choicesOutput.insertAdjacentHTML('beforeend', `
    // <button data-correct=${isCorrect}> ${choice}</button>
    // `)
    //     countDown()

    // }


}

// function countDown() {
//     var totalTime = 150
//     //use the set interval method to call a function to be executed every 1000 milliseconds
//     timeEl.innerText = timeLeft;

//     var timeInterval = setInterval(function () {
//         totalTime--;
//         timeEl.innerText = totalTime;

//         if (totalTime < 0) {
//             clearInterval (timeInterval)
//         }
//     }, 1000);
// }


// function checkAnswer (event) {
//     console.log (event.target);
// }

// choicesOutput.addEventListener('click', checkAnswer);

// startQuiz();

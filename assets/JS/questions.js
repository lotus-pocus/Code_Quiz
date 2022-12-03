var questions = [
    {
        title: 'Inside which HTML element do we put the JavaScript',
        choices: ['<scripting>', '<script>', '<JS>', '<javascript>'],
        answer: '<script>'
    },
    {
        title: 'How do you write "Hello World" in an alert box?',
        choices: ['alert("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");'],
        answer: 'alert("Hello World");'
    },
    {
        title: 'How to write an IF statement in JavaScript',
        choices: ['if i = 5', 'if i ==5 then', 'if i = 5 then', 'if (i === 5)'],
        answers: 'if (i === 5)'
    },
    {
        title: 'How does a FOR loop start?',
        choices: ['for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i <= 5; i++)'],
        answers: 'for (i = 0; i <= 5; i++)'
    },
    {
        title: 'Which operator is used to assign a value to a variable?',
        choices: ['X', '+', '-', '='],
        answers: '='
    }
];

var currentQuestionIndex = 0;
// var startButton = document.querySelector ('#start');
var questionWrap = document.querySelector ('#questions');
var questionTitle = document.querySelector ('#question-title');
var choicesOutput = document.querySelector ('#choices');

// startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // startButton.classList.add('hide');

    var currentQuestion = questions[currentQuestionIndex];
    var choices = questions.currentQuestion.choices;

    questionTitle.innerText = currentQuestion.title;

    for (var i=0; i < choices.length; i++) {
    var choice = choices [i];
    var isCorrect = currentQuestion.answer === choice;

    choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}> ${choice} </button>
    `)
    }

    questionWrap.classList.remove('hide');
}

startQuiz ();


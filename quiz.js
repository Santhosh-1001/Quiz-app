const questions = [
    {
        question: 'What does ICC stands for?',
        answers: [
            {ans:'Indian Cricket Council', correct:'false'},
            {ans:'Iran Cricket Council', correct:'false'},
            {ans:'International Cricket Council', correct:'true'},
            {ans:'Intercontinental Cricket Council', correct:'false'}
        ]
    },
    {
        question: 'Who is nicknamed as King in world cricket?',
        answers: [
            {ans:'Kohli', correct:'true'},
            {ans:'Dhoni', correct:'false'},
            {ans:'Rohit', correct:'false'},
            {ans:'Gambhir', correct:'false'}
        ]
    },
    {
        question: 'Which team won the 2015 ODI cricket world cup?',
        answers: [
            {ans:'England', correct:'false'},
            {ans:'India', correct:'false'},
            {ans:'Australia', correct:'true'},
            {ans:'New Zealand', correct:'false'}
        ]
    },
    {
        question: 'Which team won the 2022 FIFA world cup?',
        answers: [
            {ans:'France', correct:'false'},
            {ans:'Croatia', correct:'false'},
            {ans:'Morocco', correct:'false'},
            {ans:'Argentina', correct:'true'}
        ]
    },
    {
        question: 'Who is known as the God of Cricket?',
        answers: [
            {ans:'Ricky Ponting', correct:'false'},
            {ans:'Sachin Tendulkar', correct:'true'},
            {ans:'Brian Lara', correct:'false'},
            {ans:'Jaques Kallis', correct:'false'}
        ]
    },
    {
        question: "Who has the most Ballon d'or in football?",
        answers: [
            {ans:'Cristiano Ronaldo', correct:'false'},
            {ans:'Kaka', correct:'false'},
            {ans:'Lionel Messi', correct:'true'},
            {ans:'Luka Modric', correct:'false'}
        ]
    },
    {
        question: 'Which is the most populated country in the world?',
        answers: [
            {ans:'China', correct:'false'},
            {ans:'Nigeria', correct:'false'},
            {ans:'USA', correct:'false'},
            {ans:'India', correct:'true'}
        ]
    },
    {
        question: 'What is the most famous sport in India?',
        answers: [
            {ans:'Cricket', correct:'true'},
            {ans:'Football', correct:'false'},
            {ans:'Basketball', correct:'false'},
            {ans:'Tennis', correct:'false'}
        ]
    },
    {
        question: 'Which is the tallest animal in the world?',
        answers: [
            {ans:'Elephant', correct:'false'},
            {ans:'Tiger', correct:'false'},
            {ans:'Giraffe', correct:'true'},
            {ans:'Lion', correct:'false'}
        ]
    },
    {
        question: 'Which is the largest country in the world?',
        answers: [
            {ans:'China', correct:'false'},
            {ans:'USA', correct:'false'},
            {ans:'Russia', correct:'true'},
            {ans:'Brazil', correct:'false'}
        ]
    },
];

const ques = document.getElementById('question')
const ansButtons = document.getElementById('answers')
const nextBtn = document.getElementById('next-btn')

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNum = questionIndex + 1;


    ques.innerHTML = `${questionNum}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');
        buttonElement.innerHTML = answer.ans;
        ansButtons.appendChild(buttonElement);
        if(answer.correct){
            buttonElement.dataset.correct = answer.correct;
        }
        buttonElement.addEventListener('click',showAns);
    })
}

function showAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        score++;
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('not-correct');
    };
    Array.from(ansButtons.children).forEach((btn) => {
        if(btn.dataset.correct === 'true'){
            btn.classList.add('correct');
        };
        btn.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function resetState(){
    nextBtn.style.display = 'none';
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function configureNextBtn(){
    questionIndex++;
    if(questionIndex<questions.length){
        showQuestion();
    }else{
        resetState();
        ques.innerHTML = `Your score is ${score} out of ${questions.length}`;
        nextBtn.innerHTML = 'Play Again';
        nextBtn.style.display = 'block';
    }
}

nextBtn.addEventListener('click', () => {
    if(questionIndex<questions.length){
        configureNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();
const quizData = [
    {
        question: 'What is the capital of France',
        a: 'Rome',
        b: 'Paris',
        c: 'Berlin',
        d: 'Madrid',
        correct: 'b'
    }, {
        question: 'Who painted the Mona Lisa?',
        a: 'Vincent van Gogh',
        b: 'Leonardo da Vinci',
        c: 'Pablo Picasso',
        d: 'Michelangelo',
        correct: 'b'
    }, {
        question: 'What is the chemical symbol for water?',
        a: 'Wo',
        b: 'O2',
        c: 'H0',
        d: 'H20',
        correct: 'd'
    }, {
        question: 'What is the largest mammal in the world?',
        a: 'Blue whale',
        b: 'Elephant',
        c: 'Giraffe',
        d: 'Hippopotamus',
        correct: 'a'
    }, {
        question: ' Which planet is known as the "Red Planet"?',
        a: 'Mars',
        b: 'Jupiter',
        c: 'Saturn',
        d: 'Venus',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {

        if(answerEl.checked){
           answer = answerEl.id;
        }

    });

   return answer;
}


function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `
            <h2> You answered correctly at ${score}/${quizData.length} questions.</h2>
            
             <button onClick="location.reload()">Reload</button>
             `;
        }
    
        loadQuiz();
      
    }
   
});
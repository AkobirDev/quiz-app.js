let quizData = [
  {
    question: "Who is the President of Uzb?",
    a: "Tursunov Akobir",
    b: "Jahongir Tursunov",
    c: "Khurshidbek Ruziyev",
    d: "Shavkat Mirziyoyev",
    correct: "d",
  },
  {
    question: "How old is Akobir?",
    a: 16,
    b: 17,
    c: 15,
    d: 18,
    correct: "a",
  },
  {
    question: "Which programming language is the most famous?",
    a: "Python",
    b: "Java",
    c: "Javascript",
    d: "C++",
    correct: "c",
  },
  {
    question: "When launched Javascript?",
    a: 1994,
    b: 1995,
    c: 1996,
    d: "Answer not given",
    correct: "b",
  },
  {
    question: "Where is located Cambridge?",
    a: "in USA",
    b: "in Canada",
    c: "in Great Britain",
    d: "in Uzbekistan",
    correct: "c",
  },
];
let startBtn = document.querySelector(".start");
let rules = document.querySelector(".rules");
let exitBtn = document.querySelector(".exit");
let contBtn = document.querySelector(".cont");
let quizContainer = document.querySelector("#quiz");
let questionTitle = document.querySelector("#question_title");
let aText = document.querySelector("#a_text");
let bText = document.querySelector("#b_text");
let cText = document.querySelector("#c_text");
let dText = document.querySelector("#d_text");
let answerEls = document.querySelectorAll(".answer");
let btn = document.querySelector(".submit");
let count = 0;
let correct = 0;
let qs_count = 1;
let time = 15;

document.querySelector(
  ".qs_count"
).innerHTML = `<h5>${qs_count} of ${quizData.length} Questions</h5>`;

function showQuestions() {
  deselect();
  questionTitle.textContent = quizData[count].question;
  aText.textContent = quizData[count].a;
  bText.textContent = quizData[count].b;
  cText.textContent = quizData[count].c;
  dText.textContent = quizData[count].d;
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) answer = answerEl.id;
  });
  return answer;
}

function deselect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  rules.style.display = "block";
});

exitBtn.addEventListener("click", () => {
  rules.style.display = "none";
  startBtn.style.display = "block";
});

contBtn.addEventListener("click", () => {
  rules.style.display = "none";
  quizContainer.style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  showQuestions();
});

btn.addEventListener("click", () => {
  time = 15;
  countdown();
  let answer = getSelected();
  if (answer) {
    if (answer == quizData[count].correct) correct++;
  }
  count++;

  qs_count++;
  document.querySelector(
    ".qs_count"
  ).innerHTML = `<h5>${qs_count} of ${quizData.length} Questions</h5>`;

  if (count < quizData.length) showQuestions();
  else
    quizContainer.innerHTML = `<p>Your result: <br><h1>${correct}/${quizData.length}</h1><br></p>`;
});

// let question = document.getElementById('question_title');
// let a_text = document.getElementById('a_text');
// let b_text = document.getElementById('b_text');
// let c_text = document.getElementById('c_text');
// let d_text = document.getElementById('d_text');
// let submitBtn = document.querySelector('button');
// let answerEls = document.querySelectorAll('.answer');
// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz(){
//     deselect();
//    let currentQuizData = quizData[currentQuiz];
//     question.innerText = currentQuizData.question;
//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;
// }

// function getSelected(){
//     let answer = undefined;
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked){
//             //console.log('123');
//             answer = answerEl.id;
//              //console.log(answer);
//         }
//     })
//     return answer;
// }

// function deselect(){
//     answerEls.forEach(answerEl => {
//         answerEl.checked = false;
//     }
// )}

// submitBtn.addEventListener('click',() => {

//   const answer =getSelected();
//    if(answer){
//         if(answer === quizData[currentQuiz].correct){
//             score++;
//           //  console.log(score);
//         }
//     }
//     currentQuiz++;
//     if(currentQuiz < quizData.length ){
//         loadQuiz();
//         }
//     else{
//        document.getElementById('quiz').innerHTML = `<p>Your result: <br> <h1> ${score}/${quizData.length} </h1>`;
//     }
// })

const questions = [
       {
              question: 'What does HTML stand for?',
              answers: [
                     'Hyper Text Multiple Language',
                     'Hyper Text Markup Language',
                     'Higher Text More Language',
                     'Hypixel Transfer Multi Language',
              ],
              rightAnswer: 'Hyper Text Markup Language',
       },
       {
              question: 'Which of these tags does not contain an end tag?',
              answers: ['<p>', '<span>', '<img>', '<div>'],
              rightAnswer: '<img>',
       },
       {
              question: 'Which one of these attributes is the most important in the <img> tag?',
              answers: ['src', 'alt', 'style', 'title'],
              rightAnswer: 'src',
       },
       {
              question: "Which of these tags doesn't skip a row?",
              answers: ['div', 'p', 'span', 'header'],
              rightAnswer: 'span',
       },
       {
              question: 'Which one of these attributes shows a message when the user hover on the element?',
              answers: ['title', 'class', 'id', 'data-show'],
              rightAnswer: 'title',
       },
       {
              question: 'In HTML 5 Which one of these attributes shows a message inside the <input> tag?',
              answers: ['href', 'class', 'placeholder', 'data-show'],
              rightAnswer: 'placeholder',
       },
       {
              question: 'If we need to open link in new tab?',
              answers: [
                     "target='self'",
                     "target='new_tab'",
                     "target='parent'",
                     "target='blank'",
              ],
              rightAnswer: "target='blank'",
       },
       {
              question: 'If we need to call style css file in the HTML page we will use?',
              answers: ['link', 'meta', 'div', 'style'],
              rightAnswer: 'link',
       },
       {
              question: 'Which one of these tags use to break a line?',
              answers: ['sr', 'hr', 'br', 'fr'],
              rightAnswer: 'br',
       },
       {
              question: 'How do we write a correct comment in HTML?',
              answers: [
                     '<-- malik -->',
                     '<!-- malik -->',
                     '<!-- malik>',
                     '<!- malik ->',
              ],
              rightAnswer: '<!-- malik -->',
       },
       {
              question: 'In HTML 5 Which one of these attributes Responsible for displaying the audio on the site?',
              answers: ['data-show', 'class', 'title', 'controls'],
              rightAnswer: 'controls',
       },
       {
              question: 'If we need the user fill the input field we will use?',
              answers: ['readonly', 'required', 'disabled', 'necessary'],
              rightAnswer: 'required',
       },
];
let time = 15;
let i = 0;
let startBtn = document.querySelector('.start-btn');
let quizInfo = document.querySelector('.quiz-info');
let exitBtn = document.querySelector('.exit-btn');
let continueBtn = document.querySelector('.continue-btn');
let quizPart = document.querySelector('.question-part');
let timeLeft = document.querySelector('.question-part .header h2 span');
let mainQuestion = document.querySelector('.main-question');
let tank = [];
let ofAll = document.querySelector(' .of-all');
let fromAll = document.querySelector(' .from-all');
let span = document.querySelector('.question-part .header > span');
let score = 0;
let scoreDator = false;
let result = document.querySelector('.result');
let lastScore = document.querySelector('.last-score');
let lastFromScore = document.querySelector('.last-from-score');
let sucAudio = document.querySelector('.success');
let failAudio = document.querySelector('.fail');
startBtn.addEventListener('click', () => {
       startBtn.classList.add('hide');
       quizInfo.classList.remove('hide');
});
exitBtn.addEventListener('click', () => {
       quizInfo.classList.add('hide');
       startBtn.classList.remove('hide');
});
continueBtn.addEventListener('click', () => {
       quizInfo.classList.add('hide');
       quizPart.classList.remove('hide');
       timeLess();
       showTest();
});

function timeLess() {
       let timer = setInterval(function () {
              if (timeLeft.innerHTML == '0') {
                     main();
              } else {
                     timeLeft.innerHTML -= 1;
                     span.style.width = `${
                            (parseInt(timeLeft.innerHTML) * 100) / 15
                     }%`;
              }
       }, 1000);
}

function showTest() {
       timeLeft.innerHTML = time;
       let question = document.createElement('h2');
       question.appendChild(document.createTextNode(questions[i].question));
       mainQuestion.appendChild(question);
       for (let m = 0; m < questions[i].answers.length; m++) {
              let answer = document.createElement('p');
              answer.appendChild(
                     document.createTextNode(questions[i].answers[m])
              );
              mainQuestion.appendChild(answer);
              tank.push(answer);
              clickOnTheRightAnswer();
       }
       ofAll.innerHTML = i + 1;
       fromAll.innerHTML = questions.length;
}

function clickOnTheRightAnswer() {
       tank.forEach((ele) => {
              ele.addEventListener('click', () => {
                     document.querySelector('.next').classList.remove('hide');
                     mainQuestion.classList.add('block');
                     if (ele.textContent === questions[i].rightAnswer) {
                            scoreDator = true;
                            sucAudio.play();
                     } else {
                            scoreDator = false;
                            failAudio.play();
                     }
                     tank.forEach((e) => {
                            if (e.textContent == questions[i].rightAnswer) {
                                   e.classList.add('right');
                            } else {
                                   e.classList.add('false');
                            }
                     });
              });
       });
}

document.querySelector('.next').onclick = function () {
       main();
};

function main() {
       if (scoreDator == true) {
              score++;
       }
       if (i >= questions.length - 1) {
              result.classList.remove('hide');
              quizPart.classList.add('hide');
              lastScore.innerHTML = score;
              lastFromScore.innerHTML = questions.length;
       } else {
              i++;
       }
       document.querySelector('.next').classList.add('hide');
       mainQuestion.innerHTML = '';
       mainQuestion.classList.remove('block');
       showTest();
       span.style.width = '100%';
       scoreDator = false;
}

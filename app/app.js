const dataSource = require('./httpRequests.js');

let score = 0;
window.onload = () => {
const section = document.querySelector('section');
  section.addEventListener('click',getQuestion);
}

function getQuestion() {
  let id = null;
  let category = null;
  let difficulty = null;
  let questionData = null;
  return new Promise((resolve, reject) => {
    let box = document.getElementById(event.target.id); // stores the id of the clicked box
    box.style['color'] = 'blue'; //card will be all blue when its been clicked

    id = event.target.id;
    category = document.getElementById(event.target.id).getAttribute('category');
    difficulty = document.getElementById(event.target.id).getAttribute('difficulty');
    setTimeout(function(){
      resolve("Success!");
    }, 250);
  }).then(() => {
    return dataSource.getQuestions(category, difficulty) // get questions based on category and difficulty
  }).then((data) => {
    loadQuestion(data[0]); // select the first question. Randomize question selection in the future
  })
}

  // first load the questions and display it
 function loadQuestion(data) {
  const modal = document.querySelector('#modal');
  let modalText = document.querySelector('.modal-content');
  modalText.textContent = ''; // clear modal after every question

  const boxQuestion = document.createElement('p');
  boxQuestion.textContent = data.question;
  boxQuestion.classList.add('question');
  modalText.appendChild(boxQuestion);

  for (let i = 0; i < 4; i++) {
    let boxOptions = document.createElement('p');
    boxOptions.classList.add('option'+i);
    boxOptions.textContent = data.options[i];
    modalText.appendChild(boxOptions);
  }
  modal.style.display = 'block'; // displays modal

  let answer = document.createElement('p');
  answer.textContent = data.answer;
  answer.classList.add('answer');

  for (let i = 1; i < 5;i++) {
    modalText.childNodes[i].addEventListener('click', () => {
    getScore(data, modalText, modal, answer);
    });
  }
 }

function getScore(data, modalText, modal, answer) {
  let scoreCheck = document.getElementById('score');
  (event.target.textContent == answer.textContent) ? 
  score+= data.difficultyLevel :
  score-= data.difficultyLevel;

  scoreCheck.textContent = "Player Score: " + score;
  displayScore(modalText, modal, answer);
}
  
function displayScore(modalText, modal, answer) {
  modalText.innerHTML = '<p class="modal-result">The correct answer is: </p>';
  modalText.appendChild(answer);
    
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000); // show the answer then close modal after
}
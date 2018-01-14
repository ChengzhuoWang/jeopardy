
let score = 0;
window.onload = () => {
const section = document.querySelector('section');
  section.addEventListener('click',getQuestion);
}

function getQuestion() {
  let boxElement =  event.target;
  let boxId = event.target.id; // stores the id of the clicked box
  let category = boxElement.getAttribute('category');
  let difficulty = boxElement.getAttribute('difficulty');

  boxElement.style['color'] = 'blue'; //card will be all blue when its been clicked
  let url = 'https://sports-jeopardy.herokuapp.com/';
  let fullUrl = url + 'api/v2?category=' + category + '&difficulty=' + difficulty;

  fetch(fullUrl)
    .then((resp) => resp.json())
    .then(function(data) {
      // will load the first question for now but will randomize it once data expands
      loadQuestion(data[0]);
    })
    .catch(function(error) {
      console.log(error);
    });
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
  score+= translateScore(data) :
  score-= translateScore(data);

  scoreCheck.textContent = "Player Score: " + score;
  displayScore(modalText, modal, answer);
}

 // function will translate the difficultyLevel from fetched data into a score system
 function translateScore(data) {
  var level = data.difficultyLevel;
  switch(level) {
    case 'easy':
      return 200;
    case 'easyMedium':
      return 400;
    case 'medium':
      return 600;
    case 'mediumHard':
      return 800;
    case 'hard':
      return 1000;
    default:
      console.log('Something went wrong I guess...');
  }
}
  
function displayScore(modalText, modal, answer) {
  modalText.innerHTML = '<p class="modal-result">The correct answer is: </p>';
  modalText.appendChild(answer);
    
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000); // show the answer then close modal after
}
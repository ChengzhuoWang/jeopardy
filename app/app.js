const dataSource = require('./httpRequests.js');

var score = 0;
window.onload = function() {
    var section = document.querySelector('section');
    section.addEventListener('click',getQuestion);
}

function getQuestion() {
    var id = null;
    var category = null;
    var difficulty = null;
    var questionData = null
    return new Promise((resolve, reject) => {
        var box = document.getElementById(event.target.id); // stores the id of the clicked box
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
     var modal = document.getElementById('mod');
     var modalText = document.querySelector('.modal-content');
     modalText.textContent = ''; // clear modal after every question

     var boxQuestion = document.createElement('p');
     boxQuestion.textContent = data.question;
     boxQuestion.classList.add('question');
     modalText.appendChild(boxQuestion);

    for (var i = 0; i < 4; i++) {
        var boxOptions = document.createElement('p');
        boxOptions.classList.add('option'+i);
        boxOptions.textContent = data.options[i];
        modalText.appendChild(boxOptions);
    }
     modal.style.display = 'block'; // displays modal

    var answer = document.createElement('p');
    answer.textContent = data.answer;
    answer.classList.add('answer');

    for (var i = 1; i < 5;i++) {
        modalText.childNodes[i].addEventListener('click', function() {
          getScore(data, modalText, modal, answer);
        });
      }
 }

 function getScore(data, modalText, modal, answer) {
    var scoreCheck = document.getElementById('score');
    if (event.target.textContent == answer.textContent) {
          score += data.difficultyLevel;
        }
        else {
          score -= data.difficultyLevel;
        }
        scoreCheck.textContent = "Player Score: " + score;
  
        displayScore(modalText, modal, answer);
   }
  
   function displayScore(modalText, modal, answer) {
    modalText.innerHTML = '<p class="modal-result">The correct answer is: </p>';
    modalText.appendChild(answer);
    
    setTimeout(function(){
      modal.style.display = 'none';
    }, 2000); // show the answer then close modal after
   }
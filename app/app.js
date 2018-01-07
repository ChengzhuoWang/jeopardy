const dataSource = require('./httpRequests.js');

var score = 0;
window.onload = function() {

    var modalText = "";
    var answer = "";
    var boxOption1="";
    var boxOption2="";
    var boxOption3="";
    var boxOption4="";
    var section = document.querySelector('section');
    section.addEventListener('click',getQuestion);
}

function getQuestion() {
    var id = null;
    var category = null;
    var difficulty = null;
    var questionData = null
    return new Promise((resolve, reject) => {
        var box = document.getElementById(event.target.id); // store the id of the result in a box variable
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
     modalText = document.querySelector('.modal-content p');
     modalText.innerHTML = ''; // clear modal after every question

     var boxQuestion = document.createElement('p');
     boxQuestion.innerHTML = data.question;
     boxQuestion.classList.add('question');

     boxOption1 = document.createElement('p');
     boxOption1.innerHTML = data.options[0];
     boxOption1.classList.add('option1');


     boxOption2 = document.createElement('p');
     boxOption2.innerHTML = data.options[1];
     boxOption2.classList.add('option2');

     boxOption3 = document.createElement('p');
     boxOption3.innerHTML = data.options[2];
     boxOption3.classList.add('option3');

     boxOption4 = document.createElement('p');
     boxOption4.innerHTML = data.options[3];
     boxOption4.classList.add('option4');


     modalText.appendChild(boxQuestion);

     modalText.appendChild(boxOption1);
     modalText.appendChild(boxOption2);
     modalText.appendChild(boxOption3);
     modalText.appendChild(boxOption4);
     modal.style.display = 'block'; // displays modal

     //questionResult(modalText,modal,data); //COMMENT FOR NOW
    answer = document.createElement('p');
    answer.innerHTML = data.answer;
    answer.classList.add('answer');

    modalText.addEventListener('click', function(Event){  
     modalText.innerHTML = '<p class="modal-result">The correct answer is: </p>';
      modalText.appendChild(answer);

      setTimeout(function(){
        modal.style.display = 'none';
      }, 2000); // show the answer then close modal after
      });

      boxOption1.onclick = function(event){
      getScore(data);
      };
      boxOption2.onclick = function(event){
      getScore(data);
      };
      boxOption3.onclick = function(event){
      getScore(data);
      };
      boxOption4.onclick = function(event){
      getScore(data);
      };

 }

 function getScore(data) {
  var scoreCheck = document.getElementById('score');
  if (event.target.innerHTML == answer.innerHTML) {
        score += data.difficultyLevel;
      }
      else {
        score -= data.difficultyLevel;
      }
      scoreCheck.innerHTML = "Player Score: " + score;
 }
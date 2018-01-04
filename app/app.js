
var score = 0;
window.onload = function() {
    var section = document.querySelector('section');
    section.addEventListener('click',getQuestion);
}   

  function getQuestion() {
    var box =  document.getElementById(event.target.id);
    var clickedBox = event.target.id; // stores the id of the clicked box
    console.log(box);
    box.style['color'] = 'blue'; //card will be all blue when its been clicked
    // iterate through questions data and return correct data obj which will be used to load question to modal
    for (var obj in questions) {
      for (var key in questions[obj]) {
        if (clickedBox == questions[obj][key]) {
          // we found the matching data so now pass this data into a variable
          var questionData = questions[obj];
          // assign the current question id to empty so question can't be clicked more than once
          questions[obj] = " "; 
        }
      }
    }
    loadQuestion(questionData);
  }

  // first load the questions and display it
 function loadQuestion(data) {
     var modal = document.getElementById('mod');
     var modalText = document.querySelector('.modal-content');
     modalText.textContent = ''; // clear modal after every question
     
     

     var boxQuestion = document.createElement('p');
     boxQuestion.innerHTML = data.question;
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
    answer.innerHTML = data.answer;
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

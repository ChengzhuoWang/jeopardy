// REFACTORING IDEAS
// 1. HAVE THE QUESTION DATA IN A SEPARATE FILE AND IMPORT IT
// 2. INSTEAD OF HAVING 4 SEPARATE BOXOPTION STRINGS.. USE A BOXOPTION ARRAY AND ASSIGN
// EACH BOXOPTION ELEMENT TO ITS CORRELATING DATAOPTION ELEMENT WITHIN A FOR LOOP
// ONCE YOU DO THOSE 2 CREATE A NEW MAKE YOUR INITIAL COMMIT

// USE A FUNCTION TO GIVE EACH BOX A CLASS NAME OF "BOX" INSTEAD OF DOING IT MANUALLY IN THE HTML DOCUMENT

// add

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
    var box =  document.getElementById(event.target.id); // store the id of the result in a box variable
        box.style['color'] = 'blue'; //card will be all blue when its been clicked
        var clickedBox = event.target.id;
        // iterate through objects and return correct data which will be used to load question to modal
         for (var obj in questions) {
           for (var key in questions[obj]) {
             if (clickedBox == questions[obj][key]) {
               // we found the card so now pass this data into a var
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
        //scoreCheck.innerHTML = addScore(data);
        score += data.difficultyLevel;
      }
      else {
        score -= data.difficultyLevel;
      }
      scoreCheck.innerHTML = "Player Score: " + score;
 }




var questions = {
  
    nbaEasy: {
      id:  "nba-easy",
      question:  "What number did Michael Jordan wear when he came out of retirement for the end of the 1994-1995 season??",
      options:  ["23", "22", "1", "45"],
      answer:  "45",
      category:  "NBA",
      difficultyLevel: 200
    },
    nbaEasyMedium:  {
      id: "nba-easy-medium",
      question:  "Who is the tallest player in the NBA currently?",
      options:  ["Kristaps Porzingis", "Alex Len", "Shaquille O'neal", "Rudy Gobert"],
      answer:  "Kristaps Porzingis",
      category:  "NBA",
      difficultyLevel: 400

    },

    nbaMedium:  {
      id:  "nba-medium",
      question:  "Who is the strongest player in the NBA of this list?",
      options:  ["Ben Wallace", "Kawhi Leonard", "Yao Ming", "Shaquille O'neal"],
      answer:  "Shaquille O'neal",
      category:  "NBA",
      difficultyLevel: 600
    },

    nbaMediumHard: {
      id:  "nba-medium-hard",
      question:  "Who is the strongest player in the NBA of this list?",
      options:  ["Ben Wallace", "Kawhi Leonard", "Yao Ming", "Shaquille O'neal"],
      answer:  "Shaquille O'neal",
      category:  "NBA",
      difficultyLevel: 800 
    },

    nbaHard: {
      id:  "nba-hard",
      question:  "Who is the oldest NBA player as of today?",
      options:  ["Manu Ginobili", "Steve Nash", "Vince Carter", "Jason Terry"],
      answer:  "Vince Carter",
      category:  "NBA",
      difficultyLevel: 1000 
    },

    nflEasy: {
      id:  "nfl-easy",
      question:  "He holds the single-season record for touchdown receptions with 23",
      options:  ["Randy Moss", "Jerry Rice", "Calvin Johnson", "Terrell Owens"],
      answer:  "Randy Moss",
      category:  "NFL",
      difficultyLevel: 200 
    },

    nflEasyMedium: {
      id:  "nfl-easy-medium",
      question:  "Who has the most wins as a head coach in the NFL?",
      options:  ["George Halas", "Tom Landry", "Curly Lambeau", "Don Shula"],
      answer:  "Don Shula",
      category:  "NFL",
      difficultyLevel: 400
    },

    nflMedium: {
      id:  "nfl-medium",
      question:  "Who has the most wins as a head coach in the NFL?",
      options:  ["Richard Dent", "Lawrence Taylor", "Harvey Martin", "Ray Lewis"],
      answer:  "Lawrence Taylor",
      category:  "NFL",
      difficultyLevel: 600
    },

    nflMediumHard: {
      id:  "nfl-medium-hard",
      question:  "This state has produced more pro football Hall of Famers than any other state",
      options:  ["California", "Pennsylvania", "Ohio", "Texas"],
      answer:  "Pennsylvania",
      category:  "NFL",
      difficultyLevel: 800
    },


    nflHard: {
      id:  "nfl-hard",
      question:  "How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",
      options:  ["2", "3", "4", "5"],
      answer:  "4",
      category:  "NFL",
      difficultyLevel: 1000
    },

    mlsEasy: {
      id:  "mls-easy",
      question:  "Which LA Galaxy player has the record for most career goals?",
      options:  ["Cobi Jones", "Alexi Lalas", "Landon Donovan", "David Beckham"],
      answer:  "Landon Donovan",
      category:  "MLS",
      difficultyLevel: 200
    },

    mlsEasyMedium: {
      id:  "mls-easy-medium",
      question:  "In what year were the LA Galaxy founded?",
      options:  ["1985", "1995", "2000", "2005"],
      answer:  "1995",
      category:  "MLS",
      difficultyLevel: 400
    },

    mlsMedium: {
      id:  "mls-medium",
      question:  "When was the first season for Major League Soccer?",
      options:  ["1996", "2005", "2000", "1990"],
      answer:  "1996",
      category:  "MLS",
      difficultyLevel: 600
    },

    mlsMediumHard: {
      id:  "mls-medium-hard",
      question:  "Who became the commissioner of Major League Soccer in 1999?",
      options:  ["Landon Donovan", "Bruce Arena", "Don Garber", "Bob Bradley"],
      answer:  "Don Garber",
      category:  "MLS",
      difficultyLevel: 800
    },

    mlsHard: {
      id:  "mls-hard",
      question:  "In 2003 who became the youngest pro athlete when he signed a contract with MLS?",
      options:  ["Freddy Adu", "Seth Trembly", "Duke Hashimoto", "Benedict Vilakazi"],
      answer:  "Freddy Adu",
      category:  "MLS",
      difficultyLevel: 1000
    },

    mlbEasy: {
      id:  "mlb-easy",
      question:  "Who's number was the first ever retired by an MLB team?",
      options:  ["Lou Gehrig", "Mickey Mantle", "Babe Ruth", "Jackie Robinson"],
      answer:  "Lou Gehrig",
      category:  "MLB",
      difficultyLevel: 200
    },

    mlbEasyMedium: {
      id:  "mlb-easy-medium",
      question:  "Which franchise became the New York Yankees?",
      options:  ["Philidelphia Athletics", "Baltimore Orioles", "Washington Senators", "Boston Braves"],
      answer:  "Baltimore Orioles",
      category:  "MLB",
      difficultyLevel: 400
    },

    mlbMedium: {
      id:  "mlb-medium",
      question:  "What is the oldest stadium in MLB?",
      options:  ["Wrigley Field", "Yankee Stadium", "Dodger Stadium", "Fenway Park"],
      answer:  "Fenway Park",
      category:  "MLB",
      difficultyLevel: 600
    },

    mlbMediumHard: {
      id:  "mlb-medium-hard",
      question:  "Which team has the most overall loses in MLB history?",
      options:  ["New York Mets", "Atlanta Braves", "Baltimore Orioles", "Philadelphia Phillies"],
      answer:  "Philadelphia Phillies",
      category:  "MLB",
      difficultyLevel: 800
    },

    mlbHard: {
      id:  "mlb-hard",
      question:  "Who is one of only two players to win back-to-back Home Run Derbys?",
      options:  ["Ken Griffey Jr", "Sammy Sosa", "Prince Fielder", "Barry Bonds"],
      answer:  "Ken Griffey Jr",
      category:  "MLB",
      difficultyLevel: 1000
    },

    nhlEasy: {
      id:  "nhl-easy",
      question:  "Which team was the first to win 5 consecutive Stanley Cups?",
      options:  ["Montreal Canadiens", "New York Rangers", "Toronto Maple Leafs", "Edmonton Oilers"],
      answer:  "Montreal Canadiens",
      category:  "MLB",
      difficultyLevel: 200
    },

    nhlEasyMedium: {
      id:  "nhl-easy-medium",
      question:  "Which of the following teams made the finals 3 consecutive years without winning a Stanley Cup?",
      options:  ["Washington Capitals", "Vancouver Canucks", "St. Louis Blues", "Philadelphia Flyers"],
      answer:  "St. Louis Blues",
      category:  "MLB",
      difficultyLevel: 400
    },

    nhlMedium: {
      id:  "nhl-medium",
      question:  "Who set a record in 1976 scoring 10 points in a game?",
      options:  ["Darryl Sittler", "Wayne Getzky", "Ron Francis", "Maurice Richard"],
      answer:  "Darryl Sittler",
      category:  "MLB",
      difficultyLevel: 600
    },

    nhlMediumHard: {
      id:  "nhl-medium-hard",
      question:  "Who was the first American team to play in the NHL?",
      options:  ["New York Rangers", "Boston Bruins", "Detroit Red Wings", "Montreal Canadiens"],
      answer:  "Boston Bruins",
      category:  "MLB",
      difficultyLevel: 800
    },

    nhlHard: {
      id:  "nhl-hard",
      question:  "In 1981-82 Wayne Gretzky set a record for the fewest number of games to score 50 goals. How many games did it take?",
      options:  ["46", "39", "42", "49"],
      answer:  "39",
      category:  "MLB",
      difficultyLevel: 1000
    }

};







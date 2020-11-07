$(document).ready(function () {
  //FUNCTIONS
  let questionsEl = document.getElementById("questions");
  var correctAnswer = "";
  var randomImage = [
    "fortuneteller-whammy.gif",
    "sleepy-wham.gif",
    "sports-whammy.gif",
    "bon-voyage-whammy.gif",
  ];

  $("#whammies").hide();
  //Pull Trivia questions and answers based on category selected by player
  function getTrivia(category) {
    //Clear the div before displaying the next question/answer set
    $("#questions").empty();
    let requestURL =
      "https://opentdb.com/api.php?amount=15&category=" +
      category +
      "&type=multiple";
    // console.log("URL:", requestURL);
    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      // console.log("Data: ", data);
      //VARIABLE DECLARATIONS
      //dynamically create div where the HTML will be placed
      let trivia = $("#questions");
      let question = $("<h3>");
      let answers = [];
      let randomIndex = Math.floor(Math.random() * 15);
      // console.log(randomIndex);
      question.html(data.results[randomIndex].question);
      // console.log("Question:", data.results[randomIndex].question);
      trivia.append(question);
      correctAnswer = data.results[randomIndex].correct_answer; //using the number of the index didn't match
      let incorrectAnswers = data.results[randomIndex].incorrect_answers;

      //build array for answers including both incorrect and correct answers
      answers = [correctAnswer, ...incorrectAnswers];
      //loop through answers
      for (let i = 0; i < 4; i++) {
        let randomPosition = Math.floor(Math.random() * answers.length);
        let answersBtn = document.createElement("button");
        answersBtn.setAttribute("class", "w3-btn");
        answersBtn.setAttribute("id", i);
        answersBtn.textContent = answers[randomPosition];
        // answersBtn.html(answers[randomPosition]);
        console.log("AnswersBtn:", answersBtn);
        //added a random position variable so the answers append to random postitions,
        // then spliced that position by one, so the function is forced to put answer elsewhere
        // Append the answersBtn somewhere
        questionsEl.appendChild(answersBtn);
        answers.splice(randomPosition, 1);
        // console.log(answers)
      }
      
    });
  }
  //Pull random Chuck Norris Joke
  let getChuck = function () {
    let requestURL = "https://api.chucknorris.io/jokes/random";
    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      // console.log(data.value);
      let trivia = $("#jokes");
      let joke = $("<h3>");
      joke.html(data.value);
      trivia.append(joke);
    });
  };
  //EVENT LISTENERS
  // $(".w3-btn").on("click", getTrivia);
  var category;
  $(".w3-btn").on("click", function () {
    switch (this.id) {
      case "art":
        category = 25;
        break;
      case "music":
        category = 12;
        break;
      case "sports":
        category = 21;
        break;
      case "books":
        category = 10;
        break;
      case "history":
        category = 23;
        break;
    }
    getTrivia(category);
  });

  //CLICK EVENTS
  $("#home").click(function () {
    window.location.href = "./index.html"; // CHANGE TO CURRENT PAGES
  });
  $("#home-category").click(function () {
    window.location.href = "./index.html";
  });
  $("#play").click(function () {
    window.location.href = "./game.html";
  });
  $("#playAgain").click(function () {
    window.location.href = "./index.html";
  });
  //FUNCTION AND VARIABLES TO KEEP TRACK OF HIGH SCORE AND RANDOMIZE QUESTIONS/ANSWERS
  var historicalCorrect = 0; // user score
  var qCounter = 0; // to keep track of what question the user is on
  var wrongCount = 0; //count of wrong answers
  // for (let i = 0; i < 10; i++) {
  if (localStorage.getItem("historicalCorrect")) {
    historicalCorrect = parseInt(localStorage.getItem("historicalCorrect"));
  }
  if (localStorage.getItem("wrongCount")) {
    wrongCount = parseInt(localStorage.getItem("wrongCount"));
  }
  $("#questions").on("click", "button", function () {
    console.log("Answer selected", this.textContent);
    if (qCounter < 2 || wrongCount < 3) {
      if (this.textContent == correctAnswer) {
        // console.log("Yo that's right bro")
        historicalCorrect += 10;
        qCounter++;
        // add set timeout button
        console.log("qCounter", qCounter);
        localStorage.setItem("historicalCorrect", historicalCorrect);
      } else {
        wrongCount++;
        localStorage.setItem("wrongCount", wrongCount);
        $("#questions").hide(3000, function () {
          // console.log("Hide Questions");
          $("#whammies").show(5000, function () {
            // console.log("show whammies");
            $("#whammies").hide();
            $("#questions").show();
            
          });
        });

        console.log("Wrong answer selected");
        //WHAMMY function/gif goes here
      }
      getTrivia(category);
    } else {
      //clear local storage at end of game
      localStorage.clear();
      //send player to the final page
      window.location.href = "./highscore_win.html";
    }
  });
  // }
  //LOCAL STORAGE
  var userName = document.getElementById("username");
  userName.value = localStorage.getItem("lastUsername") || "";
  // console.log(userName)
  document
    .getElementById("highScoreForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      localStorage.setItem("lastUsername", userName.value);
      getChuck();
      let winnerName = $("#winner");
      winnerName.append(historicalCorrect);
      winnerName.append(lastUsername);
    });
});

//How to format returned question like this "On which Beatles album would you find the song &#039;Eleanor Rigby&#039;?"

//add wrongCount to local storage when a wrong answer is selected
//Clear local storage at the end of the game
//play sound on wrong answer
//play sound on correct answer
//hide category buttons when the game is being played
//Need start over button when buttons are hidden during game play

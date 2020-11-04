$(document).ready(function () {
    //FUNCTIONS
    //Clear the div before displaying the next question/answer set
    $("#questions").empty();
    //Pull Art Trivia questions and answers
    var getArtTrivia = function () {
      var requestURL =
        "https://opentdb.com/api.php?amount=15&category=25&type=multiple";
      $.ajax({
        url: requestURL,
        method: "GET",
      }).then(function (data) {
        // console.log(
        //   "Art Data: ",
        //   data
        // );
        //VARIABLE DECLARATIONS
        //dynamically create div where the HTML will be placed
        var trivia = $("#questions");
        var question = $("<h3>");
        var answersEl = $("<h4>");
        var answers = [];
        //get the data into the element that was created above
        question.text(data.results[0].question);
        // console.log(data.results[0].question);
        answersEl.text(data.results[0].answers);
        //build array for answers including both incorrect and correct answers
        var correct_answer = data.results[0].correct_answer;
        var incorrect_answers = data.results[0].incorrect_answers;
        answers.push(correct_answer + ",");
        answers.push(incorrect_answers);
        // console.log("Answers Data: ", answers);
        // console.log("Correct Answer Data: ", data.results[0].correct_answer);
        // console.log(
        //   "Incorrect Answers Data: ",
        //   data.results[0].incorrect_answers
        // );
        //append elements
        trivia.append(question);
        trivia.append(answersEl);
        trivia.append(answers);
      });
    };
    //Pull Music Trivia questions and answers
    var getMusicTrivia = function () {
      var requestURL =
        "https://opentdb.com/api.php?amount=15&category=12&type=multiple";
      $.ajax({
        url: requestURL,
        method: "GET",
      }).then(function (data) {
        console.log("Music Data: ", data);
        //VARIABLE DECLARATIONS
        //dynamically create div where the HTML will be placed
        var trivia = $("#questions");
        var question = $("<h3>");
         
        //get the data into the element that was created above
       
        question.text(data.results[0].question);
        // console.log(data.results[0].question);
        //append elements
        trivia.append(question);

      });
    };
    //Pull Sports Trivia questions and answers
    var getSportsTrivia = function () {
      var requestURL =
        "https://opentdb.com/api.php?amount=15&category=21&type=multiple";
      $.ajax({
        url: requestURL,
        method: "GET",
      }).then(function (data) {
        console.log("Sports Data: ", data);
        //VARIABLE DECLARATIONS
        //dynamically create div where the HTML will be placed
        var trivia = $("#questions");
        var question = $("<h3>");
        //get the data into the element that was created above
        question.text(data.results[0].question);
        // console.log(data.results[0].question);
        //append elements
        trivia.append(question);
      });
    };
    //Pull Books Trivia questions and answers
    var getBooksTrivia = function () {
      var requestURL =
        "https://opentdb.com/api.php?amount=15&category=10&type=multiple";
      $.ajax({
        url: requestURL,
        method: "GET",
      }).then(function (data) {
        console.log("Books Data: ", data);
        //VARIABLE DECLARATIONS
        //dynamically create div where the HTML will be placed
        var trivia = $("#questions");
        var question = $("<h3>");
        //get the data into the element that was created above
        question.text(data.results[0].question);
        // console.log(data.results[0].question);
        //append elements
        trivia.append(question);
      });
    };
    //Pull History Trivia questions and answers
    var getHistoryTrivia = function () {
      var requestURL =
        "https://opentdb.com/api.php?amount=15&category=23&type=multiple";
      $.ajax({
        url: requestURL,
        method: "GET",
      }).then(function (data) {
        console.log("History Data: ", data);
        //VARIABLE DECLARATIONS
        //dynamically create div where the HTML will be placed
        var trivia = $("#questions");
        var question = $("<h3>");
        //get the data into the element that was created above
        question.text(data.results[0].question);
        // console.log(data.results[0].question);
        //append elements
        trivia.append(question);
      });
    };
    //EVENT LISTENERS
    $("#art").on("click", getArtTrivia);
    $("#music").on("click", getMusicTrivia);
    $("#sports").on("click", getSportsTrivia);
    $("#books").on("click", getBooksTrivia);
    $("#history").on("click", getHistoryTrivia);


    function redirect(e) {
       
      if (click === $("#art")) {
        // Redirect to a new page
        window.location.href = "./art.html";
      } if (click === $("#books")) {
        window.location.href = "./books.html";
      } if (click === $("#history")) {
        window.location.href = "./history.html";
      } if (click === $("#music")) {
        window.location.href = "./music.html";
      }
    }


  });
  //I could not get the event listener to work with the button class of "art", added id="art" to button
  //Added JavaScript and jQuery links before body element end
  //Added div class="questions"
  //How to format returned question like this "On which Beatles album would you find the song &#039;Eleanor Rigby&#039;?"
  //.empty() isn't working to clear the div before going to the next question
  //Will need to randomize correct_answer with incorrect_answers by appending the array for answers with incorrect_answers and correct_answer

//VARIABLES 
  //will need variables for:
   //userName
   //array of random quiz questions
   //variable for requestApi
   //variable for user score
   //





//API CALL
  //AJAX FUNCTION



//FUNCTIONS
    //will need functions for quiz pages,
    //function for score counter and iterating through random questions array
    //conditionals for number of incorrect answers
        //for wrong answers - if 3 incorrect user gets a whammy
        //for correct answers - user accumulates 10 points





//EVENT LISTENERS
    //will need event listeners for:
     //submit that enters user name into storage,
     //click listener for each category button and links user to specific category page










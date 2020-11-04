$(document).ready(function () {
  //FUNCTIONS

  //Clear the div before displaying the next question/answer set
  $("#questions").empty();

  // generateQuestions() {
  //   switch(expression{
  //     case "art" : getArtTrivia();
  //     break;
  //     case

  //   })
  // }

  //Pull Art Trivia questions and answers
  var getArtTrivia = function () {
    //Open art page
    window.location.href = "./art.html";

    var requestURL =
      "https://opentdb.com/api.php?amount=15&category=25&type=multiple";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log("Art Data: ", data);
      // let newData = JSON.stringify(data);
      // console.log("Art newData: ", newData);
      //VARIABLE DECLARATIONS
      //dynamically create div where the HTML will be placed
      var trivia = $("#questions");
      var question = $("<h3>");
      var answersEl = $("<h4>");
      var answers = [];

      //get the data into the element that was created above
      question.html(data.results[4].question);
      console.log(data.results[4].question);
      answersEl.html(data.results[4].answers);

      //build array for answers including both incorrect and correct answers
      var correct_answer = data.results[3].correct_answer;
      var incorrect_answers = data.results[3].incorrect_answers;
      answers.push(correct_answer + ",");
      answers.push(incorrect_answers);

      // console.log("Answers Data: ", answers);
      // console.log("Correct Answer Data: ", data.results[0].correct_answer);
      // console.log(
      //   "Incorrect Answers Data: ",
      //   data.results[0].incorrect_answers
      // );

      //append elements
      // function escapeHtml(unsafe) {
      //   return $("<div />").text(unsafe).html();
      // }

      //Trying to decode the HTML
      // var fixedQuestion = fixEncoding (question) {
      //   var theString : $("#questions").val():
      //   var varQuestion = $("<textarea />").html(theString).text();
      //   $("#questions").text(varQuestion);
      //   return false;
      // });

      trivia.append(question);
      trivia.append(answersEl);
      trivia.append(answers);
    });
  };

  //Pull Music Trivia questions and answers
  var getMusicTrivia = function () {
    //Open Music page
    window.location.href = "./music.html";
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
      var answersEl = $("<h4>");
      var answers = [];

      //get the data into the element that was created above
      question.html(data.results[0].question);
      // console.log(data.results[0].question);
      answersEl.html(data.results[0].answers);

      //build array for answers including both incorrect and correct answers
      var correct_answer = data.results[0].correct_answer;
      var incorrect_answers = data.results[0].incorrect_answers;
      answers.push(correct_answer + ",");
      answers.push(incorrect_answers);

      //append elements
      trivia.append(question);
      trivia.append(answersEl);
      trivia.append(answers);
    });
  };

  //Pull Sports Trivia questions and answers
  var getSportsTrivia = function () {
    //Open Sports page
    window.location.href = "./sports.html";
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
      var answersEl = $("<h4>");
      var answers = [];

      //get the data into the element that was created above
      question.html(data.results[0].question);
      // console.log(data.results[0].question);
      answersEl.html(data.results[0].answers);

      //build array for answers including both incorrect and correct answers
      var correct_answer = data.results[0].correct_answer;
      var incorrect_answers = data.results[0].incorrect_answers;
      answers.push(correct_answer + ",");
      answers.push(incorrect_answers);

      //append elements
      trivia.append(question);
      trivia.append(answersEl);
      trivia.append(answers);
    });
  };

  //Pull Books Trivia questions and answers
  var getBooksTrivia = function () {
    //Open Books page
    window.location.href = "./books.html";
    var requestURL =
      "https://opentdb.com/api.php?amount=15&category=10&type=multiple";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      // console.log("Books Data: ", data);
      //VARIABLE DECLARATIONS
      //dynamically create div where the HTML will be placed
      var trivia = $("#questions");
      var question = $("<h3>");
      var answersEl = $("<h4>");
      var answers = [];

      //get the data into the element that was created above
      question.html(data.results[0].question);
      // console.log(data.results[0].question);
      answersEl.html(data.results[0].answers);

      //build array for answers including both incorrect and correct answers
      var correctAnswer = data.results[0].correct_answer;
      var incorrectAnswers = data.results[0].incorrect_answers;
      answers.push(correctAnswer + ",");
      answers.push(incorrectAnswers);

      //append elements
      trivia.append(question);
      trivia.append(answersEl);
      trivia.append(answers);
    });
  };

  //Pull History Trivia questions and answers
  var getHistoryTrivia = function () {
    //Open history page
    window.location.href = "./history.html";
    var requestURL =
      "https://opentdb.com/api.php?amount=15&category=23&type=multiple";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      // console.log("History Data: ", data);
      //VARIABLE DECLARATIONS
      //dynamically create div where the HTML will be placed
      var trivia = $("#questions");
      var question = $("<h3>");
      var answersEl = $("<h4>");
      var answers = [];

      //get the data into the element that was created above
      question.html(data.results[0].question);
      // console.log(data.results[0].question);
      answersEl.html(data.results[0].answers);

      //build array for answers including both incorrect and correct answers
      var correct_answer = data.results[0].correct_answer;
      var incorrect_answers = data.results[0].incorrect_answers;
      answers.push(correct_answer + ",");
      answers.push(incorrect_answers);

      //append elements
      trivia.append(question);
      trivia.append(answersEl);
      trivia.append(answers);
    });
  };

  //Pull random Chuck Norris Joke
  var getChuck = function () {
    var requestURL = "https://api.chucknorris.io/jokes/random";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data.value);
      var trivia = $("#questions");
      var joke = $("<h3>");
      joke.html(data.value);
      trivia.append(joke);
    });
  };
  //EVENT LISTENERS
  $("#art").on("click", getArtTrivia);
  $("#music").on("click", getMusicTrivia);
  $("#sports").on("click", getSportsTrivia);
  $("#books").on("click", getBooksTrivia);
  $("#history").on("click", getHistoryTrivia);
  $("#chuck").on("click", getChuck);

  $("#home").click(function () {
    window.location.href = "./index.html";
  });
  $("#home-category").click(function () {
    window.location.href = "./index.html";
  });
});

//Added JavaScript and jQuery links before body element end
//Added div class="questions"
//How to format returned question like this "On which Beatles album would you find the song &#039;Eleanor Rigby&#039;?"
//.empty() isn't working to clear the div before going to the next question
//Will need to randomize correct_answer with incorrect_answers by appending the array for answers with incorrect_answers and correct_answer
//put joke in #questions div for testing
//created

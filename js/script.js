$(document).ready(function () {
  //FUNCTIONS

  //Pull Art Trivia questions and answers
  var getArtTrivia = function () {
    var requestURL =
      "https://opentdb.com/api.php?amount=15&category=25&type=multiple";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
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
  // $("music").on("click", getMusicTrivia);
  // $("sports").on("click", getSportsTrivia);
  // $("books").on("click", getBooksTrivia);
  // $("history").on("click", getHistoryTrivia);
});

//Added JavaScript and jQuery links before body element end
//Added div class="questions"

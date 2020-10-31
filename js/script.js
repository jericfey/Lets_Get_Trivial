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
    });
  };

  //EVENT LISTENERS
  $("art").on("click", getArtTrivia);
  // $("music").on("click", getMusicTrivia);
  // $("sports").on("click", getSportsTrivia);
  // $("books").on("click", getBooksTrivia);
  // $("history").on("click", getHistoryTrivia);
});

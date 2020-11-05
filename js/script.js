$(document).ready(function () {
  //FUNCTIONS
  let questionsEl = document.getElementById("questions");

  //Pull Trivia questions and answers based on category selected by player
  function getTrivia(category) {
    //Clear the div before displaying the next question/answer set
    $("#questions").empty();

    let requestURL =
      "https://opentdb.com/api.php?amount=15&category=" +
      category +
      "&type=multiple";
    console.log("URL:", requestURL);
    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log("Data: ", data);

      //VARIABLE DECLARATIONS
      //dynamically create div where the HTML will be placed
      let trivia = $("#questions");
      let question = $("<h3>");
      // let answersEl = $("<h3>");
      let answers = [];

      //get the data into the element that was created above
      question.html(data.results[4].question);
      console.log("Question:", data.results[4].question);
      trivia.append(question);

      //build array for answers including both incorrect and correct answers
      let correctAnswer = data.results[3].correct_answer;
      let incorrectAnswers = data.results[3].incorrect_answers;
      // answers.push(correctAnswer);
      // answers = answers.concat(incorrectAnswers);
      answers = [correctAnswer, ...incorrectAnswers];

      //loop through answers

      for (
        let i = 0, answersIndex = 4;
        i < answers.length;
        i++, answersIndex--
      ) {
        let randomIndex = Math.floor(Math.random() * answersIndex);
        let answersBtn = document.createElement("button");

        answersBtn.setAttribute("class", "w3-btn");

        answersBtn.textContent = answers[randomIndex];
        // Append the answersBtn somewhere

        questionsEl.appendChild(answersBtn);
      }

      // answersEl.html(answers);
      console.log("Answers:", answers);

      //Appends array of answers to the page
      // trivia.append(answersEl);
      // trivia.append(answers);
    });
  }

  //Pull random Chuck Norris Joke
  let getChuck = function () {
    let requestURL = "https://api.chucknorris.io/jokes/random";

    $.ajax({
      url: requestURL,
      method: "GET",
    }).then(function (data) {
      console.log(data.value);
      let trivia = $("#questions");
      let joke = $("<h3>");
      joke.html(data.value);
      trivia.append(joke);
    });
  };
  //EVENT LISTENERS
  // $(".w3-btn").on("click", getTrivia);
  $(".w3-btn").on("click", function () {
    let category;
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

  // $("#music").on("click", getTrivia);
  // $("#sports").on("click", getTrivia);
  // $("#books").on("click", getTrivia);
  // $("#history").on("click", getTrivia);
  // $("#chuck").on("click", getChuck);

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

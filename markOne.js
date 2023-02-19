var rls = require('readline-sync');
var userName = rls.question("Hi! What's Your name? ");
console.log("**** Welcome " + userName + " to How Well You know Tirtharaj Quiz ****", "\n");

var q1 = {
  question: "Which year was I born in? ",
  answer: "1997"
}
var q2 = {
  question: "Which city I grew up in? ",
  answer: "Siliguri"
}
var q3 = {
  question: "What is my favourite thing? ",
  answer: "Book"
}
var q4 = {
  question: "What am I highly skilled in? ",
  answer: "Writing"
}
var q5 = {
  question: "What is my favourite subject? ",
  answer: "Finance"
}

var arrayQuesAns = [q1, q2, q3, q4, q5];
var userScore = 0;
var leaderBoard = [{ name: "Rituraj", score: 5 }, { name: "Mammam", score: 3 }, { name: "Baba", score: 1 }
]

for (i = 0; i < arrayQuesAns.length; i++) {
  var userAns = rls.question(arrayQuesAns[i].question);
  if (userAns === arrayQuesAns[i].answer) {
    console.log('Great!');
    userScore = userScore + 1;
    console.log('Your score: ', userScore);
    console.log("\n");
  }
  else {
    console.log('Oops!');
    userScore = userScore - 1;
    console.log('Your score: ', userScore);
    console.log("\n");
  }
}

console.log("You scored: ", userScore, '\n');
console.log("**** Here is the leaderboard ****");
for (i = 0; i < leaderBoard.length; i++) {
  console.log(leaderBoard[i].name, " : ", leaderBoard[i].score);
}
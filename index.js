//------Global Variale----->>>

var readlinesync = require("readline-sync");
let score = 0;
//------------------------------------------------------------

//------Function to welcome User---------->>>>>

function welcomeUser() {
  var userName = readlinesync.question("may I have your name please ? ");

  console.log('welcome, ' + userName + ' in our Quiz ');
}
//------------------------------------------------------------

//-------Function to play Quiz ------------->>>>>

function playQuiz(ques, answ) {
  var userques = readlinesync.question(ques)
  // console.log('function is running')
  if (userques.toLowerCase() === answ.toLowerCase()) {
    console.log("correct Answer");
    score = score + 1
  } else {
    console.log("wrong, Try Again");
  }

  // console.log("current score: ", score);
  // console.log("-------------")
}
//------------------------------------------------------------

//--- Array of [questions object]---------->>>
let questionsList = [
  {
    ques: "\nwhat is my favourite food ? \n(A) Pav bhaji \n(B) Golgappe \n",
    answ: "A"
  },
  {
    ques: "\nwhich color I love most ? \n(A) Red \n(B) Pink \n",
    answ: "a"
  },
  {
    ques: "\nDo you know my favourite song ? \n(A) tu mera chand \n(B) stars with you \n",
    answ: "B"
  },
  {
    ques: "\nwhom i choose? \n(A) mom \n(B) dad \n",
    answ: "B"
  },
  {
    ques: "\ndo i write poems? \n(A) yes \n(B) no \n",
    answ: "a"
  }
]
//--------------------------------------------------------------

//---------------Loop----------->>>>>
function startQuiz() {
  for (var i = 0; i < questionsList.length; i++) {
    // console.log('2nd line in loop')
    playQuiz(questionsList[i].ques, questionsList[i].answ)
    // console.log('3rd line in loop')
  }
}
//------------------------------------------------------------

//-----func for final score----->>>
function finalScore() {
  console.log("Your final score is : " + score);
}
//-------------------------------------------------------------

//---Calling All functions------>>>
welcomeUser();
startQuiz();
finalScore();
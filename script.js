const questions = [
  {
    que: "Who is the father of C language?",
    a: "Steve Jobs",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Rasmus Lerdorf",
    correct: "c",
  },

  {
    que: "Which of the following is not a valid C variable name?",
    a: "int number",
    b: "float rate",
    c: " int variable_count",
    d: " int $main",
    correct: "d",
  },

  {
    que: " Which of the following cannot be a variable name in C?",
    a: "volatile",
    b: "true",
    c: "friend",
    d: "export",
    correct: "a",
  },
];

let index = 0;
let quesBox = document.getElementById("quesBox");
let optionsDiv = document.querySelectorAll(".options");
let buttonDiv = document.querySelector('.button');

const loadQuestion = () => {
  const data = questions[index];
  // console.log(data)
  quesBox.innerText = `${index + 1} -> ${data.que}`;

  // optionsDiv[0].nextElementSibling.innerText = data.a;
  // optionsDiv[1].nextElementSibling.innerText = data.b;
  // optionsDiv[2].nextElementSibling.innerText = data.c;
  // optionsDiv[3].nextElementSibling.innerText = data.d;

  for (let i = 0; i < optionsDiv.length; i++) {
    optionsDiv[i].nextElementSibling.innerText = data[String.fromCharCode(97 + i)];
  }
};

buttonDiv.addEventListener("click", function () {
  loadQuestion();
});
loadQuestion();

import { questions } from "./questions.js";

var entry = document.getElementById("questionParagraph");
var rdo = document.getElementById("questionDiv");
var inputs = rdo.getElementsByTagName("input");
var labels = rdo.getElementsByTagName("label");
var seconds = document.getElementById("demo");
var inputElements = document.querySelectorAll("input");

var arrays = [];

console.log(labels);
var key = 0;
let currentQuestion = questions[key];

let btn = document.getElementById("next");
btn.addEventListener("click", function () {
  key++;
  currentQuestion = questions[key];
  console.log(currentQuestion);
  for (var i = 0; i < inputs.length; i++) {
    // inputs[i].innerHTML = arrays[i];
    // inputs[i].id = "rd";
    let id = document.getElementById("rd");
    // id.checked = true;
    console.log(inputs[i]);
    // labels[i].innerHTML = arrays[i];
    console.log(labels[i]);
    //if (labels[i].innerHTML == questions[key].answer) {
    //  inputs[i].value = questions[key].answer;
    //}
    labels[i].innerHTML = questions[key].choices[i];
  }
});

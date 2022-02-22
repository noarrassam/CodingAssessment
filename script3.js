import { questions } from "./questions.js";

var entry = document.getElementById("questionParagraph");
var rdo = document.getElementById("questionDiv");
var inputs = rdo.getElementsByTagName("input");
var labels = rdo.getElementsByTagName("label");
var arrays = [];
var counter = 0;
var valid = false;
var key;

function allQuestions() {
  //Object.keys(questions).forEach((key, i) => {
  console.log(key);
  console.log(i);
  for (key of Object.keys(questions)) {
    // console.log(key);
    // console.log(Object.keys(questions));
    if (key == 0) {
      console.log(key);
      inputs[3].value = "correct";
      entry.innerHTML = questions[0].title;
      console.log(entry);

      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
      }

      for (var j = 0; j < labels.length; j++) {
        labels[j].innerHTML = arrays[j];
        console.log(labels[j]);
      }
    } else if (key == 1) {
      console.log(key);
      inputs[1].value == "correct";
      entry.innerHTML = questions[1].title;
      console.log(entry);
      arrays = [];
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
      }

      // document.querySelector("#questionDiv").children[0].innerHTML =
      // "questions";

      for (var j = 0; j < labels.length; j++) {
        labels[j].innerHTML = arrays[j];
        console.log(labels[j]);
      }
    }
  }
}

function submitBtn() {
  var submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submitBtn";
  document.body.appendChild(submitBtn);

  var button = document.getElementById("submitBtn");
  // console.log(arrays);
  // console.log(submitBtn.id);
  // console.log(inputs);
  // console.log(labels);
  button.addEventListener("click", allQuestions); 
    for (let i = 0; i < inputs.length; i++) {
      if (key == 0) {
        e.allQuestions();
        if (inputs[i].value == "correct") {
          if (inputs[i].checked) {
            valid = true;
            break;
          }
        }
      }
    }
    if (valid) {
      alert("validation succussful");
      // key++;
      key;
      console.log(key);
      // counter++;
      // console.log(counter);
    } else {
      alert("please select");
      key;
      console.log(key);
      // console.log(counter);
      return false;
    }
}

allQuestions();
submitBtn();

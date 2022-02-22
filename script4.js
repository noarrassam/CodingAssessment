import { questions } from "./questions.js";

var entry = document.getElementById("questionParagraph");
var rdo = document.getElementById("questionDiv");
var inputs = rdo.getElementsByTagName("input");
var labels = rdo.getElementsByTagName("label");
var arrays = [];
var counter = 0;
var valid = false;
// var question;
var key = 0;

function allQuestions() {
  let question = questions[key];
  console.log(question);
  // console.log(questions[0]);
  // Object.keys(questions).forEach((key) => {
  // console.log(questions);
  // console.log(questions);
  // console.log(questions[0]);
  switch (question) {
    case questions[0]:
      console.log(key);
      // inputs[3].value = "correct";
      entry.innerHTML = questions[key].title;

      for (let i = 0; i < inputs.length; i++) {
        // if (inputs[i].value == 3) {
        var strArr = [].slice.call(inputs);
        console.log(strArr);
        strArr.indexOf("input");
        inputs[i].value = "correct";
        console.log(inputs[i]);
        // }
      }

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
      break;
    case questions[1]:
      console.log(key);
      inputs[3].value = "";
      inputs[1].value = "correct";
      entry.innerHTML = questions[key].title;
      arrays = [];
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
      break;
  }
  //});
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
  // button.addEventListener("click", allQuestions);
  button.addEventListener("click", function () {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "correct") {
        if (inputs[i].checked) {
          valid = true;
          break;
        }
      }
    }
    if (valid) {
      alert("validation succussful");
      key++;
      allQuestions();
      console.log(key);
    } else {
      alert("please select");
      key++;
      allQuestions();
      return false;
    }
  });
}

submitBtn();
allQuestions();

import { questions } from "./questions.js";

var entry = document.getElementById("questionParagraph");
var rdo = document.getElementById("questionDiv");
var inputs = rdo.getElementsByTagName("input");
var labels = rdo.getElementsByTagName("label");
var arrays = [];
var counter = 0;
var valid = false;
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
      clearRdoButton();
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   if (labels[i] == "All the above") {
      //     inputs[i].value = labels[i];
      //   }
      //   console.log(labels[j]);
      // }
      break;
    case questions[1]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i]);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[2]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[3]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[4]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[5]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[5]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }
      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[6]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }

      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
    case questions[7]:
      console.log(key);
      // inputs[3].value = "";
      // inputs[1].value = "";
      // inputs[2].value = "correct";
      clearRdoButton();
      arrays = [];
      entry.innerHTML = questions[key].title;
      for (let arr in questions[key].choices) {
        arrays.push(questions[key].choices[arr]);
        console.log(arrays);
      }

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = arrays[i];
        console.log(inputs[i]);
        labels[i].innerHTML = arrays[i];
        console.log(labels[i]);
        if (labels[i].innerHTML == questions[key].answer) {
          inputs[i].value = questions[key].answer;
        }
      }
      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].innerHTML = arrays[i];
      //   if (questions[key].answer) {
      //     inputs[i].value = questions[key].answer;
      //     console.log(inputs[i].value);
      //   }
      // }

      // for (var j = 0; j < labels.length; j++) {
      //   labels[j].innerHTML = arrays[j];
      //   console.log(labels[j]);
      // }
      break;
  }
  //});
}

function clearRdoButton() {
  var ele = document.getElementsByName("rdos");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
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
      if (inputs[i].value == labels[i].innerHTML) {
        if (inputs[i].checked) {
          // valid = true;
          alert("validation succussful");
          key++;
          allQuestions();
          console.log(key);
          counter++;
          console.log(counter);
          break;
        } else {
          alert("please select");
          key++;
          allQuestions();
          break;
          // return false;
        }
      }
    }
  });
}

submitBtn();
allQuestions();

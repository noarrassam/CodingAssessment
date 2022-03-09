import { questions } from "./questions.js";

var entry = document.getElementById("questionParagraph");
var rdo = document.getElementById("questionDiv");
var inputs = rdo.getElementsByTagName("input");
var labels = rdo.getElementsByTagName("label");
var seconds = document.getElementById("demo");
var inputElements = document.querySelectorAll("input");
//var labelElements = document.querySelectorAll("label");

//var arrays = [];
var counter = 0;
var key = 0;
var count = 60;
var intrvl;

function interval() {
  count -= 1;
  if (count < 1) {
    clearInterval(intrvl);
    initScore();
  }
  seconds.innerHTML = count;
}

function counterTime() {
  intrvl = setInterval(interval, 1000);
}

function initScore() {
  for (var i = 0; i < inputElements.length; i++) {
    if (inputElements.length > 0) {
      inputElements[i].remove();
      // labelElements[i].remove();
    }
  }

  var btnID = document.getElementById("submitBtn");
  //if (btnID.length > 0) {
  btnID.remove();
  //}

  if (count == 0) {
    document.querySelector("#questionDiv").children[0].innerHTML =
      `Times Up!` +
      `<br /> <br />` +
      `Your Score is ${counter}/10` +
      `<br /> <br />` +
      "Please Fill up the Below:";
  } else if (count > 1) {
    document.querySelector("#questionDiv").children[0].innerHTML =
      `You have completed your Quiz. ${count} seconds remaining` +
      `<br /> <br />` +
      `Your Score is ${counter}/10` +
      `<br /> <br />` +
      "Please Fill up the Below:";
  } else if (count == 1) {
    document.querySelector("#questionDiv").children[0].innerHTML =
      `You have completed your Quiz. ${count} second remaining` +
      `<br /> <br />` +
      `Your Score is ${counter}/10` +
      `<br /> <br />` +
      "Please Fill up the Below:";
  }

  let textFieldInit = document.createElement("input");
  textFieldInit.type = "text";
  textFieldInit.id = "initials";

  document.querySelector("#questionDiv").children[1].innerHTML =
    "Enter your Initial";

  document.querySelector("#questionDiv").children[3].innerHTML = "";

  document.querySelector("#questionDiv").children[3].appendChild(textFieldInit);

  document.querySelector("#questionDiv").children[5].innerHTML =
    "Your Score is:";

  let textFieldScore = document.createElement("label");
  textFieldScore.innerHTML = counter;
  textFieldScore.type = "text";
  textFieldScore.id = "scores";

  document.querySelector("#questionDiv").children[7].innerHTML = "";

  document
    .querySelector("#questionDiv")
    .children[7].appendChild(textFieldScore);

  let br = document.createElement("br");
  document.body.appendChild(br);

  let submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";
  submit.id = "btnInsert";

  document.body.appendChild(submit);

  let br1 = document.createElement("br");
  document.body.appendChild(br1);

  let br2 = document.createElement("br");
  document.body.appendChild(br2);

  let output = document.createElement("fieldset");
  output.id = "lsOutput";
  document.body.appendChild(output);
  //console.log(output);
  let leg = document.createElement("legend");
  var t = document.createTextNode("Scores");
  leg.appendChild(t);
  document.getElementById("lsOutput").appendChild(leg);
  let div = document.createElement("div");
  div.id = "output";
  document.getElementById("lsOutput").appendChild(div);

  const initials = document.getElementById("initials");
  //const scores = document.getElementById("scores");
  const btnInsert = document.getElementById("btnInsert");
  const AllOutput = document.getElementById("output");

  btnInsert.addEventListener("click", function () {
    const key = initials.value;
    const value = counter;

    if (key && value) {
      localStorage.setItem(key, value);
      location.reload();
    }
    //console.log(key);
    //console.log(value);
  });

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    AllOutput.innerHTML += `${key}: ${val}<br />`;
  }
}

function allQuestions() {
  let question = questions[key];
  if (question) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
      inputs[i].id = "rd";
      let id = document.getElementById("rd");
      id.checked = true;
      //console.log(inputs[i]);
      //console.log(key);
      labels[i].innerHTML = questions[key].choices[i];
      //console.log(questions[key].choices[i]);
      entry.innerHTML = questions[key].title;
      clearRdoButton();
      if (labels[i].innerHTML == questions[key].answer) {
        inputs[i].value = questions[key].answer;
      }
    }
  } else {
    clearInterval(intrvl);
    initScore();
  }
}

function startButton() {
  let para = document.createElement("p");
  para.id = "para";
  para.innerHTML =
    "Start the Quiz" + "<br />" + "You have 1 minute to answer 10 MCQs";
  document.body.appendChild(para);

  let start = document.createElement("input");
  start.type = "submit";
  start.id = "start";
  start.value = "Start";
  document.body.appendChild(start);
  let session = document.getElementById("session");

  for (var i = 0; i < inputElements.length; i++) {
    if (inputElements.length > 0) {
      inputElements[i].style.visibility = "hidden";
    }
  }

  session.style.visibility = "hidden";

  let startButton = document.getElementById("start");
  startButton.addEventListener("click", function () {
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements.length > 0) {
        inputElements[i].style.visibility = "visible";
      }
    }
    session.style.visibility = "visible";
    para.remove();
    start.remove();
    allQuestions();
    counterTime();
    submitBtn();
  });
}

function clearRdoButton() {
  var ele = document.getElementsByName("rdos");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
}

function submitBtn() {
  var submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submitBtn";
  submitBtn.value = "Next";
  document.body.appendChild(submitBtn);

  var button = document.getElementById("submitBtn");
  button.addEventListener("click", function () {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == labels[i].innerHTML) {
        if (inputs[i].checked) {
          alert("Correct");
          //console.log(key);
          counter++;
          key++;
          allQuestions();
          //console.log(counter);
          break;
        } else {
          alert("Wrong Answer");
          counter += 0;
          key++;
          allQuestions();
          break;
        }
      }
    }
  });
}

startButton();

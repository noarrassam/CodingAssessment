var count = 15;
var x;
const seconds = document.getElementById("demo");

function firstQuestion() {
  const para = document.createElement("p");
  const node = document.createTextNode("What are the primitive datatypes?");
  para.appendChild(node);
  const element = document.getElementById("text");
  element.appendChild(para);
  var arr = ["String, Number", "Boolean, Undefined", "Null", "All the above"];
  arr.forEach((arrVal, i) => {
    var labelVal = document.createElement("label");
    labelVal.innerHTML = arrVal;
    var inputValue = document.createElement("input");
    inputValue.type = "radio";
    inputValue.name = "rdo";
    inputValue.arrVal = i;
    inputValue.id = arrVal;
    var br = document.createElement("br");

    document.body.appendChild(inputValue);
    document.body.appendChild(labelVal);
    document.body.appendChild(br);

    var button = document.getElementById(arrVal);
    button.addEventListener("click", function () {
      if (arrVal == "All the above") {
        alert("correct");
      } else {
        alert("incorrect");
      }
    });
  });
}

function secondQuestion() {
  const para = document.createElement("p");
  const node = document.createTextNode(
    " Which of the following is true about variable naming conventions in JavaScript?"
  );
  para.appendChild(node);
  const element = document.getElementById("text");
  element.appendChild(para);
  var arr = [
    "JavaScript variable names must begin with a letter or the underscore character.",
    "JavaScript variable names are case sensitive.",
    "Both of the above.",
    "None of the above.",
  ];
  arr.forEach((arrVal, i) => {
    var labelVal = document.createElement("label");
    labelVal.innerHTML = arrVal;
    var inputValue = document.createElement("input");
    inputValue.type = "radio";
    inputValue.name = "rdo";
    inputValue.arrVal = i;
    inputValue.id = arrVal;
    var br = document.createElement("br");

    document.body.appendChild(inputValue);
    document.body.appendChild(labelVal);
    document.body.appendChild(br);

    var button = document.getElementById(arrVal);
    button.addEventListener("click", function () {
      if (arrVal == "Both of the above.") {
        alert("correct");
      } else {
        alert("incorrect");
      }
    });
  });
}

function interval() {
  count -= 1;

  if (count === 10) {
    clearInterval(x);
    // alert("times up");
  }
  seconds.textContent = count;
}

function counter() {
  firstQuestion();
  // secondQuestion();
  x = setInterval(interval, 1000);
}

counter();

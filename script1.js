var count = 15;
var x;
var seconds = document.getElementById("demo");

var arrQ = ["What are the primitive datatypes?"];
var arrA = ["String, Number", "Boolean, Undefined", "Null", "All the above"];

function interval() {
  count -= 1;
  if (count === 10) {
    clearInterval(x);
    var result = alert("Times up");
    if (!result) {
      updateQA(
        arrQ,
        "Which of the following is true about variable naming conventions in JavaScript?"
      );
      console.log(arrQ);
      count = 15;
      x = setInterval(interval, 1000);
      questions();
    } else {
    }
  }
  seconds.textContent = count;
  document.body.appendChild(seconds);
}

function counter() {
  questions();
  x = setInterval(interval, 1000);
}

function questions() {
  seconds = document.getElementById("demo");
  document.body.innerHTML = seconds;
  arrQ.forEach((arrValQ, i) => {
    var para = document.createElement("p");
    // para.innerHTML = arrValQ;
    para.arrValQ = i;
    para.id = arrValQ;
    //document.body.appendChild(para);
    var br = document.createElement("br");
    document.body.innerHTML = arrValQ;
    document.body.appendChild(br);
    // let x = document.getElementById(arrValQ);
    // x[i] = "arrValQ";
    // console.log(x[i]);
  });

  arrA.forEach((arrValA, i) => {
    var labelVal = document.createElement("label");
    labelVal.innerHTML = arrValA;

    var inputValue = document.createElement("input");
    inputValue.type = "radio";
    inputValue.name = "rdo";
    inputValue.arrValA = i;
    inputValue.id = arrValA;
    var br = document.createElement("br");

    document.body.appendChild(inputValue);
    document.body.innerHTML += arrValA;
    //document.getElementById(arrValA).innerHTML = arrValA;
    //document.body.innerHTML = inputValue;
    //document.body.appendChild(labelVal);
    document.body.appendChild(br);
    updatedEventListner(arrValA);
  });
}

function updatedEventListner(arrValA) {
  var button = document.getElementById(arrValA);
  button.addEventListener("click", function () {
    if (arrValA == "All the above") {
      alert("correct");
    } else {
      alert("incorrect");
    }
  });
}

function updateQA(array, newValue) {
  for (let i = 0; i < array.length; i++) {
    array[i] = newValue;
  }
}

counter();

var count = 15;
var x;
const seconds = document.getElementById("demo");
var primitives = document.getElementById("primitives").children;
var variables = document.getElementById("variables").children;

function texts() {
  let arr = new Array();
  arr.push(primitives);
  arr.push(variables);

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(primitives)) {
      if (primitives[i].className == "class1") {
        for (let j = 0; j < primitives.length; j++) {
          console.log(primitives);
        }
        variables[i].parentElement.style.display = "none";
      }
    } else if (arr.includes(variables)) {
      if (variables[i].className == "class2") {
        for (let j = 0; j < variables.length; j++) {
          console.log(variables);
        }
        primitives[i].parentElement.style.display = "none";
      }
    }
  }
}

function interval() {
  count -= 1;

  if (count === 10) {
    clearInterval(x);
  }
  seconds.textContent = count;
}

function counter() {
  texts();
  x = setInterval(interval, 1000);
}

counter();

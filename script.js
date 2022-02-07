function texts() {
  let pri = document.getElementById("primitive");
  let ddd = document.getElementById("ddd");
  if ((pri.style.display = "none")) {
    ddd.style.display = "block";
  } else if ((pri.style.display = "block")) {
    ddd.style.display = "none";
  }
}

function counter() {
  const seconds = document.getElementById("demo");

  var count = 15;
  let x = setInterval(timeInterval, 1000);

  function timeInterval() {
    document.getElementById("ddd").style.display = "none";
    count -= 1;
    if (count === 10) {
      clearInterval(x);
      texts();
    }

    seconds.textContent = count;
  }
}

counter();

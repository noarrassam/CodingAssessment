var countDown = 15;

function counter() {
  const seconds = document.getElementById("demo");
  let pri = document.getElementById("primitive");
  let count = 15;
  let x = setInterval(function () {
    count -= 1;
    if (count === 0) {
      clearInterval(x);
    }
    seconds.textContent = count;
  }, 1000);
}

counter();

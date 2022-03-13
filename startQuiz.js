const startButton = function () {
  let prag = document.getElementById("text");
  prag.innerHTML =
    "Start the Quiz" + "<br />" + "You have 1 minute to answer 10 MCQs";
  console.log(prag);
  let form = document.getElementById("nextForm");
  form.action = "./quiz.html";
  form.setAttribute("method", "GET");

  let start = document.getElementById("start");
  start.type = "submit";
  start.value = "Start";
  start.addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Do you want to proceed?")) {
      location.reload(); // Refresh the site, not needed really.
      location.href = "./quiz.html"; // Redirect.
    }
  });
};

startButton();

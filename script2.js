import { questions } from "./questions.js";

for (const key in Object.keys(questions)) {
  // let entry = document.createElement("p");
  let entry = document.getElementById("questionParagraph");
  if (key == 0) {
    entry.innerHTML = questions[key].title;
    // document.body.innerHTML = entry;
    // console.log(entry);
    // console.log(questions[key].choices);
    for (let arr in questions[key].choices) {
      var arrays = questions[key].choices[arr];
      //console.log(arrays);
      let labels = document.createElement("label");

      labels.innerHTML = arrays;
      //console.log(labels);

      // var rdo = document.createElement("input");
      // var rdo = document.getElementById("questionDiv");
      // console.log(rdo);
      var br = document.createElement("br");
      // document.body.appendChild(rdo);
      // document.body.appendChild(labels);
      document.body.appendChild(br);
      // console.log(rdo.id);

      // var btn = document.getElementById(arrays);

      // btn.addEventListener("click", function () {
      //   if (arrays == "alerts") {
      //     alert("correct");
      //   } else {
      //     alert("incorrect");
      //   }
      // });
      let form = document.getElementById("questionDiv");
      let radios = form.getElementsByTagName("input");
      //var radio;
      for (let i = 0; i < radios.length; i++) {
        var radio = radios[i];
      }

      document.body.appendChild(labels);

      radio = labels.innerHTML;
      // document.body.innerHTML = radio;
      console.log(radios);
      console.log(radio);
    }

    var btn = document.createElement("button");
    btn.innerHTML = "Next";
    document.body.appendChild(btn);
  }
}

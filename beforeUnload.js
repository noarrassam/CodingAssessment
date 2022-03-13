function beforeunload() {
  var rld = false;
  $(window).bind("beforeunload", function (e) {
    e.preventDefault();
    if (!rld) {
      console.log(rld);
      setTimeout(function () {
        setTimeout(function () {
          $(location).attr("href", "./index.html");
        }, 1000);
        rld = true;
      }, 1);
      rld = true;
    }
    return "are you sure";
  });
}

export { beforeunload };

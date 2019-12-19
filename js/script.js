mobile();

function mobile() {
  var winwidth = "";
  var htmlsize = document.getElementsByTagName("html")[0];
  first();

  function first() {
    winwidth = document.documentElement.offsetWidth;
    htmlsize.style.fontSize = winwidth / 7.5 + "px";
  }
  window.onresize = function () {
    first();
  }
}

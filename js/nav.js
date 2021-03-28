window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.filter = "blur(0)";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}

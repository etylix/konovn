window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.backgroundColor = "var(--semitrans-bg-color)";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}

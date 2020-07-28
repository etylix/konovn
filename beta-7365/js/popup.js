function daqua() {
  	var aqua = document.getElementById("aqua");
    	aqua.style.display = "block";
  	}

function dkazuma() {
  	document.getElementById("kazuma").style.display = "block";
  	}

function dmegumin() {
  	document.getElementById("megumin").style.display = "block"
  	}

function ddarkness() {
  	document.getElementById("darkness").style.display = "block";
  	}

function mdbg() {
  	var bg = document.getElementsByClassName("close-modal")[0];
    	bg.style.display = "block";
  	}

function s1() {
    document.getElementById("s1").style.display = "block";
    }

function s2() {
    document.getElementById("s2").style.display = "block";
    }

function movie() {
    document.getElementById("movie").style.display = "block";
    }
function closeModal() {
  var x = document.getElementsByClassName("modal");
  var y = document.getElementsByClassName("close-modal");
  var z = document.getElementsByClassName("modal-a");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }

  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
  }

  document.getElementsByClassName("footr").style.display = "none";
}
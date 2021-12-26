function openswitch() {
  if (document.getElementById("sidebar").style.visibility === "hidden") {
    document.getElementById("sidebar").style.visibility = "visible";

    document.getElementById("switch").style.display = "none";
  } else {
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("switch").style.display = "none";
  }
}

function closeswicth() {
  if (document.getElementById("sidebar").style.visibility === "visible") {
    document.getElementById("sidebar").style.visibility = "hidden";

    document.getElementById("switch").style.display = "block";
  } else {
    document.getElementById("sidebar").style.visibility = "hidden";
    document.getElementById("switch").style.display = "block";
  }
}

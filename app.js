window.compute = function() {
  let ww = document.getElementById("ww").value;
  let pt = document.getElementById("pt").value;
  let qa = document.getElementById("qa").value;

  let grade = (ww * 0.3) + (pt * 0.5) + (qa * 0.2);

  document.getElementById("result").innerText =
    "Final Grade: " + grade.toFixed(2);
}
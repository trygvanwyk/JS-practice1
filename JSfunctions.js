function changeParagraph() {
  document.getElementById("p1").innerHTML = "Paragraph changed."
}
function revertParagraph() {
  document.getElementById("p1").innerHTML = "Change this paragraph."
}
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("p2").innerHTML = toCelsius(32);

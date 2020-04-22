function changeParagraph() {
  document.getElementById("p1").innerHTML = "Paragraph changed."
}
function revertParagraph() {
  document.getElementById("p1").innerHTML = "Change this paragraph."
}
function mouseOverDiv() {
  document.getElementById('div1').style.backgroundColor="red"
}
function mouseOffDiv() {
  document.getElementById('div1').style.backgroundColor = "lightgreen"
  document.getElementById('b1').style.backgroundColor = "#fff"
}
function changeButton() {
  document.getElementById('button3').innerHTML = "Revert button";
  document.getElementById('button3').onclick = revertButton;
}
function revertButton() {
  document.getElementById('button3').innerHTML = "Change button";
  document.getElementById('button3').onclick = changeButton;
}

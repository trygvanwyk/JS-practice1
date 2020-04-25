var numbers = [1,2,3,4,5,6,7,8,9,10,11,300,12,13,14,15,16,17,18,19,20]
function sortNumbers() {
  numbers.sort(function(a, b){return a-b})
  document.getElementById("p4").innerHTML = numbers;
}



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
var person = {
  firstName: "Tryg",
  lastName: "van Wyk",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

var yesButton = document.getElementById("button-one");
var noButton = document.getElementById("button-two");
var text = document.querySelector("#button-one p");

const gifs = [
  "images/catgif1.gif",
  "images/catgif2.gif",
  "images/catgif3.gif",
  "images/catgif4.gif",
  "images/catgif5.gif",
  "images/catgif6.gif",
  "images/catgif7.gif",
  "images/catgif8.gif",
  "images/catgif9.gif",
  "images/catgif10.gif",
];

noButton.addEventListener("click", noButtonClicker);

function noButtonClicker() {
  var buttonWidth = yesButton.offsetWidth;
  var buttonHeight = yesButton.offsetHeight;
  var textStyle = window.getComputedStyle(text, null);
  var textSize = parseFloat(textStyle.getPropertyValue("font-size"));
  console.log(textSize);

  yesButton.style.width = buttonWidth * 1.2 + "px";
  yesButton.style.height = buttonHeight * 1.2 + "px";
  yesButton.style.fontSize = textSize * 1.3 + "px";
}

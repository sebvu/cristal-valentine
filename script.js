var yesButton = document.getElementById("button-one");
var noButton = document.getElementById("button-two");
var buttonOneText = document.querySelector("#button-one p");
var gifImage = document.getElementById("catgif");
var gifSelection = 1;

noButton.addEventListener("click", noButtonClicker);

function noButtonClicker() {
  var buttonWidth = yesButton.offsetWidth;
  var buttonHeight = yesButton.offsetHeight;
  var textStyle = window.getComputedStyle(buttonOneText, null);
  var textSize = parseFloat(textStyle.getPropertyValue("font-size"));
  console.log(gifImage.src);

  gifImage.src = (() => {
    gifSelection += 1;
    if (gifSelection >= 11) { // max amount
      gifSelection = 1;
    }

    return `images/catgif${gifSelection}.gif`;
  })();

  yesButton.style.width = buttonWidth * 1.2 + "px";
  yesButton.style.height = buttonHeight * 1.2 + "px";
  yesButton.style.fontSize = textSize * 1.3 + "px";
}

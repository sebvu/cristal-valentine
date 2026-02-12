var yesButton = document.getElementById("button-one");
var noButton = document.getElementById("button-two");
var buttonOneText = document.querySelector("#button-one p");
var buttonTwoText = document.querySelector("#button-two p");
var gifImage = document.getElementById("catgif");
var gifSelection = 1;

const listOfText = [
  "you don't mean that right?",
  "come on don't be like that!",
  "it took me 2 hours to do this cmon.",
  "babeee!! please ughh",
  "why r u so rude to me...",
  "you don't love me :(",
  "🥀 🤘",
  "ic how it is",
  "making me shrivel in my sleep",
  "waa waa waaaa",
];

noButton.addEventListener("click", noButtonClicker);

function noButtonClicker() {
  var buttonWidth = yesButton.offsetWidth;
  var buttonHeight = yesButton.offsetHeight;
  var textStyle = window.getComputedStyle(buttonOneText, null);
  var textSize = parseFloat(textStyle.getPropertyValue("font-size"));
  console.log(gifImage.src);

  gifImage.src = (() => {
    gifSelection += 1;
    if (gifSelection >= 11) {
      // max amount
      gifSelection = 1;
    }

    return `images/catgif${gifSelection}.gif`;
  })();

  console.log(listOfText.length - 1);

  buttonTwoText.textContent =
    listOfText[Math.floor(Math.random() * listOfText.length)];

  yesButton.style.width = buttonWidth * 1.2 + "px";
  yesButton.style.height = buttonHeight * 1.2 + "px";
  yesButton.style.fontSize = textSize * 1.3 + "px";
}

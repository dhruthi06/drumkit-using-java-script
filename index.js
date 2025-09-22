// Dice 1
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimgsource1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimgsource1);

// Dice 2
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimgsource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimgsource2);

// Winner logic
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🎲";
}

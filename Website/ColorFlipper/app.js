const colors = ["red", "green", "blue", "pink", "teal"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.body.style.backgroundColor = "red";
color.textContent = "#FF0000";

btn.addEventListener("click", function () {
  const randomColor = generateRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  color.textContent = randomColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function generateRandomHexColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return randomColor;
}

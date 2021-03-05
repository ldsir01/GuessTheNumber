let CorrectNumber = Math.floor(Math.random() * 100) + 1;

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playgame);
  document.getElementById("restart-game").addEventListener("click", restart);
};

function playgame() {
  var Enterd = document.getElementById("number-guess").value;
  console.log("You guessed " + Enterd);
  DisplayResult(Enterd);
}
function restart() {
  window.location.reload();
}

function DisplayResult(Enterd) {
  if (Enterd == CorrectNumber)
    document.getElementById("Answer").innerHTML = "CORRECT !!";
  else if (Enterd > CorrectNumber)
    document.getElementById("Answer").innerHTML = "TOO HIGH ";
  else document.getElementById("Answer").innerHTML = "TOO LOW";
}

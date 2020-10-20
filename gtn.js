//  getRandomnumber();
let CorrectNumber = Math.floor(Math.random() * 100 ) +1 ;



// console.log(CorrectNumber)


window.onload = function()
{
    document.getElementById("number-submit").addEventListener("click",playgame)
    document.getElementById("restart-game").addEventListener("click", restart)
   
}

function playgame() {
    var Enterd = document.getElementById("number-guess").value; 
    console.log("You guessed " + Enterd)  
    DisplayResult(Enterd);
   
    // var result = parseFloat(OurNumber) - parseFloat(Enterd)
    // // document.getElementById("Answer2").innerHTML="Result is  " +result;


    // if (Enterd == CorrectNumber)
    //   document.getElementById("Answer").innerHTML = "CORRECT !!";
    // else if (Enterd>CorrectNumber)
    //   document.getElementById("Answer").innerHTML = "TOO HIGH ";
    // else
    //   document.getElementById("Answer").innerHTML = "TOO LOW";

}
function restart()
{
    window.location.reload()            //Reoad the page !!!!
    // document.getElementById("random").innerHTML = Math.floor((Math.random() * 100) + 1);    //Generate another random number !!!
}

function DisplayResult(Enterd)
{
   

    if (Enterd == CorrectNumber)
    document.getElementById("Answer").innerHTML = "CORRECT !!";
  else if (Enterd>CorrectNumber)
    document.getElementById("Answer").innerHTML = "TOO HIGH ";
  else
    document.getElementById("Answer").innerHTML = "TOO LOW";
}



// function getRandomnumber()
// {
//     let randomNumber = Math.floor(Math.random() * 100 ) +1 ;
//     console.log(randomNumber)
//     var CorrectNumber = randomNumber;
//     console.log(CorrectNumber)
// }





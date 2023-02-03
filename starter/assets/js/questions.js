// questions taken from https://www.javatpoint.com/javascript-mcq

var questions=[
[["1. Which type of JavaScript language is ___"],[["a. Object-Oriented"],["b. Object-Based"],["c. Assembly-language"],["d. High-level"]],["b. Object-Based"]],
[["2. Which one of the following also known as Conditional Expression: ___"],[["a. Alternative to if-else"],["b. Switch statement"],["c. If-then-else statement"],["d. immediate if"]],["d. immediate if"]],
[["3. In JavaScript, what is a block of statement? ___"],[["a. Conditional block"],["b. block that combines a number of statements into a single compound statement"],["c. both conditional block and a single statement"],["d. block that contains a single statement"]],["b. block that combines a number of statements into a single compound statement"]],
[["4. When interpreter encounters an empty statements, what it will do: ___"],[["a. Shows a warning"],["b. Prompts to complete the statement"],["c. Throws an error"],["d. Ignores the statements"]],["d. Ignores the statements"]],
[["5. Which of the following variables takes precedence over the others if the names are the same? ___"],[["a. Global variable"],["b. The local variable"],["c. The two of the above"],["d. None of the above"]],["b. The local variable"]]
];

function myTimer() {
        
  document.getElementById("time").innerHTML = countDown--;


if (countDown<=0) {
  document.getElementById("question-title").remove();
  endscreen.classList.remove("hide");
  var delul=document.querySelector(".delete");
          delul.remove();
          feedback1.textContent=""
          clearInterval(ci);
          document.getElementById("final-score").innerHTML =  parseInt(correctanswer*10) +". Correct Answers are  " + correctanswer ;

          // fnFinal();

}

}


var scoresBton = document.querySelector("#idscore");
var vscore="";
var nameInt = document.querySelector("#initials");
var choi = document.querySelector("#choices");
var startButton = document.querySelector("#start");
var quescreen=document.querySelector("#questions");
var titlescreen = document.querySelector("#start-screen");
var feedback1 = document.querySelector("#feedback");
var endscreen = document.querySelector("#end-screen");
var submitBotn = document.querySelector("#submit");
// var element = document.querySelector("#choices");
var i=-1;
var ci=0;
var countDown = 50;
var body = document.body;

var element=state=litext=correctanswer=container=0;
var flag=false;
startButton.onclick = startQuiz;


    choi.addEventListener("click", function(event) {

      
      if (event.target.tagName!="UL") {
        flag=true;
      
       element = event.target;
       
    

      //  element.style.backgroundColor = "red";
       state = element.getAttribute("data-answer");
       litext=element.innerHTML;
       if (litext===state) {
        element.style.backgroundColor = "green";
        feedback1.classList.remove("hide");
        correctanswer=correctanswer+1;
        feedback1.textContent="CORRECT"
        setTimeout(function () {
          
          var delul=document.querySelector(".delete");
          delul.remove();
          feedback1.textContent=""
          ques() ;
      }, 100);
        // el.style.removeProperty('background-color');
       }
       else{
        element.style.backgroundColor = "red";
        countDown=countDown-10;
        feedback1.classList.remove("hide");
        // correctanswer=correctanswer+1;
        feedback1.textContent="WRONG"
        setTimeout(function () {
          
          var delul=document.querySelector(".delete");
          delul.remove();
          feedback1.textContent=""
          ques() ;
      },100);
       }
      
      }

      
      });
    

      function fnFinal(){

        saveScore();
        scoresBton.click();
        // document.getElementById("idscore").click();
        // window.open("www.google.com");

      }


      function saveScore() {
        var nam = nameInt.value.trim();
        if (nam !== "") {
          var scores =
            JSON.parse(window.localStorage.getItem("scores")) || []; // assigns new empty array if nothing is in .
          var thisScore = {
            name: nam,
            score: vscore
            
          };
          scores.push(thisScore);
          window.localStorage.setItem("scores", JSON.stringify(scores));
        }
      }
      
      submitBotn.onclick = fnFinal;
     

function startQuiz(){

    ci=setInterval(myTimer, 1000);
    startButton.remove();
    titlescreen.remove();
    quescreen.removeAttribute("class")
    ques()
}


function ques() {

i=i+1;

if (i==5){
  document.getElementById("question-title").remove();
  endscreen.classList.remove("hide");
  clearInterval(ci);
  vscore= parseInt(correctanswer*10);
  document.getElementById("final-score").innerHTML = vscore +". Correct Answers are  " + correctanswer ;
  // fnFinal();
}
       else {
        document.getElementById("question-title").innerHTML=(questions[i])[0];

        var ul = document.createElement("ul");
            ul.setAttribute("class","delete")
      
        var li = document.createElement("li");
        li.textContent = ((questions[i])[1])[0];
        li.setAttribute("data-answer", (questions[i])[2]);
        ul.appendChild(li);
      
        var li = document.createElement("li");
        li.textContent = ((questions[i])[1])[1];
        li.setAttribute("data-answer", (questions[i])[2]);
        ul.appendChild(li);
      
        var li = document.createElement("li");
        li.textContent = ((questions[i])[1])[2];
        li.setAttribute("data-answer", (questions[i])[2]);
        ul.appendChild(li);
      
        var li = document.createElement("li");
        li.textContent = ((questions[i])[1])[3];
        li.setAttribute("data-answer", (questions[i])[2]);
        ul.appendChild(li);
      
        choi.appendChild(ul);
      
       
       } 


}

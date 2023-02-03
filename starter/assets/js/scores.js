function clear() {
    window.localStorage.removeItem("scores");
    document.getElementById("goback").click();
  }
  
  
  document.getElementById("clear").onclick = clear;


 
function highSortScoreDisplay() {
    var lUser = JSON.parse(localStorage.getItem("scores")) || []; // assign empty arraay if nothing in localStorage

    lUser.sort((a,b) => {
    return b.score - a.score;
});

lUser.forEach(function(x) {
    var li = document.createElement("li");
    li.textContent = x.name + " - " + x.score;
    var dis = document.getElementById("highscores");
    dis.appendChild(li);
  });


    
}


highSortScoreDisplay();



//   employees.sort((a, b) => {
//     return a.age - b.age;
// });

// employees.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });




// var lastUser = JSON.parse(localStorage.getItem("user"));
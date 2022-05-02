// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",formSubmit);
var formArr=JSON.parse(localStorage.getItem("schedule")) || [];

function formSubmit(){
    event.preventDefault();
    var formObj={
      masainumber: document.querySelector("#matchNum").value,
      masaiTeam1: document.querySelector("#teamA").value,
      masaiTeam2: document.querySelector("#teamB").value,
      masaiDate: document.querySelector("#date").value,
      masaiVenue: document.querySelector("#venue").value,
    };
    formArr.push(formObj);
    console.log(formArr);
    localStorage.setItem("schedule",JSON.stringify(formArr));
    window.location.href="matches.html";
}
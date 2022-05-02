// write js code here corresponding to matches.html
var formArr=JSON.parse(localStorage.getItem("schedule"));
displaydata(formArr);
var favouritiesArr=JSON.parse(localStorage.getItem("favourites")) || [];

function displaydata(data){
    document.querySelector("tbody").innerHTML ="";
    data.forEach(function (elem) {
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.masainumber;
        var td2=document.createElement("td");
        td2.innerText=elem.masaiTeam1;
        var td3=document.createElement("td");
        td3.innerText=elem.masaiTeam2;
        var td4=document.createElement("td");
        td4.innerText=elem.masaiDate;
        var td5=document.createElement("td");
        td5.innerText=elem.masaiVenue;
        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="white";
        td6.style.backgroundColor="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function() {
            favouritiesFun(elem);
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    });
    function favouritiesFun(elem){
        favouritiesArr.push(elem);
        localStorage.setItem("favourites",JSON.stringify(favouritiesArr));
    }
}
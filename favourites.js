// write js code here corresponding to favourites.html
var favouritiesArr= JSON.parse(localStorage.getItem("favourites"));
displaydata (favouritiesArr);

function displaydata (data){
    data.forEach(function (elem, index) {
        
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
        td6.innerText="Delete";
        td6.style.color="white";
        td6.style.backgroundColor="red";
        td6.style.cursor="pointer";
        td6.setAttribute("class","deleteItem");
        td6.addEventListener("click",function(){
            deleteArr(elem,index);
        });

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    });

}
function deleteArr(elem,index){
    favouritiesArr.splice(index, 1);
    localStorage.setItem("favourites",JSON.stringify(favouritiesArr));
    window.location.reload();
}
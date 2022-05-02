// write js code here corresponding to favourites.html

var favouritedata=JSON.parse(localStorage.getItem("favourites"))||[];

displaydata(favouritedata)

function displaydata(x){

    x.forEach(function(el,index){

        var tr=document.createElement("tr")

        var td1=document.createElement("td");
        td1.innerText=el.MatchNum

        var td2=document.createElement("td");
        td2.innerText=el.TeamA
        
        var td3=document.createElement("td");
        td3.innerText=el.TeamB

        var td4=document.createElement("td");
        td4.innerText=el.Date

        var td5=document.createElement("td");
        td5.innerText=el.Venu

        var td6=document.createElement("td");
        td6.innerText="DELETE";
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            removefromfavourite(el,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
        
    })


}

function  removefromfavourite(el,index){
  favouritedata.splice(index,1)
  localStorage.setItem("favourites",JSON.stringify(favouritedata))
  window.location.reload()

}
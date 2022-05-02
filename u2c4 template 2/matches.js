// write js code here corresponding to matches.html

var favouritedata=JSON.parse(localStorage.getItem("favourites"))||[];

var formarr=JSON.parse(localStorage.getItem("schedule"))||[];

// filter By Venue

function filtered(){
    var selected=document.querySelector("#filterVenue").value;
    document.querySelector("tbody").innerHTML="";

    var filterlist=formarr.filter(function(el){
         return el.Venu==selected
    })
    displaydata(filterlist);
}


displaydata(formarr)

function displaydata(x){
    

    x.forEach(function(el){

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
        td6.innerText="Favourites";
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            addtofavourite(el)
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    })
}

function addtofavourite(el){
    
    favouritedata.push(el)    
    localStorage.setItem("favourites",JSON.stringify(favouritedata))
}
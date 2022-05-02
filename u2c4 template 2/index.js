// write js code here corresponding to index.html
// You should add submit event on the form


var formarr=JSON.parse(localStorage.getItem("schedule"))||[];

document.querySelector("#masaiForm").addEventListener("submit",myfun);

function myfun(){
    event.preventDefault()

    var formobj={
        MatchNum:document.querySelector("#matchNum").value,
        TeamA:document.querySelector("#teamA").value,
        TeamB:document.querySelector("#teamB").value,
        Date:document.querySelector("#date").value,
        Venu:document.querySelector("#venue").value,
    }
    formarr.push(formobj)

    localStorage.setItem("schedule",JSON.stringify(formarr))

}

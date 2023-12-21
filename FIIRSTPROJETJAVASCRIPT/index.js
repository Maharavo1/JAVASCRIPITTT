//variables globales


//abonnement

//fonctions
function demarrer() {
    document.getElementById("boutton").addEventListener("click" , exploser)
}

function exploser() {
    document.getElementById("p1").innerHTML="Boutton nucleaire presse"
    document.getElementById("p2").innerHTML="T es debille ou quoi?"
    let body = document.getElementsByName("body")
    
}

//corps
window.addEventListener("load" , demarrer)
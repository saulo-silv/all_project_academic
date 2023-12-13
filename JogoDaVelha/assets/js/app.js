const btnNovoJogo = document.querySelector("button")

const casa1 = document.querySelector("#casa_101")
const casa2 = document.querySelector("#casa_102")
const casa3 = document.querySelector("#casa_103")
const casa4 = document.querySelector("#casa_201")
const casa5 = document.querySelector("#casa_202")
const casa6 = document.querySelector("#casa_203")
const casa7 = document.querySelector("#casa_301")
const casa8 = document.querySelector("#casa_302")
const casa9 = document.querySelector("#casa_303")

var player = 1
var travarInput = 0
var pontos1= 0
var pontos2= 0
var centena = 0
var unidade = 0

document.getElementById("pontos_player_1").textContent = `Player 1 - ${pontos1} pontos`
document.getElementById("pontos_player_2").textContent = `Player 2 - ${pontos2} pontos`

btnNovoJogo.onclick = function(e){
    document.getElementById("casa_101").className = "casa v";
    document.getElementById("casa_102").className = "casa v";
    document.getElementById("casa_103").className = "casa v";
    document.getElementById("casa_201").className = "casa v";
    document.getElementById("casa_202").className = "casa v";
    document.getElementById("casa_203").className = "casa v";
    document.getElementById("casa_301").className = "casa v";
    document.getElementById("casa_302").className = "casa v";
    document.getElementById("casa_303").className = "casa v";

    travarInput = 0
    player = 1
}

function checarVencedores(){
    if(travarInput==0){
        if(((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_103").className == "casa x"))
        || ((document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_203").className == "casa x"))
        || ((document.getElementById("casa_301").className == "casa x") && (document.getElementById("casa_302").className == "casa x") && (document.getElementById("casa_303").className == "casa x"))
        || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_301").className == "casa x")) 
        || ((document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_302").className == "casa x")) 
        || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_203").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
        || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
        || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_301").className == "casa x"))){
           pontos1++
           document.getElementById("pontos_player_1").textContent = `Player 1 - ${pontos1} pontos`
           travarInput=1
       }
       else if(((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_103").className == "casa o"))
        || ((document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_203").className == "casa o")) 
        || ((document.getElementById("casa_301").className == "casa o") && (document.getElementById("casa_302").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
        || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_301").className == "casa o")) 
        || ((document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_302").className == "casa o")) 
        || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_203").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
        || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
        || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_301").className == "casa o"))){
           pontos2++
           document.getElementById("pontos_player_2").textContent = `Player 2 - ${pontos2} pontos`
           travarInput=1
       }
    }    
}

function mudarCasa(){
    if(travarInput==0){
        if(document.getElementById(`casa_${centena}0${unidade}`).className == "casa v"){
            if (player==1){
                document.getElementById(`casa_${centena}0${unidade}`).className = "casa x";
                player = 2
            }
            else if (player==2){
                document.getElementById(`casa_${centena}0${unidade}`).className = "casa o";
                player = 1
            }
        }
    }  
}

casa1.onclick = function(e) {
    centena=1
    unidade=1
    mudarCasa()
    checarVencedores()
}
casa2.onclick = function(e) {
    centena=1
    unidade=2
    mudarCasa()
    checarVencedores()
}
casa3.onclick = function(e) {
    centena=1
    unidade=3
    mudarCasa()
    checarVencedores()
}
casa4.onclick = function(e) {
    centena=2
    unidade=1
    mudarCasa()
    checarVencedores()
}
casa5.onclick = function(e) {
    centena=2
    unidade=2
    mudarCasa()
    checarVencedores()
}
casa6.onclick = function(e) {
    centena=2
    unidade=3
    mudarCasa()
    checarVencedores()
}
casa7.onclick = function(e) {
    centena=3
    unidade=1
    mudarCasa()
    checarVencedores()
}
casa8.onclick = function(e) {
    centena=3
    unidade=2
    mudarCasa()
    checarVencedores()
}
casa9.onclick = function(e) {
    centena=3
    unidade=3
    mudarCasa()
    checarVencedores()
}
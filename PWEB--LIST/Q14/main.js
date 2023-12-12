let tempo_fumante=parseInt(prompt("quantos anos de fumante:"));
let num_cigarros= parseInt(prompt("quantos cigarros fumados por dia:"));
let cigarro_uni= parseFloat(prompt("valor do cigarro por unidade:"));

let gasto_dia = num_cigarros * cigarro_uni;
let gasto_total = (tempo_fumante * 365)
document.write("valor gasto: "+ gasto_total + " reais")
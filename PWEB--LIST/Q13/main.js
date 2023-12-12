let x = parseInt(prompt("Digite o numero: "));
y = 1;
contador=1;
while(y<x){
    y = contador * (contador+1)*(contador+2);
    contador++;
}
contador-- ;
if(y == x){
    document.write("É triangular. ");
}else{
    document.write("Não é triangular!");
}

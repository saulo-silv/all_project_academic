let num1 = parseInt(prompt('Digite o primeiro numero: '));
let num2 = parseInt(prompt('Digite o segundo numero: '));

if(num1 >= 1 && num2 >= 1) {
  
    while(num2 != 0){
        var x = num1 % num2;
        num1 = num2;
        num2 = x;
    }
    document.write(num1);
  
} else {
  document.write('Digite um valor inteiro positivo!');
}

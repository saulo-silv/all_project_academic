let array1 = [1,18,11,14,17,25];

function media(array1) {
    let i = 0, soma = 0, Al = array1.length;
    while (i < Al) {
        soma = soma + array1[i++];
}
    return soma / Al;
}

let arr = media(array1);
alert(arr)
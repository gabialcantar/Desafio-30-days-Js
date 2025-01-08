// criar uma função de soma no js
function aumentar (a,b) {
    return a + b;
}
let resultado = aumentar (15, 100); // aqui é realizado o chamamento da função
console.log(resultado); 

// criar uma função de subtração no js
function subtrair (n,m){
    return n - m;
}
let diminuir = subtrair (10,5);
console.log(diminuir) 

//criar uma função que realize a multiplicação de valores
function multiplica(x,z){
    return x * z;
}
let mult = multiplica(11,5);
console.log(mult)

// criação de uma função com parametro
function minhapresenta(nome, idade, frase) {
  console.log(`Meu nome é ${nome}, tenho ${idade} anos e tenho uma frase comigo: "${frase}"`);
}

minhapresenta("Gabriela", 22, "Temos que acreditar em dias melhores");
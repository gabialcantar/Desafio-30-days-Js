const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: "2024",
    visual: function() {
        return `A Marca ${this.marca}, possui o ${this.modelo} do ano de ${this.ano}`;
    },
};

console.log(carro.visual()); // Corrigido: chama o método do objeto `carro`

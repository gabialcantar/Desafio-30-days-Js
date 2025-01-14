const input =  document.getElementById("campoTexto");
const botao =  document.getElementById("mostrarTexto");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    // Captura o valor do input
    const texto = input.value;

    // Mostra o texto no parágrafo
    if (texto) {
        resultado.textContent = `Você digitou: ${texto}`;
    } else {
        resultado.textContent = "Por favor, insira algo no campo.";
    }
});
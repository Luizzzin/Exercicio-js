function start() {
    let cadastro = Number(prompt("INFORME AQUI O SEU NUMERO DE CADASTRO"));
    let resultadoElement = document.querySelector(".resultado");
    
    if (cadastro >= 1000 && cadastro < 1999) {
        document.querySelector(".body").style.backgroundColor = "var(--green)";
        resultadoElement.textContent = "Acesso a todas áreas restritas";
    } else {
        resultadoElement.textContent = "Número de cadastro fora do intervalo.";
    }
}



//const braco = document.querySelector("#braco")

/* --querySelectorAll: Uma lista é criada com todos os elementos HTML que possuem a classe .controle-ajuste-- */
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}
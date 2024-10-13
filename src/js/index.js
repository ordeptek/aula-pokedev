//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();
        
        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = mostarCartaoPokedevSelecionado(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativaPokedevNaListagem();

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativaPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativaPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const listagemPokedevSelecionado = document.getElementById(idPokedevSelecionado);
    listagemPokedevSelecionado.classList.add("ativo");
}

function desativaPokedevNaListagem() {
    const listagemPokedevAberto = document.querySelector(".ativo");
    listagemPokedevAberto.classList.remove("ativo");
}

function mostarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

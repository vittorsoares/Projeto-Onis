const botao = document.querySelectorAll(".botao");
const personagem = document.querySelectorAll(".personagem");

botao.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelectorAll(".botao.selecionado");
    const personagemSelecionado = document.querySelectorAll(
      ".personagem.selecionado"
    );

    //DESSELECIONAR OS BOTOES E PERSONAGENS
    desselecionarBotao(botaoSelecionado);
    desselecionarPersonagem(personagemSelecionado);

    //ADICIONAR A CLASSE SELECIONADO AOS BOTOES E PERSONAGENS SELECIONADOS
    botao.classList.add("selecionado");
    personagem[indice].classList.add("selecionado");
  });
});

function desselecionarBotao(botaoSelecionado) {
  botaoSelecionado.forEach((botao) => {
    botao.classList.remove("selecionado");
  });
}

function desselecionarPersonagem(personagemSelecionado) {
  personagemSelecionado.forEach((personagem) => {
    personagem.classList.remove("selecionado");
  });
}

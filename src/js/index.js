const botaoAlterarTema= document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemTrocaTemaSol = document.querySelector(".trocar-imagem-sol");

const imagemTrocaTemaForm = document.querySelector(".trocar-imagem-formulario-felino");

const imagemTrocaTemaGaleria = document.querySelector(".trocar-imagem-galeria");

const imagemTrocaTemaGitHub = document.querySelector(".trocar-imagem-github");

const informacaoCardHoverJudite = document.querySelector(".info-ju");

const informacaoCardHoverMuka = document.querySelector(".info-mu");

const informacaoCardHoverHaru = document.querySelector(".info-ha");

const informacaoCardHoverYoru = document.querySelector(".info-yo");

const informacaoCardHoverZero = document.querySelector(".info-ze");

const nomeGatoJudite = document.querySelector(".nome-ju")

const nomeGatoMuka = document.querySelector(".nome-mu")

const nomeGatoHaru = document.querySelector(".nome-ha")

const nomeGatoYoru = document.querySelector(".nome-yo")

const nomeGatoZero = document.querySelector(".nome-ze")


const criadorDoConteudo = document.querySelector("h4")

botaoAlterarTema.addEventListener("click", () => {

        const modoEscuroEstaAtivo = body.classList.contains("body-dark");

        if(modoEscuroEstaAtivo) {

                body.classList.remove("body-dark");

                imagemTrocaTemaSol.setAttribute("src", "./src/imagens/icons/sun-img.png");

                imagemTrocaTemaForm.setAttribute("src", "./src/imagens/icons/cat-form.gif");

                imagemTrocaTemaGaleria.setAttribute("src", "./src/imagens/icons/gallery-img.png");

                imagemTrocaTemaGitHub.setAttribute("src", "./src/imagens/icons/github-logo-icon.png");

                informacaoCardHoverJudite.classList.remove("info-dark-judite", "info-dark-ju");

                informacaoCardHoverMuka.classList.remove("info-dark-muka","info-dark-mu");

                informacaoCardHoverHaru.classList.remove("info-dark-haru","info-dark-ha");

                informacaoCardHoverYoru.classList.remove("info-dark-yoru","info-dark-yo");

                informacaoCardHoverZero.classList.remove("info-dark-zero","info-dark-ze");
                
                nomeGatoJudite.classList.remove("nome-dark-ju");

                nomeGatoMuka.classList.remove("nome-dark-mu");

                nomeGatoHaru.classList.remove("nome-dark-ha");

                nomeGatoYoru.classList.remove("nome-dark-yo");

                nomeGatoZero.classList.remove("nome-dark-ze");

                criadorDoConteudo.classList.remove("h4-tema");
        } else {
                body.classList.add("body-dark");

                imagemTrocaTemaSol.setAttribute("src", "./src/imagens/icons/moon-img.png");
        
                imagemTrocaTemaForm.setAttribute("src", "./src/imagens/icons/cat-form-white.gif");
        
                imagemTrocaTemaGaleria.setAttribute("src", "./src/imagens/icons/gallery-img-white.png");
        
                imagemTrocaTemaGitHub.setAttribute("src", "./src/imagens/icons/github-logo-icon-white.png");

                informacaoCardHoverJudite.classList.add("info-dark-judite");

                informacaoCardHoverMuka.classList.add("info-dark-muka","info-dark-mu");

                informacaoCardHoverHaru.classList.add("info-dark-haru","info-dark-ha");

                informacaoCardHoverYoru.classList.add("info-dark-yoru","info-dark-yo");

                informacaoCardHoverZero.classList.add("info-dark-zero","info-dark-add");

                nomeGatoJudite.classList.add("nome-dark-ju");

                nomeGatoMuka.classList.add("nome-dark-mu");

                nomeGatoHaru.classList.add("nome-dark-ha");

                nomeGatoYoru.classList.add("nome-dark-yo");

                nomeGatoZero.classList.add("nome-dark-ze");

                criadorDoConteudo.classList.add("h4-tema");
        }
});


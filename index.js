
const btnSortear = document.getElementById("btnShuffleCards")
const header = document.getElementById("cabecalho")
const spaceCardP1 = document.getElementById("spaceCardP1");
const spaceCardP2 = document.getElementById("spaceCardP2");
const btnAttribute = document.getElementById("btnAttribute");
const BtnProxima = document.getElementById("BtnProxima")

const game = new Game();

btnSortear.addEventListener("click", () => {
    btnSortear.disabled = true;
    game.shuffleCards(spaceCardP1);

})

btnAttribute.addEventListener("click", () => {    
    btnSortear.disabled = false;
    btnAttribute.disabled = true;
    game.chooseAttribute();
    game.exibirCardP2(spaceCardP2);
})

BtnProxima.addEventListener("click", () =>{
    game.proximaRodada()
})
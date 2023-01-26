
const btnSortear = document.getElementById("btnShuffleCards")
const header = document.getElementById("cabecalho")
const spaceCardP1 = document.getElementById("spaceCardP1");
const spaceCardP2 = document.getElementById("spaceCardP2");
const btnAttribute = document.getElementById("btnAttribute");
const attributePower = document.getElementById("attributePower")
const attributeAgility = document.getElementById("attributeAgility")
const attributeIntelligence = document.getElementById("attributeIntelligence")
const BtnProxima = document.getElementById("BtnProxima")

const game = new Game();

btnSortear.addEventListener("click", () => {
    btnSortear.disabled = true;
    game.shuffleCards(spaceCardP1);

})

attributePower.addEventListener("click", () => {
    game.chooseAttribute();
    game.exibirCardP2(spaceCardP2);
    attributePower.disabled = true;
    attributeAgility.disabled = true;
    attributeIntelligence.disabled = true;
})

attributeAgility.addEventListener("click", () => {
    game.chooseAttribute();
    game.exibirCardP2(spaceCardP2);
    attributePower.disabled = true;
    attributeAgility.disabled = true;
    attributeIntelligence.disabled = true;
})

attributeIntelligence.addEventListener("click", () => {
    game.chooseAttribute();
    game.exibirCardP2(spaceCardP2);
    attributePower.disabled = true;
    attributeAgility.disabled = true;
    attributeIntelligence.disabled = true;
})

BtnProxima.addEventListener("click", () => {
    btnSortear.disabled = false;
    attributePower.checked = false;
    attributeAgility.checked = false;
    attributeIntelligence.checked = false;
    attributePower.disabled = false;
    attributeAgility.disabled = false;
    attributeIntelligence.disabled = false;
    game.proximaRodada()
})
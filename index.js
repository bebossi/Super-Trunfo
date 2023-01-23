
const btnSortear = document.getElementById("btnShuffleCards")
const header = document.getElementById("cabecalho")
const spaceCardP1 = document.getElementById("spaceCardP1");
const spaceCardP2 = document.getElementById("spaceCardP2");
const btnAttribute = document.getElementById("btnAttribute");


btnSortear.addEventListener("click", () => {
    btnSortear.disabled = true
    const game = new Game();
    game.shuffleCards(spaceCardP1, spaceCardP2);

})

btnAttribute.addEventListener("click", () => {
    btnSortear.disabled = false
    const game = new Game();
    game.chooseAttribute()
})
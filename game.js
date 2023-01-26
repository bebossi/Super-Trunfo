class Game {
    constructor() {
        this.allCards = [
            {
                name: "Kratos",
                attributesCharacter: {
                    power: 95,
                    agility: 55,
                    intelligence: 70
                }
            },
            {
                name: "Batman",
                attributesCharacter: {
                    power: 65,
                    agility: 80,
                    intelligence: 80
                }
            },
            {
                name: "Gato de Botas",
                attributesCharacter: {
                    power: 35,
                    agility: 95,
                    intelligence: 90
                }
            },
            {
                name: "Itachi",
                attributesCharacter: {
                    power: 80,
                    agility: 60,
                    intelligence: 80
                }
            },
            {
                name: "Ellie",
                attributesCharacter: {
                    power: 40,
                    agility: 90,
                    intelligence: 90
                }
            },
            {
                name: "Goku",
                attributesCharacter: {
                    power: 90,
                    agility: 90,
                    intelligence: 40
                }
            },
            {
                name: "Luffy",
                attributesCharacter: {
                    power: 85,
                    agility: 95,
                    intelligence: 40
                }
            },
            {
                name: "Thanos",
                attributesCharacter: {
                    power: 90,
                    agility: 40,
                    intelligence: 90
                }
            }
        ];
        this.player1Cards = [];
        this.player2Cards = [];
        this.takenCards = [];
    }

    shuffleCards(spaceCardP1) {
        let cartaSorteadaP1 = Math.floor(Math.random() * this.allCards.length);
        let cartaSorteadaP2 = Math.floor(Math.random() * this.allCards.length);

        this.player1Cards = this.allCards[cartaSorteadaP1];
        this.player2Cards = this.allCards[cartaSorteadaP2];
        if (this.player1Cards === this.player2Cards) {
            return this.shuffleCards(spaceCardP1);
        }

        if (this.takenCards.includes(this.player1Cards)) {
            return this.shuffleCards(spaceCardP1);
          }
          if (this.takenCards.includes(this.player2Cards)) {
            return this.shuffleCards(spaceCardP1);
          }
          this.takenCards.push(this.player1Cards, this.player2Cards);  

        const img1 = document.createElement("img");
        img1.setAttribute("src", `./imagens/${this.allCards.indexOf(this.player1Cards)}.jpg`);
        img1.classList.add("img");
        if (spaceCardP1.children.length !== 0) {
            spaceCardP1.removeChild(spaceCardP1.lastChild)
            spaceCardP1.removeChild(spaceCardP1.lastChild)
        };
        spaceCardP1.appendChild(img1);

        const attributesCharacter = document.createElement("div");
        attributesCharacter.classList.add("attributesCharacter");
        spaceCardP1.appendChild(attributesCharacter);
        attributesCharacter.innerHTML = `<p>Power: ${this.player1Cards.attributesCharacter.power}</p>   
           <p>Agility: ${this.player1Cards.attributesCharacter.agility} </p> 
           <p>Intelligence: ${this.player1Cards.attributesCharacter.intelligence}</p> `;

           
    }

    chooseAttribute() {
        const attributePower = document.getElementById("attributePower");
        const attributeAgility = document.getElementById("attributeAgility");
        const attributeIntelligence = document.getElementById("attributeIntelligence");
        const scoreP1 = document.getElementById("scoreP1");
        const scoreP2 = document.getElementById("scoreP2");

        if (attributePower.checked === true) {
            if (this.player1Cards.attributesCharacter.power > this.player2Cards.attributesCharacter.power) {
                scoreP1.innerText = Number(scoreP1.innerText) + 1
            } else if (this.player1Cards.attributesCharacter.power < this.player2Cards.attributesCharacter.power) {
                scoreP2.innerText = Number(scoreP2.innerText) + 1
            }
        };
        if (attributeIntelligence.checked == true) {
            if (this.player1Cards.attributesCharacter.intelligence > this.player2Cards.attributesCharacter.intelligence) {
                scoreP1.innerText = Number(scoreP1.innerText) + 1
            } else if (this.player1Cards.attributesCharacter.intelligence < this.player2Cards.attributesCharacter.intelligence) {
                scoreP2.innerText = Number(scoreP2.innerText) + 1
            }
        };
        if (attributeAgility.checked == true) {
            if (this.player1Cards.attributesCharacter.agility > this.player2Cards.attributesCharacter.agility) {
                scoreP1.innerText = Number(scoreP1.innerText) + 1
            } else if (this.player1Cards.attributesCharacter.agility < this.player2Cards.attributesCharacter.agility) {
                scoreP2.innerText = Number(scoreP2.innerText) + 1
            }
        };

    }

    exibirCardP2(spaceCardP2) {
        const img2 = document.createElement("img");
        img2.setAttribute("src", `./imagens/${this.allCards.indexOf(this.player2Cards)}.jpg`);
        img2.classList.add("img");
        if (spaceCardP2.children.length !== 0) {
            spaceCardP2.removeChild(spaceCardP2.lastChild)
            spaceCardP2.removeChild(spaceCardP2.lastChild)
        };
        spaceCardP2.appendChild(img2);

        const attributesCharacter = document.createElement("div");
        attributesCharacter.classList.add("attributesCharacter");
        spaceCardP2.appendChild(attributesCharacter);
        attributesCharacter.innerHTML = `<p>Power: ${this.player2Cards.attributesCharacter.power}</p>   
         <p>Agility: ${this.player2Cards.attributesCharacter.agility} </p> 
         <p>Intelligence: ${this.player2Cards.attributesCharacter.intelligence}</p>`
    }

    proximaRodada(scoreP1, scoreP2) {
        spaceCardP1.removeChild(spaceCardP1.lastChild);
        spaceCardP1.removeChild(spaceCardP1.lastChild);
        spaceCardP2.removeChild(spaceCardP2.lastChild);
        spaceCardP2.removeChild(spaceCardP2.lastChild);
        this.fimDoJogo(scoreP1, scoreP2);
    };

    fimDoJogo(scoreP1, scoreP2){
        if(this.takenCards.length == 8){
            const resultadoFinal = document.createElement("div");
            resultadoFinal.classList.add("resultadoFinal");
            proximaRodada.appendChild(resultadoFinal);
            if(Number(scoreP1.innerText) > Number(scoreP2.innerText)){
                resultadoFinal.innerText = "PLAYER 1 VENCEU O JOGO" 
            } else if(Number(scoreP1.innerText) < Number(scoreP2.innerText)){
                resultadoFinal.innerText = "PLAYER 2 VENCEU O JOGO" 
            }
        }
    }
}
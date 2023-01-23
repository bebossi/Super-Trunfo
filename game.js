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
                    power: 60,
                    agility: 70,
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
    }

    shuffleCards(spaceCardP1, spaceCardP2) {
        let cartaSorteadaP1 = Math.floor(Math.random() * this.allCards.length);
        let cartaSorteadaP2 = Math.floor(Math.random() * this.allCards.length);

        this.player1Cards = this.allCards[cartaSorteadaP1];             //sorteando carta
        this.player2Cards = this.allCards[cartaSorteadaP2];
        if (this.player1Cards === this.player2Cards) {                     // negando que sejam iguais
            return
        }

        //    let cartasJaSorteadas = this.allCards.filter((item) => {        // tentando que nao se possa repetir essa carta no sorteio
        //     item === this.player1Cards
        //    });

        const img1 = document.createElement("img");
        img1.setAttribute("src", `./imagens/${this.allCards.indexOf(this.player1Cards)}.jpg`);                        //falta associar cada imagem a um objeto
        img1.classList.add("img");
        spaceCardP1.appendChild(img1);

        const attributesCharacter = document.createElement("div")
        attributesCharacter.classList.add("attributesCharacter")
        spaceCardP1.appendChild(attributesCharacter)
        attributesCharacter.innerHTML = `<p>Power:</p> ${this.player1Cards.attributesCharacter.power}   
   <p>Agility:</p> ${this.player1Cards.attributesCharacter.agility} 
   <p>Intelligence:</p> ${this.player1Cards.attributesCharacter.intelligence}`

        const img2 = document.createElement("img");
        img2.setAttribute("src", `./imagens/${this.allCards.indexOf(this.player2Cards)}.jpg`)
        img2.classList.add("img")

        spaceCardP2.appendChild(img2);
    }


    chooseAttribute() {
        const attributePower = document.getElementById("attributePower");
        const attributeAgility = document.getElementById("attributeAgility");
        const attributeIntelligence = document.getElementById("attributeIntelligence");

        if (attributePower.checked == true) {
            if (this.player1Cards.power > this.player2Cards.power) {
                return "Player 1 ganhou"
            } else {
                return "Player 2 ganhou"
            }
        }
        if(attributeIntelligence.checked == true){
            if(this.player1Cards.intelligence > this.player2Cards.intelligence){
                return "player 1 ganhou"
            } else{
                return "player 2 ganhou"
            }
        }
        if(attributeAgility.checked == true){
            if(this.player1Cards.agility > this.player2Cards.agility){
                return "player 1 ganhou"
            } else{
                return "player 2 ganhou"
            }
        }

    }








}
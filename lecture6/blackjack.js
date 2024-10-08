let hidden;
let deck;

let dealerSum = 0;
let dealerAceCount = 0;

let numberOfPlayers = 1;

let playersSum = [];
let playersAceCounts = [];
let playersCanHit = [];

let cards = new Map();
cards.set("2-C", "https://upload.wikimedia.org/wikipedia/commons/3/30/English_pattern_2_of_clubs.svg");
cards.set("2-D", "https://upload.wikimedia.org/wikipedia/commons/9/99/English_pattern_2_of_diamonds.svg");
cards.set("2-H", "https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_2_of_hearts.svg");
cards.set("2-S", "https://upload.wikimedia.org/wikipedia/commons/0/0b/English_pattern_2_of_spades.svg");

cards.set("3-C", "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_3_of_clubs.svg");
cards.set("3-D", "https://upload.wikimedia.org/wikipedia/commons/2/2c/English_pattern_3_of_diamonds.svg");
cards.set("3-H", "https://upload.wikimedia.org/wikipedia/commons/0/0f/English_pattern_3_of_hearts.svg");
cards.set("3-S", "https://upload.wikimedia.org/wikipedia/commons/a/a5/English_pattern_3_of_spades.svg");

cards.set("4-C", "https://upload.wikimedia.org/wikipedia/commons/c/c0/English_pattern_4_of_clubs.svg");
cards.set("4-D", "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_4_of_diamonds.svg");
cards.set("4-H", "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_4_of_hearts.svg");
cards.set("4-S", "https://upload.wikimedia.org/wikipedia/commons/3/34/English_pattern_4_of_spades.svg");

cards.set("5-C", "https://upload.wikimedia.org/wikipedia/commons/7/74/English_pattern_5_of_clubs.svg");
cards.set("5-D", "https://upload.wikimedia.org/wikipedia/commons/6/6c/English_pattern_5_of_diamonds.svg");
cards.set("5-H", "https://upload.wikimedia.org/wikipedia/commons/c/c6/English_pattern_5_of_hearts.svg");
cards.set("5-S", "https://upload.wikimedia.org/wikipedia/commons/9/9c/English_pattern_5_of_spades.svg");

cards.set("6-C", "https://upload.wikimedia.org/wikipedia/commons/0/02/English_pattern_6_of_clubs.svg");
cards.set("6-D", "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_6_of_diamonds.svg");
cards.set("6-H", "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_6_of_hearts.svg");
cards.set("6-S", "https://upload.wikimedia.org/wikipedia/commons/a/ac/English_pattern_6_of_spades.svg");

cards.set("7-C", "https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg");
cards.set("7-D", "https://upload.wikimedia.org/wikipedia/commons/5/5d/English_pattern_7_of_diamonds.svg");
cards.set("7-H", "https://upload.wikimedia.org/wikipedia/commons/c/cb/English_pattern_7_of_hearts.svg");
cards.set("7-S", "https://upload.wikimedia.org/wikipedia/commons/d/d1/English_pattern_7_of_spades.svg");

cards.set("8-C", "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_8_of_clubs.svg");
cards.set("8-D", "https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg");
cards.set("8-H", "https://upload.wikimedia.org/wikipedia/commons/3/3c/English_pattern_8_of_hearts.svg");
cards.set("8-S", "https://upload.wikimedia.org/wikipedia/commons/4/4d/English_pattern_8_of_spades.svg");

cards.set("9-C", "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_9_of_clubs.svg");
cards.set("9-D", "https://upload.wikimedia.org/wikipedia/commons/f/f5/English_pattern_9_of_diamonds.svg");
cards.set("9-H", "https://upload.wikimedia.org/wikipedia/commons/2/22/English_pattern_9_of_hearts.svg");
cards.set("9-S", "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_9_of_spades.svg");

cards.set("10-C", "https://upload.wikimedia.org/wikipedia/commons/4/48/English_pattern_10_of_clubs.svg");
cards.set("10-D", "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_diamonds.svg");
cards.set("10-H", "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_10_of_hearts.svg");
cards.set("10-S", "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_spades.svg");

cards.set("J-C", "https://upload.wikimedia.org/wikipedia/commons/8/80/English_pattern_jack_of_clubs.svg");
cards.set("J-D", "https://upload.wikimedia.org/wikipedia/commons/1/16/English_pattern_jack_of_diamonds.svg");
cards.set("J-H", "https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg");
cards.set("J-S", "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_jack_of_spades.svg");

cards.set("Q-C", "https://upload.wikimedia.org/wikipedia/commons/b/b3/English_pattern_queen_of_clubs.svg");
cards.set("Q-D", "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_queen_of_diamonds.svg");
cards.set("Q-H", "https://upload.wikimedia.org/wikipedia/commons/9/9d/English_pattern_queen_of_hearts.svg");
cards.set("Q-S", "https://upload.wikimedia.org/wikipedia/commons/c/ca/English_pattern_queen_of_spades.svg");

cards.set("K-C", "https://upload.wikimedia.org/wikipedia/commons/3/3e/English_pattern_king_of_clubs.svg");
cards.set("K-D", "https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg");
cards.set("K-H", "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_king_of_hearts.svg");
cards.set("K-S", "https://upload.wikimedia.org/wikipedia/commons/f/f1/English_pattern_king_of_spades.svg");

cards.set("A-C", "https://upload.wikimedia.org/wikipedia/commons/5/5f/English_pattern_ace_of_clubs.svg");
cards.set("A-D", "https://upload.wikimedia.org/wikipedia/commons/0/00/English_pattern_ace_of_diamonds.svg");
cards.set("A-H", "https://upload.wikimedia.org/wikipedia/commons/d/d4/English_pattern_ace_of_hearts.svg");
cards.set("A-S", "https://upload.wikimedia.org/wikipedia/commons/1/19/English_pattern_ace_of_spades.svg");

cards.set("hidden", "https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg");



function init() {
    console.log("intializing game variables")
    dealerSum = 0;
    dealerAceCount = 0;

    for (let i = 0; i < numberOfPlayers; i++) {
        playersSum[i] = 0;
        playersAceCounts[i] = 0;
        playersCanHit[i] = true;
    }
}

window.onload = function() {
    console.log("window loading")
    init();
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cardSuits = ["C", "D", "H", "S"];
    deck = [];
    for (let t = 0; t < cardSuits.length; t++){
        for (let v = 0; v < cardValues.length; v++){
            deck.push(cardValues[v] + "-" + cardSuits[t]);
        }
    }

    console.log(deck);
}

function shuffleDeck() {
    console.log("suffling deck");
    for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);

        let tempCard = deck[i];
        deck[i] = deck[j];
        deck[j] = tempCard;

    }

    console.log("shuffled deck");
    console.log(deck);
}

function startGame() {
    console.log("starting game");
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    console.log("dealers hidden card: " + hidden);
    console.log("dealer's sum: " + dealerSum);

    console.log("dealer drawing addtional card");
    while (dealerSum < 17){
        let cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card");
        let card = deck.pop();
        cardImg.src = cards.get(card);
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        // create image tag
        document.getElementById("dealer-hand").appendChild(cardImg);

    }

}

function checkAce(card) {
    let cardInfo = card.split("-");
    let value = cardInfo[0];
    if (value === "A"){
        return 1;

    } else {
        return 0;
    }
}

function getValue() {
    let cardInfo = card.split("-");
    let value = cardInfo[0];
    if (isNaN(value)){
        if (value === "A"){
            return 11;
        } else {
            return 10;
        }
    } else {
        return parseInt(value);
    }

}

function reduceAce(playersSum, playersAceCounts) {
    while (playersSum > 21 && playersAceCounts > 0){
        playerSum = playerSum - 10;
        playersAceCounts--;

    }
    return playerSum;
}
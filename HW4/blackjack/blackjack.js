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

window.onload = function() {
	console.log("Window loaded!");
	init();
	buildDeck();
	shuffleDeck();
	startGame();
}

function init() {
	console.log("Initializing game variables...");
	dealerSum = 0;
	dealerAceCount = 0;

	for (let i = 0; i < numberOfPlayers; i++) {
		playersSum[i] = 0;
		playersAceCounts[i] = 0;
		playersCanHit[i] = true;
	}
}

function buildDeck() {
	console.log("Building deck...");
	let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	let cardTypes = ["C", "D", "H", "S"];
	deck = [];

	for (let t = 0; t < cardTypes.length; t++) {
		for (let v = 0; v < cardValues.length; v++) {
			// add values in the format of "value-type" to the deck
			deck.push(cardValues[v] + "-" + cardTypes[t]); // "2-H", "J-S"
		}
	}

	// log the output of the deck to the console
	console.log(deck)
}

function shuffleDeck() {
	console.log("Shuffling deck...");
	for (let i = 0; i < deck.length; i++) {
		// generate a new random location for the card
		let j = Math.floor(Math.random() * deck.length); // (0, 1) * 52 => (0, 51.9999)
		let tempCard = deck[i];
		deck[i] = deck[j];
		deck[j] = tempCard;
	}
	console.log("Shuffled deck: " + deck);
	console.log(deck);
}

function startGame() {
    console.log("Starting game...");
    hidden = deck.pop(); // Dealer's hidden card
    dealerSum += getValue(hidden); // Add the value of the hidden card to dealer's sum
    console.log("Dealer's hidden card: " + hidden);
    console.log("Dealer's sum: " + dealerSum);


    while (dealerSum < 17) {
        let cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card");
        let card = deck.pop();
        cardImg.src = cards.get(card);
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-hand").appendChild(cardImg);
    }


    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card");
        let card = deck.pop();
        cardImg.src = cards.get(card);
        playersSum[0] += getValue(card);
        playersAceCounts[0] += checkAce(card);
        document.getElementById("player1-hand").appendChild(cardImg);
    }

    // check split
    let playerCards = document.getElementById("player1-hand").getElementsByTagName("img");
    if (playerCards.length === 2) {
        var card1Src = playerCards[0].src;
        var card2Src = playerCards[1].src;

        var card1Name = Array.from(cards.keys()).find(key => cards.get(key) === card1Src);
        var card2Name = Array.from(cards.keys()).find(key => cards.get(key) === card2Src);

        if (card1Name && card2Name && card1Name.split("-")[0] === card2Name.split("-")[0]) {
            console.log("The cards have the same rank. Player can split.");
            document.getElementById("player1-split").style.display = "inline";

            document.getElementById("player1-split").addEventListener("click", function() {
                splitHand(0); // Call the splitHand function
            });
        } 
		else {
            console.log("The cards do not have the same rank. Player cannot split.");
            document.getElementById("player1-split").style.display = "none"; // don't think I really need this

        }
    } else {
        console.log("Player does not have two cards yet.");
        document.getElementById("player1-split").style.display = "none"; //also don't want to show here

    }

    document.getElementById("player1-hit").addEventListener("click", function() { hit(0); });
    document.getElementById("player1-stay").addEventListener("click", function() { stay(0); });
}




function getCardNameFromSrc(cards) {
    let cardInfo = cardSrc.split("/").pop().split(".")[0];
    return cardInfo.split("-")[0]; 
}


function splitHand(player) {
    console.log("Player " + (player + 1) + " is splitting...");

    let playerHand = document.getElementById("player1-hand").getElementsByTagName("img");
    let card1 = playerHand[0].src;
    let card2 = playerHand[1].src;

    
    document.getElementById("player1-hand").innerHTML = "";

   
    let hand1 = document.createElement("div");
    let hand2 = document.createElement("div");
	hand1.id = "players";
	hand2.id = "players";
    
    let card1Img = document.createElement("img");
    card1Img.src = card1;
    hand1.appendChild(card1Img);
    
    let card2Img = document.createElement("img");
    card2Img.src = card2;
    hand2.appendChild(card2Img);
    
    document.getElementById("player1-hand").appendChild(hand1);
    document.getElementById("player1-hand").appendChild(hand2);

    playersSum.push(getValue(card1));
    playersSum.push(getValue(card2));
    playersAceCounts.push(checkAce(card1));
    playersAceCounts.push(checkAce(card2));
    playersCanHit.push(true, true);

  
    createSplitButtons(playersSum.length - 2, hand1);
    createSplitButtons(playersSum.length - 1, hand2);

  
    document.getElementById("player1-split").style.display = "none";
}

function createSplitButtons(handIndex, handElement) {
    let handHit = document.createElement("button");
    handHit.className = "player-button hit-button";
    handHit.textContent = "Hit Hand " + (handIndex + 1);
    handHit.addEventListener("click", function() { hit(handIndex); });

    let handStay = document.createElement("button");
    handStay.className = "player-button stay-button";
    handStay.textContent = "Stay Hand " + (handIndex + 1);
    handStay.addEventListener("click", function() { stay(handIndex); });

    handElement.appendChild(handHit);
    handElement.appendChild(handStay);
}



function getValue(card) {
	let cardInfo = card.split("-"); // "2-H" => ["2", "H"]
	let value = cardInfo[0]; // "2"

	// error check for a number vs a letter
	if (isNaN(value)) { // A J Q K
		if (value === "A") {
			return 11; 
		} else {
			return 10;
		}
	} else { // 2-10
		return parseInt(value);
	}
}

function checkAce(card) {
	let cardInfo = card.split("-");
	let value = cardInfo[0];
	if (value === "A") {
		return 1;
	} else {
		return 0;
	}
}

function reduceAce(playerSum, playersAceCount) {
	while (playerSum > 21 && playersAceCount > 0) {
		// reduce the Ace value from 11 to 1
		playerSum = playerSum - 10;
		playersAceCount--;
	}
	return playerSum;
}

function hit(player) {
    console.log("Player " + (player + 1) + " is hitting...");
    if (!playersCanHit[player]) {
        console.log("Player cannot hit anymore.");
        return;
    }

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card");
    let card = deck.pop();
    cardImg.src = cards.get(card);
    playersSum[player] += getValue(card);
    playersAceCounts[player] += checkAce(card);
	console.log("finding: player" + (player) + "-hand");
    document.getElementById("player" + (player) + "-hand").append(cardImg);

    if (reduceAce(playersSum[player], playersAceCounts[player]) > 21) {
        playersCanHit[player] = false;
        console.log("Player " + (player + 1) + " has bust!");
    }
}

function stay(player) {
	console.log("Player " + (player+1) + " is staying...");
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    playersSum[player] = reduceAce(playersSum[player], playersAceCounts[player]);

    playersCanHit[player] = false;
	document.getElementById("dealer-hidden").src = cards.get(hidden);
    //document.getElementById("dealer-hidden").src = "./cards/" + hidden + ".png";

    let message = "";
    if (playersSum[player] > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!";
    }
    //both you and dealer <= 21
    else if (playersSum[player] == dealerSum) {
        message = "Tie!";
    }
    else if (playersSum[player] > dealerSum) {
        message = "You Win!";
    }
    else if (playersSum[player] < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player"+(player+1)+"-sum").innerText = playersSum[player];
    document.getElementById("results").innerText = message;
}

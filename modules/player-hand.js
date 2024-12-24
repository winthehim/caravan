import { getDeck, shuffle } from "../card-deck.js";

let playerHand = [];

let deck1 = getDeck();
    shuffle(deck1);

function drawCard() {
    while(playerHand.length < 5) {
    let card = deck1.pop();
    playerHand.push(card);
    }
}

//drawCard();

export { playerHand, deck1, drawCard}
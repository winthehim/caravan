import { getDeck, shuffle } from "../card-deck.js";

let comHand = [];

let deck2 = getDeck();
    shuffle(deck2); 

function comDrawCard() {
    while(comHand.length < 5) {
    let card = deck2.pop();
    comHand.push(card);
    }
}

//comDrawCard();

export { comHand, deck2, comDrawCard }
//Shuffled deck

//Card suits
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

//Car values 
const values = ["A", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6",
    "7", 
    "8", 
    "9", 
    "10",
    "J", 
    "Q", 
    "K",
];

//Empty array to store shuffled cards 
let deckTwo = [];

//Nested loop to create a deck of cards 
for(let i = 0; i < suits.length; i++) { // Iterate through suits
    for(let j = 0; j < values.length; j++) { //Iterate through values
        // Card is an object that assigns each value to one suit
        let card = {
            Value: values[j], 
            Suit: suits[i]
        };
        // Push card to empty array (deck)
        deckTwo.push(card);
    }
}

//Fisher-Yates algortihm used for shuffling deck
for(let x = deckTwo.length - 1; x > 0; x--) { //Start at deck.length - 1 (pos 53 - 1 = pos 52); continue iterating as long as x > pos 0; x-- to iterate increments of one down from pos 52
    let y = Math.floor(Math.random() * x); // Math.floor (round down to nearest whole integer) Math.random (give a random value between 0 - 1) So random value between 0-1 * pos x rounded down to a whole integer. E.G. 0.5 * 23 = 12.5 rounded down = 12. Therefore y = 12
    let temp = deckTwo[x]; //Create temporary value equal to pos x in deck
    deckTwo[x] = deckTwo[y]; // pos x ins deck now equals pos y in deck
    deckTwo[y] = temp; // pos y in deck becomes new temp
    // original pos x essentially swapped with pos y which was random
 }

 export {deckTwo};

console.log(deckTwo)
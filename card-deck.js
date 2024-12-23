//Shuffled deck

//Card suits
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

//Card values 
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

//Function to get a new deck of ordered cards
function getDeck() {
    let deck = new Array(); //Everytime this function is called it will create a new array called "deck"

    for(let i = 0; i < suits.length; i++) { //Iterates through suits array
        for(let x = 0; x < values.length; x++) { //Iterates through values array
            let card = { Value: values[x], Suit: suits[i] }; //Create an object called card that stores the current value and suit
            deck.push(card); //Add's card to the deck array
        }
    }
    return deck; //Returns a deck full of cards in order after everything has been iterated through
}

//Function to shuffle and existing deck of cards
function shuffle(deck) {
    for(let i = 0; i < 1000; i++) { //To iterate 1000 times
        let locOne = Math.floor((Math.random() * deck.length)); //Declares a variable for (0 >= num < 1) * deck.length(or 52) rounded down to a whole integer
        let locTwo = Math.floor((Math.random() * deck.length)); // ^
        let temp = deck[locOne]; //Create a temporary variable that is assigned value of deck[locOne]
        deck[locOne] = deck[locTwo]; //Change the value of deck[locOne] to deck[locTwo]
        deck[locTwo] = temp; //Change value of deck[locTwo] to temporary value, essentially switching the values around
    }
}

let deck1 = getDeck();
    shuffle(deck1);

let deck2 = getDeck();
shuffle(deck2);

console.log(deck1);
console.log(deck2);

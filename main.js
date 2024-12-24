import { playerHand , deck1, drawCard } from "../modules/player-hand.js";
import { comHand, comDrawCard, deck2 } from "./modules/computer-hand.js";

drawCard();
comDrawCard();
console.log(playerHand);
console.log(comHand);


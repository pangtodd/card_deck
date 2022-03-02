const suits = ["hearts", "clubs", "spades", "diamonds"];
const cards = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];
const deck = [];

cards.forEach(function(i){
  suits.forEach(function(j){
    deck.push(i+" of " +j);
  });
});

console.log(deck)

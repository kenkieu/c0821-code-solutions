console.log('Lodash is loaded:', typeof _ !== 'undefined');
// output: console.log the winner based on the point value of their hand\
// set highscore to 0
// create storage for winning player
// create storage for player list
// create deck variable with empty array literal
// create function that will generate deck of cards
// create array of ranks
// create array of suits
// define a for loop that will loop over each card rank
// within each rank assign each suit (club clover diamond heart)
// if the rank is a number, assign the number value as the same rank
// otherwise if it's ace then 11
// all other cases, value is 10
// push the card into the deck
// return the deck of cards
// call the function to create the deck
// shuffle deck
// deal 2 cards per player
// each time pull those cards from the deck
// look at each player's score (sum of cards)
// if player's points are higher than the current high score
// make that player's pts the new high score
// log the winner

var highScore = 0;
var winningPlayer = '';

var playerArr = [
  { name: 'Goku', hand: [], score: 0 },
  { name: 'Master Roshi', hand: [], score: 0 },
  { name: 'Krillin', hand: [], score: 0 },
  { name: 'Bulma', hand: [], score: 0 }
];

var deck = [];

function createDeck() {
  var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suits = ['club', 'clover', 'diamond', 'heart'];

  for (var i = 0; i < ranks.length; i++) {
    for (var x = 0; x < suits.length; x++) {
      var card = {};
      card.face = ranks[i];
      card.suits = suits[x];
      if (typeof ranks[i] === 'number') {
        card.value = ranks[i];
      } else if (card.face === 'ace') {
        card.value = 11;
      } else {
        card.value = 10;
      }
      deck.push(card);
    }
  }
  return deck;
}

createDeck();

var shuffledDeck = _.shuffle(deck);

function dealHand(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffledDeck[i]);
    player.score += shuffledDeck[i].value;
  }
  _.pull(shuffledDeck, player.hand[0]);
  _.pull(shuffledDeck, player.hand[1]);
}

dealHand(playerArr[0]);
dealHand(playerArr[1]);
dealHand(playerArr[2]);
dealHand(playerArr[3]);

function displayWinner() {
  for (var i = 0; i < playerArr.length; i++) {
    if (playerArr[i].score > highScore) {
      highScore = playerArr[i].score;
      winningPlayer = playerArr[i].name;
    }
  }
  console.log(winningPlayer + ' has won the game, with a score of ' + highScore + '!');
}

displayWinner();

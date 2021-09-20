console.log('Lodash is loaded:', typeof _ !== 'undefined');
// output: console.log the winner based on the point value of their hand\
// set highscore to 0
// create storage for winning player
// create storage for player list
// create deck of cards
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

var deck = [
  { face: 'ace', rank: 'club', value: 11 },
  { face: 'ace', rank: 'clover', value: 11 },
  { face: 'ace', rank: 'diamond', value: 11 },
  { face: 'ace', rank: 'heart', value: 11 },
  { face: '2', rank: 'club', value: 2 },
  { face: '2', rank: 'clover', value: 2 },
  { face: '2', rank: 'diamond', value: 2 },
  { face: '2', rank: 'heart', value: 2 },
  { face: '3', rank: 'club', value: 3 },
  { face: '3', rank: 'clover', value: 3 },
  { face: '3', rank: 'diamond', value: 3 },
  { face: '3', rank: 'heart', value: 3 },
  { face: '4', rank: 'club', value: 4 },
  { face: '4', rank: 'clover', value: 4 },
  { face: '4', rank: 'diamond', value: 4 },
  { face: '4', rank: 'heart', value: 4 },
  { face: '5', rank: 'club', value: 5 },
  { face: '5', rank: 'clover', value: 5 },
  { face: '5', rank: 'diamond', value: 5 },
  { face: '5', rank: 'heart', value: 5 },
  { face: '6', rank: 'club', value: 6 },
  { face: '6', rank: 'clover', value: 6 },
  { face: '6', rank: 'diamond', value: 6 },
  { face: '6', rank: 'heart', value: 6 },
  { face: '7', rank: 'club', value: 7 },
  { face: '7', rank: 'clover', value: 7 },
  { face: '7', rank: 'diamond', value: 7 },
  { face: '7', rank: 'heart', value: 7 },
  { face: '8', rank: 'club', value: 8 },
  { face: '8', rank: 'clover', value: 8 },
  { face: '8', rank: 'diamond', value: 8 },
  { face: '8', rank: 'heart', value: 8 },
  { face: '9', rank: 'club', value: 9 },
  { face: '9', rank: 'clover', value: 9 },
  { face: '9', rank: 'diamond', value: 9 },
  { face: '9', rank: 'heart', value: 9 },
  { face: '10', rank: 'club', value: 10 },
  { face: '10', rank: 'clover', value: 10 },
  { face: '10', rank: 'diamond', value: 10 },
  { face: '10', rank: 'heart', value: 10 },
  { face: 'Jack', rank: 'club', value: 10 },
  { face: 'Jack', rank: 'clover', value: 10 },
  { face: 'Jack', rank: 'diamond', value: 10 },
  { face: 'Jack', rank: 'heart', value: 10 },
  { face: 'Queen', rank: 'club', value: 10 },
  { face: 'Queen', rank: 'clover', value: 10 },
  { face: 'Queen', rank: 'diamond', value: 10 },
  { face: 'Queen', rank: 'heart', value: 10 },
  { face: 'King', rank: 'club', value: 10 },
  { face: 'King', rank: 'clover', value: 10 },
  { face: 'King', rank: 'diamond', value: 10 },
  { face: 'King', rank: 'heart', value: 10 }
];

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

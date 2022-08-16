'use strict';

const BASE_URL = 'http://deckofcardsapi.com/api/deck/';

//SHUFFLED    new/shuffle/?deck_count=1

//DRAW       <<deck_id>>/draw/?count=2


// async function shuffleNewDeck(){
//   const deck = await axios.get(`${BASE_URL}new/shuffle/?deck_count=1`)
//   return deck.deck_id;
// }

async function drawSingleCard() {
  // const deckID = await shuffleNewDeck();
  const card = await axios.get(`${BASE_URL}new/draw/?count=1`);
  console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
}


async function drawTwoCard() {
  // const deckID = await shuffleNewDeck();
  const card = await axios.get(`${BASE_URL}new/draw/?count=1`);
  const deckID = card.data.deck_id;
  const card2 = await axios.get(`${BASE_URL}${deckID}/draw/?count=1`);
  console.log(
    `${card.data.cards[0].value} of ${card.data.cards[0].suit}`,
    `${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`);
}

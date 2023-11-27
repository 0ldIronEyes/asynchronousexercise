let baseURL = 'https://deckofcardsapi.com/api/deck';

async function part1() {
    let data = await $.getJSON(`${baseURL}/new/draw/`);
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }


  async function part2() {
    let firstCard = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCard.deck_id;
    let secondCard = await $.getJSON(`${baseURL}/${deckId}/draw/`);

    let { suitA, valueA } = firstCard.cards[0];
    console.log(`${valueA.toLowerCase()} of ${suitA.toLowerCase()}`);

    let { suitB, valueB } = secondCard.cards[0];
    console.log(`${valueB.toLowerCase()} of ${suitB.toLowerCase()}`);
  }

  
    let butn =document.querySelector('#cardbutton');
    let cardArea = document.querySelector('#card-area')
  
    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    butn.addEventListener('click', async function () {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let card = document.createElement("img");
      card.src = cardSrc;

      cardArea.appendChild(card);
      if (cardData.remaining === 0) butn.remove();
    })
  
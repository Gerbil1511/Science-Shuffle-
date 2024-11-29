const cards = document.querySelectorAll('.hazard-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  // toggle - removes it if it's there, adds it if it's not
  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;

    console.log(firstCard, secondCard)

    // check for match
    if (firstCard.dataset.image === secondCard.dataset.image) {
      // it's a match
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
    //  not a match
    console.log('not a match');
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 1000);
    }
  }
}

// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));





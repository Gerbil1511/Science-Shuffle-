// ### can i add the fancy comment lines so that when you hover over fucntion names, it works?

const cards = document.querySelectorAll('.hazard-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  // if lockBoard is true, nothing else can be executed
  // console.log("1")
  if (lockBoard) return;

  // if this is the same card, exit the function
  // console.log("2")
  if (this === firstCard) return;

  // console.log("3")
  this.classList.add('flip');

  // console.log("4")
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    checkForMatch();
  }
  // check for match
function checkForMatch() {
  if (!firstCard || !secondCard) {
    console.error("One or both cards are undefined");
    return;
  } else {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards() : unflipCards();
  }
}

function disableCards() {
  // console.log("8")
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}


function unflipCards() {
   // locks board until the cards are flipped back
    lockBoard = true;
    setTimeout(() => {
      if (firstCard && secondCard) {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }
      resetBoard();
    }, 1200);
  }

// reset the board after each round
function resetBoard() {
  // console.log("10")
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Immediately invoked function to shuffle the cards
(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));





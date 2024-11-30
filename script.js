// ### can i add the fancy comment lines so that when you hover over fucntion names, it works?

const cards = document.querySelectorAll('.hazard-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount = 0;
let moveCount = 0;
let seconds = 0;

function flipCard() {
  // if lockBoard is true, nothing else can be executed
// console.log("1")
  if (lockBoard) return;

  // if this is the same card, exit the function
// console.log("2")
  if (this === firstCard) return;

// console.log("3")
  this.classList.add('flip');

  if (moveCount === 0){
    startTimer();
  }

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
    moveCounter()
  }
}
function moveCounter(){
  moveCount++;
  document.getElementById('number-of-moves').textContent = moveCount;
}

function disableCards() {
// console.log("8")
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchCounter();

  resetBoard();
}

function matchCounter(){
  matchCount++;
  document.getElementById('correct-matches').textContent = matchCount;
  if (matchCount === 8){
    alert("Congratulations! You have matched all the cards!");
  }
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

(function startTimer() {
  let seconds = 0;
  let minutes = 0;
  const timerElement = document.getElementById("timer");
  
  function updateTimer() {
      seconds++;
      
      if (seconds === 60) {
          seconds = 0;
          minutes++;
      }
      
      // Format time to always show two digits
      const formattedSeconds = seconds.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      
      timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
  }
  
  setInterval(updateTimer, 1000);
})();


// (function startTimer(){
//   const timerElement = document.getElementById("timer");
    
//   function updateTimer() {
//       seconds++;
//       if (seconds === 1) {
//         document.getElementById('seconds').textContent = "second";
//       } else if (seconds === 2){
//         document.getElementById('seconds').textContent = "seconds";
//       }
//       timerElement.textContent = seconds;
//   }
  
//   setInterval(updateTimer, 1000);
// })();


// Immediately invoked function to shuffle the cards
(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));




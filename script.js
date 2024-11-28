
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}
// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));
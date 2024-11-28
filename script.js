
const cards = document.querySelectorAll('.hazard-card');

function flipCard() {
    // toggle - removes it if it's there, adds it if it's not
    this.classList.toggle('flip');

}
// This adds an event listener to each card, and calls the flipCard function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));
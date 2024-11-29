document.getElementById('difficulty-button').addEventListener('change', function() {
  if (this.value === 'Difficulty level') {
      var myModal = new bootstrap.Modal(document.getElementById('difficultyModal'), {});
      myModal.show();
      this.value = ''; // Reset the select value
  }
});

const cards = document.querySelectorAll('.hazard-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

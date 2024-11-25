document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const resetButton = document.getElementById("reset");
  let flippedCards = [];
  let matchedCount = 0;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipped") || flippedCards.length === 2)
        return;

      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.dataset.card === card2.dataset.card) {
          matchedCount += 2;
          flippedCards = [];
          if (matchedCount === cards.length) {
            setTimeout(() => alert("Congratulations! You won!"), 500);
          }
        } else {
          setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
          }, 1000);
        }
      }
    });
  });

  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
});

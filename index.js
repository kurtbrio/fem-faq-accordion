const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const itemButton = item.querySelector(".item-btn");
  const itemAnswer = item.querySelector(".item-answer");
  itemButton.addEventListener("click", () => {
    itemButton.classList.toggle("toggled");
    itemAnswer.classList.toggle("hidden");
  });
});

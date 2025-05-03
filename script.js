const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = document.querySelector(".card-wrapper");
const totalCards = cards.children.length;
const dotsContainer = document.getElementById("dotsContainer");

let index = 0;
const visibleCards = 3;

const maxIndex = totalCards - visibleCards;

for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  const cardWidth = cards.children[0].offsetWidth + 40;
  cards.style.transform = `translateX(-${index * cardWidth}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = maxIndex;
  }
  updateSlider();
});

updateSlider();

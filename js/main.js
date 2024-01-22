// HTML EL + ARRAY + VARIABILI E COSTANTI
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const slidesContainerEl = document.getElementById("slides-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

let slideIndex = 0;
let slidesHtml = "";

// CICLO PER CREAZIONE CON CON TEMPLATE LITERAL
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "active" : "";
  slidesHtml += `<img src="./img/${slide}" alt="slide-${i}" class="slide ${activeClass}" />`;
}
slidesContainerEl.innerHTML = slidesHtml;

const clock = setInterval(function () {}, 3000);

// slidesContainerEl.addEventListener("mouseover", function () {
//   clearInterval(clock);
// });
// slidesContainerEl.addEventListener("mouseout", function () {
// });

//** EVENTO PREMERE FRECCIA GIU' (AVANTI)

arrowDownEl.addEventListener("click", function () {
  // PRENDO HTML COLLECTION SLIDES
  const allSlides = document.getElementsByClassName("slide");
  removeActiveSlide(allSlides, slideIndex);

  // PRENDO HTML COLLECTION THUMBNAILS
  const thumbnailActive = document.getElementsByClassName("box-thumbnail");
  removeActiveThumb(thumbnailActive, slideIndex);

  // INCREMENTO INDICE SLIDE CON CONTROLLO PER FARLO RIPARTIRE
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  addActiveSlide(allSlides, slideIndex);
  addActiveThumb(thumbnailActive, slideIndex);
});

//** EVENTO PREMERE FRECCIA SU (INDIETRO)

arrowUpEl.addEventListener("click", function () {
  // PRENDO L'HTML COLLECTION
  const allSlides = document.getElementsByClassName("slide");
  removeActiveSlide(allSlides, slideIndex);

  // PRENDO HTML COLLECTION THUMBNAILS
  const thumbnailActive = document.getElementsByClassName("box-thumbnail");
  removeActiveThumb(thumbnailActive, slideIndex);

  // DECREMENTO INDICE SLIDE CON CONTROLLO PER FARLO RIPARTIRE
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }

  addActiveSlide(allSlides, slideIndex);
  addActiveThumb(thumbnailActive, slideIndex);
});

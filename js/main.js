// HTML EL + ARRAY + VARIABILI E COSTANTI
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const slidesContainerEl = document.getElementById("slides-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

let slideIndex = 0;
let slidesHtml = "";

// CICLO PER CREAZIONE CIMG CON TAMPLATE LITERAL
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "active" : "";
  slidesHtml += `<img src="./img/${slide}" alt="slide-${i}" class="slide ${activeClass}" />`;
}
slidesContainerEl.innerHTML = slidesHtml;

// PREMERE FRECCIA GIU' (AVANTI)
arrowDownEl.addEventListener("click", function () {
  // RIMUOVO CLASSE ACTIVE
  const allSlides = document.getElementsByClassName("slide");
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");
  // RIMUOVO CLASSE ACTIVE THUMBNAIL
  const thumbnailActive = document.getElementsByClassName("box-thumbnail");
  const oldThumbnailActive = thumbnailActive[slideIndex];
  oldThumbnailActive.classList.remove("active-thumbnail");

  // INCREMENTO INDICE SLIDE CON CONTROLLO PER FARLO RIPARTIRE
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  // RIASSEGNO CLASSE ACTIVE
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
  // RIASSEGNO CLASSE ACTIVE THUMBNAIL
  const newThumbnailActive = thumbnailActive[slideIndex];
  newThumbnailActive.classList.add("active-thumbnail");
});

// PREMERE FRECCIA SU (INDIETRO)
arrowUpEl.addEventListener("click", function () {
  // RIMUOVO CLASSE ACTIVE
  allSlides = document.getElementsByClassName("slide");
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");
  // RIMUOVO CLASSE ACTIVE THUMBNAIL
  const thumbnailActive = document.getElementsByClassName("box-thumbnail");
  const oldThumbnailActive = thumbnailActive[slideIndex];
  oldThumbnailActive.classList.remove("active-thumbnail");
  // INCREMENTO INDICE SLIDE CON CONTROLLO PER FARLO RIPARTIRE
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  // RIASSEGNO CLASSE ACTIVE
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
  // RIASSEGNO CLASSE ACTIVE THUMBNAIL
  const newThumbnailActive = thumbnailActive[slideIndex];
  newThumbnailActive.classList.add("active-thumbnail");
});

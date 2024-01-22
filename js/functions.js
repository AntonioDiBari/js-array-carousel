function removeActiveSlide(slides, index) {
  const oldSlide = slides[index];
  oldSlide.classList.remove("active");
}

function addActiveSlide(slides, index) {
  const newSlide = slides[index];
  newSlide.classList.add("active");
}

function removeActiveThumb(thumbs, index) {
  const oldThumbnailActive = thumbs[index];
  oldThumbnailActive.classList.remove("active-thumbnail");
}

function addActiveThumb(thumbs, index) {
  const newThumbnailActive = thumbs[index];
  newThumbnailActive.classList.add("active-thumbnail");
}

function goToSlide(index) {
  // PRENDO HTML COLLECTION SLIDES
  const allSlides = document.getElementsByClassName("slide");
  removeActiveSlide(allSlides, index);
  // PRENDO HTML COLLECTION THUMBNAILS
  const thumbnailActive = document.getElementsByClassName("box-thumbnail");
  removeActiveThumb(thumbnailActive, index);
  // INCREMENTO INDICE SLIDE CON CONTROLLO PER FARLO RIPARTIRE
  if (index >= slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  addActiveSlide(allSlides, index);
  addActiveThumb(thumbnailActive, index);
  return index;
}

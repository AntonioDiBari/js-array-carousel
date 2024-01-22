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

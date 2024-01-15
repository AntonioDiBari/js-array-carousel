const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const slidesContainerEl = document.getElementById("slides-container");

let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == 0 ? "active" : "";
  slidesHtml += `<img src="./img/${slide}" alt="slide-${i}" class="slide ${activeClass}" />`;
  console.log(slidesHtml);
}
slidesContainerEl.innerHTML = slidesHtml;
console.log(slidesContainerEl);

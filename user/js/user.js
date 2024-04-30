// 图片轮播
let sliderContainer = document.querySelector(".slider-container");
let images = document.querySelectorAll(".slider-container img");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(nextSlide, 2000);


/* Слайдер 1*/
let sliderItem = document.querySelectorAll('.slider__item'); 
let nextBtn = document.querySelector('#next'); 
let prevBtn = document.querySelector('#prev'); 
let slideIndex = 0;
function showSlides(n) {
    if (n > sliderItem.length-1) {
      slideIndex = 0
    }else if (n < 0) {
        slideIndex = sliderItem.length -1
    }
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = "none";
    }
    sliderItem[slideIndex].style.display = "block";
}
showSlides(slideIndex)
function nextSlide(){
    showSlides(slideIndex +=1);
}
function prevSlide(){
    showSlides(slideIndex -=1);
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

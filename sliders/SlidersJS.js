
/* Слайдер 1*/
let sliderItem = document.querySelectorAll('.slider__item'),
nextBtn = document.querySelector('#next'),
prevBtn = document.querySelector('#prev'),
slideIndex = 0;
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
/*--------------------------------------*/

/* Слайдер 2*/

let slider = document.querySelector('.slider2'),
    sliderContainer = slider.querySelector('.slider2__container'),    
    sliderItems = slider.querySelector('.slider2__items'),    
    slides = slider.querySelectorAll('.slider2__item'),
    arrows = slider.querySelector('.slider2__arrows'),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth,
    slide2Index = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/,
    slide = function() {
        sliderItems.style.transition = 'transform .5s';
        sliderItems.style.transform = `translate3d(-${slide2Index * slideWidth}px, 0px, 0px)`;
        prev.classList.toggle('disabled', slide2Index === 0);
        next.classList.toggle('disabled', slide2Index === --slides.length);
    },
    getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,
    swipeStart = function() {
        let evt = getEvent();
        posInit = posX1 = evt.clientX;    
        sliderItems.style.transition = '';    

        document.addEventListener('touchmove', swipeAction);
        document.addEventListener('touchend', swipeEnd);
        document.addEventListener('mousemove', swipeAction);
        document.addEventListener('mouseup', swipeEnd);
    },
    swipeAction = function() {
        let evt = getEvent(),
        styleT =  sliderItems.style.transform,
        transform = +styleT.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;
    
        sliderItems.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    },
    swipeEnd = function() {
        posFinal = posInit - posX1;
      
        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);
      
        if (Math.abs(posFinal) > posThreshold) {
          if (posInit < posX1) {
            slide2Index--;
          } else if (posInit > posX1) {
            slide2Index++;
          }
        }
      
        if (posInit !== posX1) {
          slide();
        }
      
    };
    document.addEventListener("DOMContentLoaded", slide);
    arrows.addEventListener('click', function() {
        let target = event.target;
      
        if (target === next) {
          slide2Index++;
        } else if (target === prev) {
          slide2Index--;
        } else {
          return;
        }
      
        slide();
      });
      
      sliderItems.style.transform = 'translate3d(0px, 0px, 0px)';
      
      slider.addEventListener('touchstart', swipeStart);
      slider.addEventListener('mousedown', swipeStart);
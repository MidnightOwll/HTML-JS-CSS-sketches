
let closeBtn = document.getElementsByClassName('header__close')[0],
msg = document.getElementsByClassName('header__top')[0],
popupBg = document.querySelector('.popup__bg'),
popup = document.querySelector('.popup'),
openPopupButtons = document.querySelectorAll('.open__popup'),
closePopupButton = document.querySelector('.close__popup'); 


function closeHeaderMsg(){ 
    msg.style.transform = 'translateY(-45px)';
    setTimeout( ()=>msg.remove(),1000);
} 

closeBtn.addEventListener("click", closeHeaderMsg);

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

/* Слайдер */

let slider = document.querySelector('.slider'),
    sliderContainer = slider.querySelector('.slider__container'),    
    sliderItems = slider.querySelector('.slider__items'),    
    slides = slider.querySelectorAll('.slider__item'),
    arrows = slider.querySelector('.slider__arrows'),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/,
    slide = function() {
        sliderItems.style.transition = 'transform .5s';
        if( sliderItems.style.transform.match(trfRegExp)[0] > 0){
            slideIndex = 0;
        } else if (sliderItems.style.transform.match(trfRegExp)[0] < -(sliderItems.scrollWidth - sliderItems.offsetWidth)){
            slideIndex = slides.length - 1
        }
        sliderItems.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
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
            slideIndex--;
          } else if (posInit > posX1) {
            slideIndex++;
          }
        }
      
        if (posInit !== posX1) {
          slide();
        }
      
    }
    document.addEventListener("DOMContentLoaded", slide);
    arrows.addEventListener('click', function() {
        let target = event.target;
      
        if (target === next) {
          slideIndex++;
        } else if (target === prev) {
          slideIndex--;
        } else {
          return;
        }
      
        slide();
      });
      
      sliderItems.style.transform = 'translate3d(0px, 0px, 0px)';
      
      slider.addEventListener('touchstart', swipeStart);
      slider.addEventListener('mousedown', swipeStart);
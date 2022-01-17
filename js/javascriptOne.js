
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

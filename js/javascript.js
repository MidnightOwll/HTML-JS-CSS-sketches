
function closeHeaderMsg(){
    //const MSG = document.getElementById('head__top')
    const MSG = document.getElementsByClassName('header__top')[0];
    MSG.remove();
}  

const CLOSE__BTN = document.getElementsByClassName('header__close')[0];
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 

CLOSE__BTN.addEventListener("click", closeHeaderMsg);
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


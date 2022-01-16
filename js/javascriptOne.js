
let body = document.querySelector('body')
let closeBtn = document.getElementsByClassName('header__close')[0];
let msg = document.getElementsByClassName('header__top')[0];
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 


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


'use strict';
const clickedArea = document.querySelector('.grid');
const largeImg = document.querySelector('.container').firstElementChild

clickedArea.addEventListener('click', function(event){
    const clicked = event.target;
    event.preventDefault();
    if (clicked.tagName === 'IMG') {
        largeImg.setAttribute('src', `${clicked.closest('a').getAttribute('href')}`)
    }
    if (clicked.tagName === 'A' ) {
        largeImg.setAttribute('src', `${clicked.getAttribute('href')}`)
    }
});

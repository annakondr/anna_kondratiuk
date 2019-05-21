'use strict';
const list = document.querySelector(".list");

list.addEventListener("click", function(event){
    let clicked = event.target;
    if (clicked.tagName === 'SPAN'){
        clicked.parentNode.querySelectorAll('ul').forEach(function(ul){
            ul.hidden = !ul.hidden
        });
    }
});

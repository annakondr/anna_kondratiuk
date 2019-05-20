'use strict';
const list = document.querySelector(".list");

list.addEventListener("click", function(event){
    let clicked = event.target;
    clicked.parentNode.querySelectorAll('ul').forEach(function(li){
        li.hidden = !li.hidden
    });
});

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector(".menu"),
    newElement = document.createElement('li'),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv"),
    answer = document.getElementById("prompt");

newElement.classList.add("menu-item");
menu.appendChild(newElement);
newElement.textContent = "Пятый пункт";
// menu.replaceChild("menuItem[1], menuItem[2]");
document.body.style.background = "url(img/apple_true.jpg) center no-repeat"; 
title.innerHTML = ("Мы продаем только <strong>подлинную</strong> технику Apple");
answer.textContent = prompt("Че ваще?");


// console.log(menuItem);
// console.log(newElement);

// menu.insertBefore(newElement, menu[3]);

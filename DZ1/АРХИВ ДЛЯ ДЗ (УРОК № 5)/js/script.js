let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector(".menu"),
    newElement = document.createElement('li'),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    answer = document.getElementById("prompt");


newElement.classList.add("menu-item");
menu.appendChild(newElement);
newElement.textContent = "Пятый пункт";
menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = "url(img/apple_true.jpg) center no-repeat"; 
title.innerHTML = ("Мы продаем только <strong>подлинную</strong> технику Apple");
answer.textContent = prompt("Че ваще?");
adv.remove(); 

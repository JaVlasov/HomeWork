let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector(".menu"),
    newElement = document.createElement('li'),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv"),
    answer = document.getElementById("prompt");

    // second = document.querySelectorAll(".menu-item[1]"),
    // third = document.querySelectorAll(".menu-item[2]");
    // console.log(second, third);

newElement.classList.add("menu-item");
menu.appendChild(newElement);
newElement.textContent = "Пятый пункт";
// menu.insertBefore("menuItem[1], menuItem[2]");
document.body.style.background = "url(img/apple_true.jpg) center no-repeat"; 
title.innerHTML = ("Мы продаем только <strong>подлинную</strong> технику Apple");
answer.textContent = prompt("Че ваще?");
document.body.removeChild("adv");


// console.log(menuItem);
// console.log(newElement);

menu.insertBefore(newElement, menu[3]);

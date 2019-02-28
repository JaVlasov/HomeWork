'use strict'

let money = prompt("Ваш бюджет на месяц?" , ""),
    time = prompt("Введите дату в формате YYYY-MM-DD" , ""),
    price = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    cost = prompt("Во сколько обойдется?" , "");

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false    
};

appData.expenses[price] = cost;

alert("Бюджет на 1 день:" + " " +  (+money/30) )

// console.log(appData['expenses']);
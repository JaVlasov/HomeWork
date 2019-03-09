'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?" , "");
    time = prompt("Введите дату в формате YYYY-MM-DD" , "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?" , "");
    }
}
start();


let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
                b = prompt("Во сколько обойдется?" , "");
        
            if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
                && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
        
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + " " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        } 
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?"); 
            // let numberOfPr = 1;
            if ( (typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50) {
                appData.optionalExpenses[i+1] = a;
                // numberOfPr++;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {

            let items = prompt("Что принемёт дополнительный доход? (Перечислите через запятую)", "");

            if (items === "") {
                alert("Строка пустая");
                i--;
            }
            if (items === !NaN) {
                alert("Введите строку");
                i--;
            }
            if (items === null) {
                alert("Нельзя отменить вопрос");
                i--;
            }
            appData.income = items.split(", ");

            appData.income.forEach(function(item, i, mass) {
                console.log((i + 1) + ": " + item + "(массив: " + mass + ")");
            });
    }
}
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}





// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
//         b = prompt("Во сколько обойдется?" , "");
//     i++;

//     if ((typeof (a) === "string") && (typeof (a) === !null) && (typeof (b) === !null) && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Ошибка");

//     }
// }
// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");        

//     if ((typeof (a) === "string") && (typeof (a) === !null) && (typeof (b) === !null) && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         i--;
//      }
// }
// while (i < 2);
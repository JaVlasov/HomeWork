let btn = document.getElementById("start"),
    budgetV = document.getElementsByClassName("budget-value")[0],
    dayBudgetV = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level-value")[0],
    expenses = document.getElementsByClassName("expenses-value")[0],
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value")[0],
    income = document.getElementsByClassName("income-value")[0],
    monthsavings = document.getElementsByClassName("monthsavings-value")[0],
    yearsavings = document.getElementsByClassName("yearsavings-value")[0],

    inp = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optexpenses = document.querySelectorAll(".optionalexpenses-item"),
    chooseincome = document.querySelector(".choose-income"),
    checksavings = document.querySelector("#savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

    let money, time;
    
    btn.addEventListener('click', function() {
        time = prompt("Введите дату в формате YYYY-MM-DD" , "");
        money = +prompt("Ваш бюджет на месяц?" , "");
            
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?" , "");
        }
        appData.budget = money;
        appData.timeDate = time;
        budgetV.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();


        for (let i = 0; i < inp.length; i++) {
            inp[i].addEventListener('input', function() {
                if (inp[0].value == "" || inp[1].value == "" || inp[2].value == "" || inp[3].value == "") {
                    expensesItemBtn.disabled = true;
                    expensesItemBtn.style.background = "red";
                } else {
                    expensesItemBtn.disabled = false;
                    expensesItemBtn.style.background = "green";
                }
            });
        }

        for (let i = 0; i < optexpenses.length; i++) {
            optexpenses[i].addEventListener('input', function() {
                if (optexpenses[0].value == "" && optexpenses[1].value == "" && optexpenses[2].value == "") {
                    optionalExpensesBtn.disabled = true;
                    optionalExpensesBtn.style.background = "red";
                } else {
                    optionalExpensesBtn.disabled = false;
                    optionalExpensesBtn.style.background = "green";
                }
            });
        }

    });
    
    expensesItemBtn.addEventListener('click', function() {
        let sum = 0;

        for (let i = 0; i < inp.length; i++) {
            let a = inp[i].value,
                b = inp[++i].value;
        
            if ((typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
        }
        expenses.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optexpenses.length; i++) {
            let a = optexpenses[i].value; 

            if ( (typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50) {
                appData.optionalExpenses[i] = a;
                optionalexpenses.textContent += appData.optionalExpenses[i] + " ";
            } else {
                i--;
            }
        }
    });

    countBudgetBtn.addEventListener('click', function() {

        if (appData.budget != undefined) {

            appData.moneyPerDay = ((appData.budget - expenses.textContent) / 30).toFixed();
            dayBudgetV.textContent = appData.moneyPerDay;

    console.log(expenses.textContent);

            if (appData.moneyPerDay < 100) {
                level.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                level.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                level.textContent = "Высокий уровень достатка";
            } else {
                level.textContent = "Произошла ошибка";
            } 
        } else {
            dayBudgetV.textContent = "Произошла ошибка";
        }
    });

    chooseincome.addEventListener('input', function() {
        let items = chooseincome.value;
            appData.income = items.split(", ");
            income.textContent = appData.income;
    });

    checksavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sum.addEventListener('input', function() {
        if (appData.savings == true) {
            let sumV = +sum.value,
                percentV = +percent.value;

            appData.monthIncome = sumV/100/12*percentV;
            appData.yearIncome = sumV/100*percentV;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percent.addEventListener('input', function() {
        if (appData.savings == true) {
            let sumV = +sum.value,
                percentV = +percent.value;

        appData.monthIncome = sumV/100/12*percentV;
        appData.yearIncome = sumV/100*percentV;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    });
    
    let appData = {
        budget: money,
        timeDate: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        
    };
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key);
    }

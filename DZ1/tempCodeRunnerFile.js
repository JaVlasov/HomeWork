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

            income.forEach(function(item, i, mass) {
                console.log(i + ": " + item + "(массив: " + mass + ")");
            });
    }
}
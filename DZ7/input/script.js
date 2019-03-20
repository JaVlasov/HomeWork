let age = document.getElementById('age'),
    name = this.name,
    surname = this.surname;
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, name);
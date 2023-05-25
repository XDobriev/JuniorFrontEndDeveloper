let userName = prompt('Как вас зовут?');
let userNameChange = userName.toUpperCase().trim();

let userAge = prompt('Сколько вам лет?');
userAge = Number(userAge.trim());

alert(`Вас зовут ${userNameChange} и вам ${userAge} лет`);
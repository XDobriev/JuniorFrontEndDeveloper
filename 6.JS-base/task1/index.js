let existedUserLogin = 'the_best_user';
let existedUserPassword = '12345678';

let userLogin = prompt('Введите логин');
userLogin = userLogin.trim();
let userPassword = prompt('Введите пароль');
userPassword = userPassword.trim();

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}
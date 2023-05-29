/* Поздравляем! Вы разработали логику предоставления скидки клиентам ресторана. Вы
оптимизировали большую задачу, потому что раньше скидки считались вручную.
Вы работали уже с заранее определенными данными clientName, clientSpentToday и
clientSpentForAllTime. Но клиентов у ресторана много и каждый покупает блюда по
разной стоимости и каждому необходимо предоставлять разные скидки. Поэтому сейчас
мы будем запрашивать пользователя ввести нужные данные в текстовое поле.
Измените код из задания 6
Воспользуемся уже известной нам функцией prompt. В каждую из следующих
переменных clientName, clientSpentToday и clientSpentForAllTime присвойте значение,
которое введет пользователь в текстовое поле. Итоговые данные clientSpentToday и
clientSpentForAllTime должны быть типом данных number.
Для clientName сообщение в prompt должно быть “Введите имя клиента”, clientSpentToday
- “Сколько клиент потратил сегодня?”, clientSpentForAllTime - “Сколько клиент потратил за
все время?”.Если пользователь ввел неверные данные для clientSpentToday и
clientSpentForAllTime (например, “hello”), то выведите в модальном окне текст “Сумма,
которую клиент потратил за все время и которую потратил сегодня, должна быть числом!
Перезагрузите страницу, чтобы повторить попытку.”. При неверных данных не позволяйте
пользователю идти дальше к подсчету скидки. Используйте if else, чтобы реализовать
данную логику */

const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
clientSpentForAllTime += clientSpentToday;

alert(`К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`)
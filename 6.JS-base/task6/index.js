/* Представим, что мы разрабатываем сайт для ресторана, в котором действует программа
скидок. Ресторан подсчитывает сумму оплаты каждого клиента и поощряет самых частых
посетителей.
На данный момент, у ресторана есть клиент по имени Игорь, который за все время
потратил 110$ в данном заведении. Сохраните эти данные в переменные clientName и
clientSpentForAllTime.
Программа скидок работает следующим образом:
1. Если клиент потратил от 100$ до 300$, то скидка 10%;
2. Если клиент потратил от 300$ до 500$, то скидка 20%;
3. Если клиент потратил от 500$, то скидка 30%;
Клиент по имени Игорь решил посетить еще раз ресторан. Как мы видим, ему полагается
скидка в 10%, так как он потратил 110$. Сейчас Игорь закупается в заведении на 25$ и
ему необходимо предоставить скидку. Сохраните значение 25 в переменную
clientSpentToday.
Для начала, реализуйте логику предоставления скидок. Используйте if else и
логические операторы. Итоговую скидку сохраните в переменную discount. Выведите в
модальном окне через alert текст “Вам предоставляется скидка в discount%!” (discount
замените на процент скидки).
После этого необходимо выставить клиенту по имени Игорь счет на оплату (учитывая
скидку). Для начала обновите переменную clientSpentForAllTime. Затем выведите в
модальном окне через alert сообщение “Спасибо, clientName! К оплате clientSpentToday$.
За все время в нашем ресторане вы потратили clientSpentForAllTime$.” (замените
clientName, clientSpentToday и clientSpentForAllTime на соответствующие значения
переменных) */

const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

if (100 < clientSpentForAllTime < 300) {
    clientSpentToday = clientSpentToday * 0.9;
} else if (300 < clientSpentForAllTime < 500) {
    clientSpentToday = clientSpentToday * 0.8;
} else if (clientSpentForAllTime > 500){
    clientSpentToday = clientSpentToday * 0.7;
}

clientSpentForAllTime += clientSpentToday;

console.log(clientSpentToday);
console.log(clientSpentForAllTime);

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`)


/* const clientName = 'Игорь';
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

alert(`К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`) */

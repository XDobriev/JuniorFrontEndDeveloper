/* Задание #2
Что ж, думаю, вы показали Петру, как нужно писать правильный и чистый код. Молодцы!
Но Петра это мало чему научило, так как решения одной задачи недостаточно для
понимания языка программирования JavaScript. Петр решил потренироваться еще,
выполнил новую задачу, но опять неудача. Он не может разобраться, почему выскакивает
ошибка и ничего не работает.
Ваша цель та же самая: показать Петру, как правильно решать такие задачи, как находить
баги в коде и показать свой профессионализм в этом деле.
Посмотрите на данный код:
const temperatureInCelsius = prompt('Введите температуру в градусах
Цельсия');
if (temperatureInCelsius === 0) {
alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
alert('Для замерзания воды температура должна быть 0 градусов по
Цельсию либо ниже');
} c
onst temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
alert(`%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по
Фаренгейту.`);
У Петра возникают следующие ошибки:
1. Когда он вводит в текстовое поле 0, то у него не отображается сообщение “0
градусов по Цельсию - это температура замерзания воды”
2. Не отображается сообщение “%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по Фаренгейту.”
3. В сообщении “%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по Фаренгейту.” данные из переменных
temperatureInCelsius и temperatureInFahrenheit почему-то не подставляются в
строку.
Исправьте все ошибки, чтобы программа работала правильно. Также выполните
следующие условия: баг должен быть исправлен при помощи console.log либо debugger, в
коде должен присутствовать минимум один console.log либо debugger */
let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
temperatureInCelsius = Number(temperatureInCelsius);
if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
} 

let temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
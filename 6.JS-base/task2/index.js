let correctAnswer = 0;
let incorrectAnswer = 0;
// 1 вопрос
let answer_1 = prompt('Сколько будет 2 + 2?');
answer_1 = Number(answer_1);

let rightAnswer_1 = Number(4);
if (answer_1 === rightAnswer_1) {
    alert('Ответ Верный');
    correctAnswer += 1;
} else {
    alert('Ответ неверный');
    incorrectAnswer += 1;
}

console.log('Правильных ответов', correctAnswer);
console.log('Неправильных ответов', incorrectAnswer);

// 2 вопрос
let answer_2 = prompt('Сколько будет 2 * 2?');
answer_2 = Number(answer_2);

let rightAnswer_2 = Number(4);
if (answer_2 === rightAnswer_2) {
    alert('Ответ Верный');
    correctAnswer += 1;
} else {
    alert('Ответ неверный');
    incorrectAnswer += 1;
}

console.log('Правильных ответов', correctAnswer);
console.log('Неправильных ответов', incorrectAnswer);

// 3 вопрос
let answer_3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
answer_3 = Number(answer_3);

let rightAnswer_3 = Number(1);
if (answer_3 === rightAnswer_3) {
    alert('Ответ Верный');
    correctAnswer += 1;
} else {
    alert('Ответ неверный');
    incorrectAnswer += 1;
}

console.log('Правильных ответов', correctAnswer);
console.log('Неправильных ответов', incorrectAnswer);

// 4 вопрос
let answer_4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
answer_4 = Number(answer_4);

let rightAnswer_4 = Number(12);
if (answer_4 === rightAnswer_4) {
    alert('Ответ Верный');
    correctAnswer += 1;
} else {
    alert('Ответ неверный');
    incorrectAnswer += 1;
}

console.log('Правильных ответов', correctAnswer);
console.log('Неправильных ответов', incorrectAnswer);

// 5 вопрос
let answer_5 = prompt('Сколько будет 2 + 2 * 2?');
answer_5 = Number(answer_5);

let rightAnswer_5 = Number(6);
if (answer_5 === rightAnswer_5) {
    alert('Ответ Верный');
    correctAnswer += 1;
} else {
    alert('Ответ неверный');
    incorrectAnswer += 1;
}

console.log('Правильных ответов', correctAnswer);
console.log('Неправильных ответов', incorrectAnswer);

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers.}`)
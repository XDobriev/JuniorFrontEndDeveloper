let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();
let indexOfWord = userText.indexOf(wordFromText);


const resultString = userText.slice(0, indexOfWord);
alert(`Результат: ${resultString}`)

// меня зовут Хамзат
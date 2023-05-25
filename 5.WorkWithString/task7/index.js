let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

// 1 Обрежьте строку наполовину с 1-го символа по символ, который находится посередине строки. Если номер символа, который находится посередине строки, получается не целым, то используйте функцию Math.floor, чтобы округлить его к меньшему целому числу. (Например, если индекс получился 5.9, то Math.floor(5.9) будет равен 5)
let centrStr = Math.floor(javaScriptDescription.length / 2)
javaScriptDescription = javaScriptDescription.slice(0, centrStr)
console.log(javaScriptDescription);

//В обрезанной строке необходимо заменить все строчные русские буквы “а” на прописные “А”.

let strReplace = javaScriptDescription.replaceAll('а', 'А');
console.log(strReplace);

// Удалите все пробелы в строке

strReplace = strReplace.trim();
strReplace = strReplace.replaceAll(' ', '');


// Продублируйте итоговую строку 3 раза.
strReplace.repeat(3)

// В получившейся строке выведите символ, который находится посередине. Если индекс символа получается не целым, то используйте функцию Math.floor, чтобы округлить его к меньшему числу

strReplace = strReplace.charAt(Math.floor(strReplace.length / 2));

console.log(strReplace);
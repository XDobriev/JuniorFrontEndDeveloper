

// 1. Преобразование к строке, к числу, к Boolean
const age = 20;
console.log('number age:', typeof age); // к строке
console.log('string age:', typeof String(age)); // явное преобразование

const updatedAge = '1'+ 20;
console.log('updatedAge', typeof updatedAge); //неявное преобразование

// к ЧИСЛУ
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:', typeof experienceInJavaScript);
console.log('number experienceInJavaScript:', typeof Number(experienceInJavaScript));


console.log('experienceInJavaScript', typeof +experienceInJavaScript);
// не может преобразовать строку в число будет NaN Not a number

// К Boolean
console.log('hello', Boolean('hello')); 
console.log('5', Boolean('5'));

console.log('0', Boolean(0));

// null, undefined, NaN, 0, '' - выводится false
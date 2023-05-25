console.log('');
// toUpperCase toLowerCase

const animal = 'Lion';
console.log('upper', animal.toUpperCase());
console.log('lower', animal.toLowerCase());

// Найти символы - indexOf, includes

const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf', text.indexOf('JavaScript'));
console.log('includes', text.includes('JavaScript'));

// обрезка строки - slice, substring
const programmingLanguage = 'JavaScript';
console.log('slice', programmingLanguage.slice(1, 5));
console.log('substring', programmingLanguage.substring(1, 5));

// замена символов в строке - replace, replaceAll
const programmingLanguage1 = 'JavaScript';
console.log('replace', programmingLanguage1.replace('Script', ''));
console.log('replaceAll', programmingLanguage1.replaceAll('a', 'A'));

// repeat
const helloText = 'hello';
console.log(helloText.repeat(2));

// trim - убирает пробелы

const nameOfUser = prompt('Как вас зовут?');
console.log('nameOfUser', nameOfUser);
console.log('trim', nameOfUser.trim());
const myName = 'Khamza';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Минин';
const reasonText = 'хочу обеспечить безбедную жизнь своей семье';
const numberOfMonth = '1,5 месяца';

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
console.log('myInfoText', myInfoText);
console.log('length', myInfoText.length);
console.log('1-й', myInfoText[0]);
console.log('последний', myInfoText[myInfoText.length - 1]);

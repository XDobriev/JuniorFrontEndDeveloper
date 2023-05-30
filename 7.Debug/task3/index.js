/* Задание #3
Вы только сосредоточились, решили начать писать свой код и продуктивно поработать.
Но к вам опять подходит Петр и просит ему помочь. Вы говорите ему, что вы поможете
ему в последний раз сегодня.
Сейчас у Петра не работает данная программа:
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
const salaryWithTax =
salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
totalJuniorDevelopersSalary += salaryWithTax;
}c
onsole.log('totalJuniorDevelopersSalary',
totalJuniorDevelopersSalary);
В данном коде totalJuniorDevelopersSalary выводит почему-то значение NaN.
Исправьте все ошибки, чтобы программа работала правильно. Также выполните
следующие условия: баг должен быть исправлен при помощи console.log либо debugger, в
коде должен присутствовать минимум один console.log либо debugger. */

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
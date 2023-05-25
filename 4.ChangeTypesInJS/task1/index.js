let myName = 'Khamza';
console.log(Number(myName), Boolean(myName), String(myName));
let myAge = 27;
console.log(Number(myAge), Boolean(myAge), String(myAge));
let myBoolean = true;
console.log(Number(myBoolean), Boolean(myBoolean), String(myBoolean));
let myNull = null;
console.log(Number(myNull), Boolean(myNull), String(myNull));
let myUndefined;
console.log(Number(myUndefined), Boolean(myUndefined), String(myUndefined));
let myBigInt = 10n;
console.log(Number(myBigInt), Boolean(myBigInt), String(myBigInt));
let mySymbol = Symbol("id");
console.log(Number(mySymbol), Boolean(mySymbol), String(mySymbol));
let myObject = {
    name: 'Khamza Dobriev',
    age: 27,
    profession: 'software engineer',
}
console.log(Number(myObject), Boolean(myObject), String(myObject));

//number, string, boolean, null, undefined, object, bigint, symbol.
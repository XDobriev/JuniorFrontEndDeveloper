console.log(console.log, String(console.log), Number(console.log), Boolean(console.log));
console.log({name: 'Maxim'}, String({name: 'Maxim'}), Number({name: 'Maxim'}), Boolean({name: 'Maxim'}));
console.log(Symbol('key'), String(Symbol('key')), /* Number(Symbol('key')) */ Boolean(Symbol('key')));
console.log(Number, String(Number), Number(Number), Boolean(Number));
console.log("", String(""), Number(""), Boolean(""));
console.log(0, String(0), Number(0), Boolean(0));
console.log(-10, String(-10), Number(-10), Boolean(-10));
console.log('-105', String('-105'), Number('-105'), Boolean('-105'));
var sayHello = "Hello World !";
console.log(sayHello);

let sentence = "Javascript";
console.log(sentence[0]); // "J"
console.log(sentence[2]); // "V"

let word = "Javascript is awesome"
console.log(word.length); // Jumlah Karakter

console.log('I am string'.charAt(3));

let string1="good";
let string2="luck";
console.log(string1.concat(string2));

let text = "dung dung ces !";
console.log(text.indexOf('dung')); // index ke 0
console.log(text.indexOf('n')); // index ke 2
console.log(text.indexOf('x')); // tidak ditemukan

let car1 = 'Lykan Hypersport';
let car2 = car1.substr(6);
console.log(car2);

let motor1='zelda motor';
let motor2= motor1.substr(2,2);
console.log(motor2);
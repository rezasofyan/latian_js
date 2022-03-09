//Destructuring
//Selain array, Object juga punya Destructuring, destructuring merupakan ekspresi javascript yang memungkinkan untuk membagi atau memecah nilai dari sebuah array atau objek ke dalam variabel yang berbeda
//berikut ini contoh penggunaan destructuring dan perbandingannya dengan sebelum destructuring

//Before ES6 :

// object
var studentName = {
    firstName1: 'Peter',
    lastName1: 'Parker'
};
 
const firstName1 = studentName.firstName1;
const lastName1 = studentName.lastName1;

console.log("firstName1 "+firstName1)

//After ES6 :
// object
var studentName = {
    firstName2: 'Peter',
    lastName2: 'Parker'
};
const {firstName2, lastName2} = studentName
console.log("firstname2 "+firstName2)
 
//Spread Operator
//Spread Operator digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru
//berikut ini contoh penggunaan Spread Operator:

//Spread in object

let person = {name: "john", age: 30}

let newPerson = {...person, hobby: "Gaming"}

console.log(newPerson) // {name: "john", age: 30, hobby: "Gaming"}

//Enhanced object literals 
//Enhanced object literals merupakan fitur ES6 yang memungkinkan kita untuk menyederhanakan sebuah object, dimana biasanya kita selalu menulis property dan value, tetapi jika terdapat kondisi ada variabel yang namanya sama dengan property maka kita bisa assign hal tersebut sebagai value tetapi dengan  hanya menulis property nya saja

//berikut ini contoh enhanced object literals dan perbandingan dengan javascript sebelum es6

//Before ES6 :

const fullName1 = 'John Doe'
const john1 = {
  fullName: fullName1
}

//After ES6 :

const fullName2 = 'John Doe'
const john2 = {fullName2}
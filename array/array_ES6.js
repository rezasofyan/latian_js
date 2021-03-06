/*Array Javascript Fitur di ES6

Destructuring 
Destructuring merupakan ekspresi javascript yang memungkinkan untuk membagi atau memecah nilai dari sebuah array atau objek ke dalam variabel yang berbeda

berikut ini contoh penggunaan destructuring dan perbandingannya dengan sebelum destructuring
*/


/*Before ES6 :
// array
var numbers = [1,2,3]

var numberOne = numbers[0]
var numberTwo = numbers[1]
var numberThree = numbers[2]

console.log(numberOne)
*/

//After ES6 :
// array
let nomor = [1,2,3]
const [no_satu, no_dua, no_tiga] = nomor
console.log(no_satu)
 

/*Rest Parameters

Rest Parameters di lambangkan dengan simbol yang sama yaitu "..."
Rest Parameter ini berguna untuk menggabungkan semua paramater pada function ke dalam array. Dengan menggunakan Rest Parameter ini dapat membantu kita mendefinisikan function dengan rapi serta memberikan parameter yang tidak terbatas pada sebuah function.
berikut ini contoh penggunaan rest parameters:*/

//first example
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores;
 
console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
console.log(restOfScores) // [90, 87, 85] 

/*Spread Operator

Spread Operator di lambangkan dengan simbol yang sama yaitu "..."
Spread Operator digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru
berikut ini contoh penggunaan Spread Operator:*/

// spread operator

let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']  

//Before ES6 :  
/*

var combinedArray = array1.concat(array2).concat(array3)
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']  */

//After ES6 :  

let combinedArray = [...array1, ...array2, ...array3]
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']


/*Default Parameters
biasanya kita dalam membuat function pasti punya parameter tapi apakah 
parameter itu sendiri bisa di beri default, jawabannya adalah ya di ES6
kita dapat memasukkan default parameter seperti contoh di bawah ini:
*/
function multiply(a, b = 1) {
  return a * b;
}
 
console.log(multiply(5, 2));
// expected output: 10
 
console.log(multiply(5));
// expected output: 5 

/*
Rest Parameters in FuncTion ( ES6 )
Rest Parameter ini berguna untuk menggabungkan semua paramater pada 
function ke dalam array. Dengan menggunakan Rest Parameter ini dapat 
membantu kita mendefinisikan function dengan rapi serta memberikan
parameter yang tidak terbatas pada sebuah function.
berikut ini contoh penggunaan rest parameters:
*/

//First example 
const filter = (...rest) =>{ 
return rest.filter(el => el.text !== undefined) 
} 
console.log(filter(1, {text: "wonderful"}, "next")) // wonderful

//second example 
const fullName = (...rest) =>{ 
let [firstName, lastName] = rest
return `${firstName} ${lastName}`
} 

console.log(fullName("John", "Doe")) // John Doe
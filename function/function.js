//Before ES6 :
function myFunction (){
    // isi Function
}

// panggil Function
myFunction()

//After ES6 :

const myFuncton = () => {
    //function
}

// panggil Function
myFunction()


//Contoh Function 1: Function sederhana tanpa return
function tampilkan1() {
  console.log("halo!");
}
 
tampilkan1(); 

//Contoh Function 2: Function sederhana dengan return
function munculkanAngkaDua() {
  return 2
}
var tampung2 = munculkanAngkaDua();
console.log("func 2 = "+tampung2)

//Contoh Function 3: Function dengan parameter
function kalikanDua(angka3) {
  return angka3 * 2
}
var tampung3 = kalikanDua(7);
console.log("func 3 = "+tampung3) 

//Contoh Function 4: Pengiriman parameter lebih dari satu
function tampilkanAngka4(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}
 console.log("func 4 = "+tampilkanAngka4(5, 3))

//Contoh Function 5: Inisialisasi parameter dengan nilai default
function tampilkanAngka5(angka5 = 1) {
  return angka5
}
console.log("func 5 = "+tampilkanAngka5(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log("func 5 = "+tampilkanAngka5()) // 1, karena default dari parameter adalah 1

//Contoh Function 6:  Function dengan Conditional
function tampilAngka6(angkaPertama6, angkaKedua6){

var hasil = angkaPertama6 + angkaKedua6

if(hasil > 10){
    return "hasil lebih besar dari 10"
  } else if(hasil > 0 && hasil < 10 ){
    return "hasil lebih kecil dari 10"
  } else if(hasil === 0  ){
    return "hasil 0"
  }else {
    return "Tidak ada nilai dari parameter"
  }
}
console.log("func 6 = "+tampilAngka6(5,10))


//Contoh Function 7:  Function dengan Looping didalamnya
function looping(iteration){
  for(var i = 1; i < iteration; i++){
     console.log(i)
  }
}
console.log("Function 7 :")
looping(11)
 
//CATATAN : Waspadai pengiriman parameter yang UNDEFINED!


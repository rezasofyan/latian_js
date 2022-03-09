//DEKLARASI OBJECT
/*
var object = {
    [key]: [value]
}
*/

var car = {
    brand: "Ferrari",
    type: "Sports Car",
    price: 50000000,
    "horse power": 986
}


//DEKLARASI OBJECT KOSONG
var car2 = {}
// meng-assign key:value dari object car2
car2.brand = "Lamborghini"
car2.brand = "Sports Car"
car2.price = 100000000
car2["horse power"] = 730

//MENGAKSES NILAI PADA OBJECT
var motorcycle1 = {    
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"
console.log(motorcycle1["price"]) //1000  cara lain mengakses nilai

//ARRAY OF OBJECT
var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"}, 
    {merk: "toyota", warna: "hitam", tipe: "box"}, 
    {merk: "audi", warna: "biru", tipe: "sedan"}]

//utk mengaksesnya dgn cara
console.log(mobil[0].merk) // BMW
console.log(mobil[1].merk) // TOYOTA
console.log(mobil[1].warna) // HITAM

//ARRAY ITERATION
/*
forEach()
map()
filter()
reduce()
every()
some()
indexOf()
includes()
dan masih banyak lagi
*/

//implementasi Array Iteration
// .foreach 
// foreach method untuk array berfungsi untuk perulangan data dari array
var mobil = [{merk: "BMW", warna: "merah", tipe: "sedan"}, 
             {merk: "toyota", warna: "hitam", tipe: "box"}, 
             {merk: "audi", warna: "biru", tipe: "sedan"}]

mobil.forEach(function(item){
   console.log("warna : " + item.warna)
})

// .map
// map method untuk array berfungsi untuk membuat array baru
var arrayWarna = mobil.map(function(item){
    return item.warna
 })
 console.log(arrayWarna)

 var arrayType = mobil.map(function(item){
    return item.merk
 })
 console.log(arrayType)

 console.log("++++++++++++++")
 // .filter
 // filter method untuk array berfungsi untuk memnyaring data yang diinginkan
 var arrayMobilFilter = mobil.filter(function(item){
    return item.tipe == "sedan";
 })
 
 console.log(arrayMobilFilter)


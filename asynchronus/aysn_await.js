/*

Async/await adalah fitur yang hadir sejak ES2017. Fitur ini mempermudah kita dalam menangani proses asynchronous. 

Ada 2 kata kunci disini yaitu async dan await, mari kita lihat contohnya :

jika kita memiliki promise seperti ini:
*/


function doAsync() {
  return new Promise( function (resolve, reject){
    var check = true
    if (check){
      resolve("berhasil")
    }else{
      reject("gagal")
    }
  })
}
 
//maka cara menggunakan nya pada async/await adalah seperti ini:
 async function hello(){
   var result = await doAsync()
   console.log(result)
}

hello()

//Keterangan :
//async → mengubah function menjadi asynchronous
//await → menunda eksekusi hingga proses asynchronous selesai, dari kode di atas berarti console.log(result) tidak akan di eksekusi sebelum proses doAsync( ) selesai . await juga bisa digunakan berkali-kali di dalam function

//sekarang kita coba gunakan promise pada async/await :

// promise periksa data pasien
function periksaDataPasien(nomorIdPasien) {
  var dataPasien = [
    {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
    {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
    {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
    {id: 4, nama: "Frank", jenisKelamin: "Laki-laki"}
  ]
  return new Promise( function (resolve, reject){
    var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
    if (pasien === undefined){
      reject("data pasien tidak ada")
    }else{
      resolve(pasien)
    }
  })
}

//jika promise diatas kita gunakan dalam async/await maka akan menjadi seperti di bawah ini:

async function periksaPasien(){
  const dataJohn = await periksaDataPasien(1)
  console.log(dataJohn)
}

//perbedaan saat kita menggunakan then dan catch disini kita bisa memasukkan hasil promise nya ke dalam variabel
 
//2. Error Handling
 
//ketika menggunakan promise maka pasangan dari then adalah catch yang di mana catch itu adalah error handling dari promise, tapi bagaiamana dengan async/await, async/await menggunakan try dan catch untuk error handlingnya seperti contoh di bawah ini:

async function hello(){
  try {
   var result = await doAsync()
   console.log(result)
  } catch(err){
    console.log(err)
  }
}

hello()
 
//3. Serial & Paralel
 
//Pada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa. 
 
const firstPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("first promise")
    },1000)
  })
}

const secondPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("second promise")
    },1000)
  })
}

const thirdPromise = () =>{
  return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
      resolve("third promise")
    },1000)
  })
}

//ini paralel selama satu detik
const asyncParalel = async () =>{
  firstPromise().then(res=>{
    console.log(res)
  })
  secondPromise().then(res=>{
    console.log(res)
  })
  thirdPromise().then(res=>{
    console.log(res)
  })
  
}

// ini berseri selama tiga detik
const asyncSerial = async () =>{
  let a = await firstPromise()
  console.log(a)
  let b = await secondPromise()
  console.log(b)
  let c = await thirdPromise()
  console.log(c)
}

asyncParalel()
asyncSerial()
//jika kita jalankan kode diatas maka terlihat bahwa asyncParalel diatas menjalankan semua promisenya serentak sedangkan asyncSerial menjalankan kodenya satu persatu, maka dari itu permasalahan asynchronous dapat di selesaikan dengan ini.

//Setelah kita mengetahui metode-metode yang dapat kita gunakan untuk menghandle sebuah asynchronous pada javascript, maka kita dapat mengetahui/menelaah dengan mudah kenapa asynchronous harus kita handle.

//Berikut ini gambaran setelah dan sebelum kita menghandle asynchronous pada javascript :

let angka = 1

//sebelum menghandle asynchronous
console.log("sebelum menghandle asynchronous")

const beforeAsync = (angka) => {
    angka = 2
    console.log(angka)
}

beforeAsync(angka)
console.log(angka)
console.log()

//setelah menghandle asynchronous
console.log("setelah menghandle asynchronous")

const myFunctionPromise = (angka) =>{
    return new Promise( (resolve, reject) => {
        resolve(angka = 2)
    })
}

const afterAsync = async (param) => {
    let output = await myFunctionPromise(param)
    console.log(output)
}

afterAsync(angka)
console.log(angka)
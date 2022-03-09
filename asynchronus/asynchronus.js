/*
Di dalam dunia pemrograman terdapat dua cara dalam menjalankan program: Synchronous dan Asynchronous. 
Synchronous artinya program berjalan secara berurutan 
sedangkan Asynchronous artinya program berjalan bersama-sama
*/
/*
setTimeout(function() {
    console.log("saya dijalankan belakangan")
  }, 3000)
   
  console.log("saya dijalankan pertama") 
*/
/*
Membuat Callback 
Callback adalah function yang dipanggil ketika function lain selesai menjalankan programnya. 
Contoh sederhana Callback adalah pada function setTimeout di atas. 
function setTimeout menerima dua parameter yaitu callback dan waktu tunggu (timeout). 
function tersebut menjalankan timeout terlebih dahulu lalu ketika waktu 
yang diset sudah dilewati maka function callback akan dipanggil.
*/

// Deklarasi function yang memilik callback sebagai parameter

function periksaDokter(nomerAntri, callback) {
    if(nomerAntri > 50 ) {
        callback(false)
    } else if(nomerAntri < 10) {
        callback(true)
    }    
} 

/*
Misalkan kita ingin periksa ke dokter yang antriannya sering panjang dan memakai nomer antri melalui pemesanan online. 
Setelah registrasi online lalu kita melakukan pemesanan dan menunggu nomer antrian. 
Function di atas menerima parameter nomer antri dan sebuah callback. 
Dilakukan pengecekan kondisi jika nomor antriannya lebih dari 50 maka lebih baik jalan-jalan dulu daripada menunggu, 
tapi jika nomor antriannya kurang dari 10 tentunya kita harus standby lagi di klinik untuk dipanggil.
*/

// MENJALANKAN CALLBACK
// Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
periksaDokter(65, function(check) {
    if(check) {
        console.log("sebentar lagi giliran saya")
    } else {
        console.log("saya jalan-jalan dulu")
    }
}) 
console.log("===========================================")

function periksaAntrianDokter(nomerAntri, callback) {
    console.log(`sekarang antrian ke-${nomerAntri}`)
    setTimeout(function () {
      if(nomerAntri === 10 ) { 
        console.log("saya masuk ruangan dokter")
        callback(0)
      } else {
        console.log("saya masih menunggu")
        callback(nomerAntri+1)
      }    
    }, 1000)
  }
  //cara menggunakan callback dengan setTimeout di dalamnya adalah seperti ini:
  
  var nomorAntriSekarang = 7
  
  // contoh menggunakan callback hell
  periksaAntrianDokter(nomorAntriSekarang, function(nomorAntriBaru){
    periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1){
      periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2){
        periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3){
          return nomorAntriBaru3
        })
      })
    })
  });
  
  // atau dengan menggunakan function recursive
  function execute(nomorAntri){
    periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
      if (nomorAntriBaru !== 0){
        execute(nomorAntriBaru)
      }
    })
  }
  
  execute(nomorAntriSekarang)
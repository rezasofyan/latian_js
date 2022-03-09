/*Sesuai dengan namanya, Promise berarti janji. 
Seperti janji yang biasanya memakan waktu dan janji bisa ditepati (resolve) 
atau diingkari (reject)*/

var isMomHappy = false;
 
// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled atau janji dipenuhi
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject (ingkar)
        }
 
    }
); 

function askMom() {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
}
 
// Tanya Mom untuk menagih janji
askMom() 


// promise periksa antrian dokter
function periksaAntrianDokterPromise(nomerAntri) {
    console.log(`sekarang antrian ke-${nomerAntri}`)
    return new Promise( function (resolve, reject){
      setTimeout(function () {
        if(nomerAntri === 10 ) { 
          console.log("saya masuk ruangan dokter")
          reject(0)
        } else {
          console.log("saya masih menunggu")
          resolve(nomerAntri+1)
        }    
      }, 1000)
    })
  }
  
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
  //cara menggunakan promisenya adalah seperti ini:
  
  // untuk promise periksa antrian dokter
  var nomorAntriSekarang = 7
  function execute(nomorAntri){
   periksaAntrianDokterPromise(nomorAntri).then(function(nomorAntriBaru){
      if (nomorAntriBaru !== 0){
        execute(nomorAntriBaru)
      }
    }).catch(function(err){
      console.log(err)
    })
  }
  
  execute(nomorAntriSekarang)
  
  
  // untuk promise periksa data pasien
  periksaDataPasien(5).then(function(data){
    console.log(data)
  }).catch(function(err){
    console.log(err)
  })
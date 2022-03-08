
//Looping Angka 1-9 Sederhana
var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

console.log('-------------------------------');

//loop mengembalikan Angka Total 
var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}
 
console.log('Jumlah terakhir: ' + jumlah);

console.log('-------------------------------');

//loop increment dan decrement lebih dari 1
for(var deret = 0; deret < 10; deret += 2) {
    console.log('Iterasi dengan Increment counter 2: ' + deret);
  }
   
  console.log('-------------------------------');
   
  for(var deret = 15; deret > 0; deret -= 3) {
    console.log('Iterasi dengan Decrement counter : ' + deret);
  } 

  console.log('-------------------------------');

  //looping kondisi
  for(var i = 0; i <= 6 ; i++){
    if(i === 3){
      console.log("ini For-Loop dengan Kondisi")
    }else{
      console.log(i)
    }
  }


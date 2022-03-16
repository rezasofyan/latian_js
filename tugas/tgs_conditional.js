
 /*//Tugas 1
var nilai1 = 80;
var nilai2 = 50;

if(nilai1 >= 80 ){
    console.log('Nilai 1' + ' A')
}else if (nilai1 >=70 && nilai1 < 80){
    console.log('Nilai 1' + ' B')
}else if (nilai1 >=60 && nilai1 <70){
    console.log('Nlai1'+' C')
}else if(nilai1 >=50 && nilai1 <60){
    console.log('Nilai1'+' D')
}else{
    console.log('Nilai1' + 'E')
}*/

/* //Tugas 2
var tanggal = 15;
var bulan = 8;
var tahun = 1992;

switch(bulan) {
    case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
    case 2:   { console.log(tanggal + ' Febuari ' + tahun); break; }
    case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
    case 4:   { console.log(tanggal + ' April ' + tahun); break; }
    case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
    case 6:   { console.log(tanggal + ' Juni ' + tahun); break; }
    case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
    case 8:   { console.log(tanggal + ' Agustus ' + tahun); break; }
    case 9:   { console.log(tanggal + ' September ' + tahun); break; }
    case 10:   { console.log(tanggal + ' Oktober ' + tahun); break; }
    case 11:   { console.log(tanggal + ' November ' + tahun); break; }
    case 12:   { console.log(tanggal + ' Desember ' + tahun); break; }
    default:  { console.log('-None-'); }}
*/


/* //tugas 3
for(var x = 1; x <= 20; x++){
    if(x % 2 == 0){
        console.log(x + ' - I Love Coding')
    } else if(x == 1){
        console.log('Looping Pertama')
    }
}

for(var y = 21; y >= 2; y--){
    if(y % 2 == 0){
        console.log(y + ' - I will become a frontend developer')
    } else if(y == 21){
        console.log('Looping Kedua')
    }
}
*/


/* //tugas 4
for(var x = 1; x <= 20; x++){
	if (x % 3 == 0 && x % 2 == 1){
        console.log(x + ' - I Love Coding')
    } else if(x % 2 == 0){
        console.log(x + ' - Berkualitas')
    } else if(x % 2 == 1){
        console.log(x + ' - Santai')
    }
}
*/


//Tugas 5


var s = ''; //var s bernilai kosong
for(var i = 0; i < 10; i++){  //var i = 0, i akan diulang smpai kurang dari 10; i melakukan increment
	for(var j =0; j <= i; j++){ //var j = 0, j akan diulang sampai kurang dari samadengan jumlah baris (i), j melakukan increment
		s += '*';	//jika kondisi true maka var s akan menambahkan dirinya dengan * 
	}
	s += '\n'; //var s akan menambahkan dirinya dengan enter
}

console.log(s);
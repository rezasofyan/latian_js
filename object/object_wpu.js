// 1. OBJECT LITERAL

// let mahasiswa1 = {
//     nama : 'reza',
//     energi : 10,
//     makan : function(porsi){
//        this.energi = this.energi + porsi;  
//        console.log(`Halo ${this.nama}, Selamat Makan !`)
//     }
// }


// let mahasiswa2 = {
//     nama : 'almira',
//     energi : 17,
//     makan : function(porsi){
//        this.energi = this.energi + porsi;  
//        console.log(`Halo ${this.nama}, Selamat Makan !`)
//     }
// }

// 2. FUNCTION DECLRACATION

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`)
//     }

//     mahasiswa.aktifitas = function(jam){
//         this.energi -= jam;
//         console.log(`Hai ${this.nama}, Selamat beraktifitas`)
//     }

//     return mahasiswa;
// }

// let indiary = Mahasiswa('Indiary', 10)
// let rezakenji = Mahasiswa('Reza Kenji',10)

// MENGGUNAKAN OBJECT.CREATE
// const methodMahasiswa={
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`)
//     },

//     aktifitas: function(jam){
//         this.energi -= jam;
//         console.log(`Hai ${this.nama}, Selamat beraktifitas !`)
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Hai ${this.nama}, Selamat Bobo !`)
//     }

// }


// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let kenji = Mahasiswa('kenji',10);

//MENGGUNAKAN PROTOTYPE

function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan= function(porsi){
    this.energi += porsi;
    return (`Hai ${this.nama}, Selamat Makan !`)
}

Mahasiswa.prototype.aktifitas = function(jam){
    this.energi -= jam;
    return (`Hai ${this.nama}, Selamat Beraktifitas !`)
}

let indiary = new Mahasiswa('Indiary',10)

// 3. CONSTRUCTOR FUNCTION
// KEYWORD NEW

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`)
//     }

//     this.aktifitas = function(jam){
//         this.energi -= jam;
//         console.log(`Hai ${this.nama}, Selamat beraktifitas`)
//     }

// }

// let mino = new Mahasiswa('Mino',10)

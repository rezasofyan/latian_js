//brancing dengan kondisi
var minimarketStatus = "close"
var minuteRemainingToOpen = 5


if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}



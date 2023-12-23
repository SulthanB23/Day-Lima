console.log("Hello semua");

// challange variable & pemanipulasi string
// buat file baru di repo yang sama, nama file "challange-variable"
// tampilkan data menggunakan backtick / ``

const namaLengkap = "Sulthan Bonang Hendrajat"
const namaPanggilan = "Sulthan"

let result = `Perkenalkan nama saya ${namaLengkap}, biasa dipanggil ${namaPanggilan}`

console.log(result);
// ganti saya jadi aku (string manipulative)
console.log(result.replaceAll(`saya`, `aku`));


// catatan aja
// array. pake "[ ]"
let ciki1 = `taro`
let ciki2 = `jaguar`
let ciki3 = `komo`
// console.log(ciki1);
// console.log(ciki2);
// console.log(ciki3); 
// CAPEK. dipermudah dengan adanya ARRAY. beberapa variabel dijadiin 1

let merkCiki = [`taro`, `komo`, `citato`, `biskuat`, `jaguar`]
console.log(merkCiki);


// catatan aja
// object. pake { }
// detail dari sebuah data
let dataTaro = {
    nama: `taro`,
    harga: `1000`,
    rasa: `jagung`
}
let dataKomo = {
    nama: `komo`,
    harga: `2000`,
    rasa: `bbq`
}


// catatan aja 
// Array Object. pake kombinasi [ ] dan { }, menjadi [ { } ]
// WAJIB [ ] duluan 
let dataCiki = [
    {nama: `taro`,
    harga: `1000`,
    rasa: `jagung`
    },
    {nama: `komo`,
    harga: `2000`,
    rasa: `bbq`
    }
] 

console.log(dataCiki);
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
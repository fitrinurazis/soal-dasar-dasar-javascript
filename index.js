// Soal 1

let ek = null;
const massaBenda = 3;
const kecepatan = 6;

ek = 0.5 * massaBenda * kecepatan ** 2;
console.log("Soal 1 = " + ek + "J");

// Soal 2
let fb = null;
const m = 0.2;
const v = 4;
const r = 0.5;

fb = (m * v ** 2) / r;

console.log("Soal 2 = " + fb + "N");

// Soal 3
let ep = null;
const massa = 10;
const gravitasi = 9.8;
const ketinggian = 15;

ep = massa * gravitasi * ketinggian;
console.log("Soal 3 = " + ep + "J");

// Soal 4

let w = null;
const berat = 8;
const gaya = 5;

w = berat * gaya;
console.log("Soal 4 = " + w + "J");

// Soal 5
// Jumlah baris segitiga
let jumlahBaris = 5;
console.log("Soal 5");
// Loop untuk baris
for (let i = 1; i <= jumlahBaris; i++) {
  let baris = "";

  // Loop untuk mencetak bintang di setiap baris
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }

  console.log(baris);
}

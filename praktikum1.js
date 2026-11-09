let teman = ['Quinby', 'Pia', 'Hiro', 'Iyyun', 'Rahma'];

console.log('jumlah teman:', teman.length);
console.log('teman pertama:', teman[0]);
console.log('teman terakhir:', teman[teman.length - 1]);

for (let i = 0; i < teman.length; i++) {
    console.log((i + 1) + '. ' + teman[i]);
}

console.log('=======================================');

//Tugas 1
let nilai = [80, 90, 75, 85, 95];
let total = 0;
//Variabel untuk menyimpan nilai dalam array

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}
console.log('Total nilai:', total);
//Menghitung total nilai dari array nilai. Perulangan tetap terjadi sebanyak length array nilai, yaitu 5 kali.
//Setiap iterasi bertambah 1, nilai[i] akan diambil dari array nilai dan ditambahkan ke total. 
//Setelah perulangan selesai, total akan berisi jumlah semua nilai dalam array.

let rataRata = total / nilai.length;
console.log('Rata-rata nilai:', rataRata);
//Menghitung rata-rata nilai dengan membagi total nilai dengan jumlah elemen dalam array nilai.

let tertinggi = nilai[0];
for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > tertinggi) {
        tertinggi = nilai[i];
    }
}
console.log('Nilai tertinggi:', tertinggi);
//Menghitung nilai tertinggi dalam array nilai. Nilai tertinggi sementara adalah elemen pertama dari array nilai, yaitu 80. 
//Perulangan dimulai dari indeks 1 hingga akhir array. Jika nilai[i] lebih besar dari tertinggi, maka tertinggi akan diperbarui dengan nilai[i].
//Setelah perulangan selesai, variabel tertinggi akan berisi nilai tertinggi dalam array.

let terendah = nilai[0];
for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] < terendah) {
        terendah = nilai[i];
    }
}
console.log('Nilai terendah:', terendah);
//Menghitung nilai terendah dalam array nilai. Nilai terendah sementara adalah elemen pertama dari array nilai, yaitu 80.
//Perulangan dimulai dari indeks 1 hingga akhir array. Jika nilai[i] lebih kecil dari terendah, maka terendah akan diperbarui dengan nilai[i].
//Setelah perulangan selesai, variabel terendah akan berisi nilai terendah dalam array.

console.log('=======================================');

//Tugas2
let data = ['Budi', 16, true, 3.5];
console.log(typeof data[0]); // string
console.log(typeof data[1]); // number
console.log(typeof data[2]); // boolean
console.log(typeof data[3]); // number

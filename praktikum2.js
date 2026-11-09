let nilai = [
    [80, 75, 90],
    [85, 90, 95],
    [70, 80, 85],
];

let siswa = ['Budi', 'Ani', 'Citra'];

for (let b = 0; b < nilai.length; b++) {
    let total = 0;

    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }

    let rata = total / nilai[b].length;
    console.log(siswa[b] + ': total ' + total + ' || Rata-rata : ' + rata.toFixed(1));
}

console.log('===================================');

//Tugas 2
nilai.push([87, 93, 95]);
siswa.push('Athaya');
//Menambahkan data nilai dan nama siswa baru ke dalam array nilai dan siswa menggunakan push.

//Rata-rata nilai per siswa baru
for (let b = 0; b < nilai.length; b++) {
    let total = 0;

    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }

    let rata = total/ nilai[b].length;
    console.log(siswa[b] + ': total ' + total + ' || Rata-rata : ' + rata.toFixed(1));
}
//Menghitung total dan rata-rata nilai per siswa setelah menambahkan data siswa baru. Perulangan tetap terjadi sebanyak length array nilai, yaitu 4 kali.
//Perulangan pertama (variabel b) digunakan untuk berpindah dari anak 1 sampai 4.
//Perulangan kedua (variabel k) digunakan untuk berpindah dari mata pelajaran 1 sampai 3, dijumlahkan ke total nilai per anak.
//Setelah perulangan selesai, rata-rata nilai per siswa akan dihitung dengan membagi total nilai keseluruhan mata pelajaran dari 1 siswadengan jumlah mata pelajaran (length array nilai[b]).

console.log('===================================');

//Tugas 3
for (let k = 0; k < nilai[0].length; k++) {
    let total = 0;

    for (let b = 0; b < nilai.length; b++) {
        total = total + nilai[b][k];
    }

    let rata = total / nilai.length;

    console.log('Mata Pelajaran ' + (k + 1) + ': ' + rata.toFixed(1));
}
//Menghitung rata-rata nilai per mata pelajaran.
//Perulangan pertama (variabel k) digunakan untuk berpindah dari mata pelajaran 1 sampai 3.
//Perulangan kedua (variabel b) digunakan untuk berpindah dari anak 1 sampai 4, dijumlahkan ke total nilai per mata pelajaran.
//Setelah perulangan selesai, rata-rata nilai per mata pelajaran akan dihitung dengan membagi total nilai keseluruhan siswa dari 1 mata pelajaran dengan total jumlah siswa yaitu 4.
    
console.log('===================================');

//tugas 4
console.log('Nilai [2][1]: ' +  nilai[2][1]);
//Mengambil nilai dari array dua dimensi. 
//Mengambil nilai dari baris ke 3 (indeks 2) yaitu siswa ke-3 (Citra)
//Mengambil kolom ke 2 (indeks 1) dari array nilai, yaitu 80.
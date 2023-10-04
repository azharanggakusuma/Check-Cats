# Coding Challenge SMK Dev & Eudeka #8142

## Deskripsi Kode

Kode `checkCats` adalah sebuah fungsi JavaScript yang dirancang untuk memproses data mengenai usia kucing dari dua set pemilik kucing, yaitu Tuti dan Nining. Tujuan dari fungsi ini adalah untuk menentukan apakah setiap kucing dianggap sebagai "Kucing Dewasa" atau "Kucing Kecil (Kitten)" berdasarkan usianya. Berikut adalah langkah-langkah utama yang diambil oleh fungsi ini:

1. **Salin dan Modifikasi Array**: Fungsi ini pertama-tama membuat salinan dari array milik Tuti menggunakan pernyataan `const tutiCatsCopy = [...tutiCats]`. Kemudian, ia menghapus usia kucing dari salinan tersebut dengan menghapus elemen pertama (Kucing Pertama) dan dua elemen terakhir (Kucing Terakhir yang sebenarnya adalah anjing) menggunakan pernyataan `splice`.

2. **Gabungkan Data**: Setelah mengoreksi data Tuti, fungsi menggabungkan data tersebut dengan data Nining menggunakan pernyataan `const combinedCats = tutiCatsCopy.concat(niningCats)`.

3. **Iterasi dan Evaluasi**: Fungsi selanjutnya melakukan iterasi melalui setiap kucing dalam array gabungan dan mengevaluasi usianya. Jika usia kucing lebih dari atau sama dengan 3 tahun, itu dianggap sebagai "Kucing Dewasa," dan jika kurang dari 3 tahun, itu dianggap sebagai "Kucing Kecil (Kitten)." Hasilnya ditampilkan di konsol dengan bantuan pernyataan `console.log()`.

## Tujuan Mengikuti Coding Challenge

Mengikuti Coding Challenge dari SMK Dev dan Eudeka memiliki beberapa tujuan yang ingin dicapai:

1. **Pengembangan Keterampilan**: Tujuan utama adalah meningkatkan kemampuan pemrograman dan pemahaman tentang manipulasi array dan logika dalam pemrograman.

2. **Praktek dan Pembelajaran**: Melalui implementasi kode, peserta dapat mempraktekkan pengetahuan yang telah dipelajari dan belajar hal-hal baru dalam situasi nyata.

3. **Kolaborasi dan Komunitas**: Coding Challenge juga mempromosikan kolaborasi dengan peserta lain, berbagi pengetahuan, dan membangun komunitas yang solid dalam dunia pemrograman.

4. **Evaluasi dan Pengembangan**: Tugas-tugas yang dinilai memberikan kesempatan kepada peserta untuk menerima umpan balik dan memahami area di mana mereka dapat mengembangkan keterampilan mereka.

## Cara Menggunakan Kode

Kode ini dirancang untuk menguji apakah kucing dianggap sebagai kucing dewasa atau kitten berdasarkan usianya. Anda dapat menjalankan kode ini di lingkungan JavaScript Anda. Pastikan Anda telah mengatur data uji dan panggil fungsi `checkCats` dengan data tersebut.

### Langkah Debugging

Jika Anda ingin melakukan debugging kode `checkCats`, berikut adalah langkah-langkah yang dapat Anda ikuti:

1. Buka console JavaScript di lingkungan yang Anda gunakan untuk menjalankan kode ini (misalnya, konsol browser).
2. Pastikan Anda telah mengatur data uji yang sesuai, seperti yang telah dilakukan dalam kode ini.

### Hasil Debugging:

#### Data Uji 1:
- Kucing Nomor 1 adalah Kucing Dewasa dan berusia 5 tahun
- Kucing Nomor 2 masih anak-anak.
- Kucing Nomor 3 adalah Kucing Dewasa dan berusia 4 tahun
- Kucing Nomor 4 masih anak-anak.
- Kucing Nomor 5 adalah Kucing Dewasa dan berusia 15 tahun
- Kucing Nomor 6 adalah Kucing Dewasa dan berusia 8 tahun
- Kucing Nomor 7 adalah Kucing Dewasa dan berusia 3 tahun

#### Data Uji 2:
- Kucing Nomor 1 adalah Kucing Dewasa dan berusia 16 tahun
- Kucing Nomor 2 adalah Kucing Dewasa dan berusia 6 tahun
- Kucing Nomor 3 adalah Kucing Dewasa dan berusia 10 tahun
- Kucing Nomor 4 adalah Kucing Dewasa dan berusia 5 tahun
- Kucing Nomor 5 adalah Kucing Dewasa dan berusia 6 tahun
- Kucing Nomor 6 masih anak-anak.
- Kucing Nomor 7 adalah Kucing Dewasa dan berusia 4 tahun

## Akhir Kata

Untuk informasi lebih lanjut atau jika Anda memiliki pertanyaan, Anda juga dapat menghubungi saya melalui [Instagram saya](https://instagram.com/azharangga_kusuma). Jangan ragu untuk berbagi tanggapan atau saran Anda!

Selamat belajar : )
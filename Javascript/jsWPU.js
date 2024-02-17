// var noAngkot = 1;
// var jmlhAngkot = 10;
// var angkotOperasi = 6;

// while (noAngkot <= angkotOperasi){
//     console.log(`Angkot no. ${noAngkot} beroperasi dengan baik.`);

//     noAngkot ++;
// }

/* if, else if, else
// for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++){

//     if(noAngkot <= 6 && noAngkot !== 5){
//         console.log(`Angkot no. ${noAngkot} Beroperasi dengan baik`);
//     }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
//         console.log(`Angkot no.${noAngkot} Sedang Lembur`);
//     }
//     else{
//         console.log(`Angkot no. ${noAngkot} Tidak beroperasi`);
//     }

// }*/

//switch
// var angka = parseInt(prompt('Masukkan angka'));
// switch(angka){
//     case 1 : 
//         alert('anda memasukkan angka 1');
//         break;
//     case 2 :
//         alert('anda memasukka angka 2');
//         break;
//     case 3 :
//         alert('anda memasukkan angka 3');
//         break;
//     default :
//         alert('Angka yang anda masukkan salah')
// }


// switch (item){
// var item = parseInt ( prompt ('Masukkan item yang mau kamu pilih \n 1.Ayam Penyet \n 2. lontong pecel \n 3. Miesop \n 4.Soft Drink \n 5. Junk Food'));

//     case 1 :
//         alert ('penuh dengan karbo');
//         break;
//     case 2 :
//         alert('4 Sehat 5 Magnum');
//         break;
//     case 3 :
//         alert('Gak kenyang nanti');
//         break;
//     case 4 :
//     case 5 :
//         alert ('Makanan dan minuman tidak sehat');
//         break;
//     default :
//         alert('Diwarung sebelah aja');
// }

//Segitiga terbailik
// var s = '';
// for (i=5; i>=1; i--){
//     for (j=1; j<=i; j++){
//         s +='*';
//     }
//     s += '\n';
// }
// console.log (s);



// Latihan gabungkan segitiga
// var a ='';
// var b = '';
// for (i=1; i<=5; i++){
//     for(j=1; j<=i; j++){
//             a += '*';
//         }
//     a += '\n';
// }

// for(k=5; k>=1; k--){
//     for (l=1; l<=k; l++){
//         b += '*';
//     }
//     b += '\n';
// }
// console.log(`${a}${b}`);

//segitiga sama kaki terbalik
// var s = '';
// //baris
// for (i=0; i<5; i++){
//     //space
//     for(j=0; j<i; j++){
//             s += ' ';
//         }//

//     for(k=4; k>i; k--){
//         s += '*';
//     }

//     for(j=5; j>i; j--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//setengah segitiga terbalik
// var s = '';
// for(i=1; i<=5; i++){
//     for(j=1; j<=i; j++){
//         s += ' ';
//     }
//     for (k=5; k>=i; k--){
//         s += '#';
//     }
//     s += '\n';
// }
// console.log (s);
//tutup

//segitiga sama kaki
// var s = ''; // variabel
// for(i=1; i<=5; i++){ //buat baris
//     for(j=5; j>=i; j--){ //untuk padding
//         s += ' ';
//     }
//     for(k=2; k<=i; k++){ //separuh kiri
//         s += '*';
//     }
//     for(l=1; l<=i; l++){ //separuh kanan
//         s +='*';
//     }
//     s += '\n';
// }
// console.log(s);


//Layang Layang
// var a = '';
// var b = '';
// //membuat bagian atas
// for(i=10; i>=0; i--){
//     for(j=0; j<=i; j++){
//         a += ' ';
//     }
//     for(k=10; k>=i; k--){
//         a += '#';
//     }
//     for(k=9; k>=i; k--){
//         a += '#';
//     }
//     a += '\n';
// }
// //bagian bawah
// for(i=0; i<=10; i++){
//     for(j=0; j<=i; j++){
//         b += ' ';
//     }
//     for(k=10; k>=i; k--){
//         b += '#';
//     }
//     for(k=9; k>=i; k--){
//         b += '#';
//     }
//     b += '\n';
// }

// console.log(`${a}`+`${b}`);

// var angka = prompt('masukkan angka');
// var p = '';
//     if(angka % 2 == 0){
//         console.log('bilangan bulat');
//     }else{
//         console.log('bilangan ganjil')
//     }

// var ganjil = 1;
// var b ='';

// for (var i=1; i<=5; i++){ // 5 kali menurun
//     if (i % 2 == 1){
//         for(ganjil; ganjil<=1; ganjil++){//baris ganjil
//             for(j=1; j<=5; j++){
//                 b += '# '
//             }
//             b += '\n'
//         }
//         console.log(b);
//     }else{
//         var s ='';
//             for(k=1; k<=5; k++){
//                 s += ' #'
//             }
//         console.log(s);
//     }
// }

// // game suit
tanya = true;
while (tanya) {
//menangkap pilihan player
var p = prompt('Tentukan pilihan kamu \n gajah \n semut \n orang');

//random pilihan komputer
//math random
var comp = Math.random();
if(comp < 0.35){
    comp = 'gajah';
}else if(comp < 0.70 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}

//rules
var hasil ='';
if(p == comp){
    hasil = 'SERI';
}else if (p == 'gajah'){
    if(comp == 'orang'){
        hasil = 'Menang';
    }else{
        hasil = 'Kalah';
    }
    hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
}else if (p == 'orang'){
    if (comp =='semut'){
        hasil = 'Menang';
    }else{
        hasil = 'Kalah';
    }
}else if(p == 'semut'){
    if(comp == 'gajah'){
        hasil = 'Menang';
    }else{
        hasil = 'Kalah';
    }
}

// tampilkan hasil
alert (`Kamu memilih ${p} komputer memilih ${comp}\n ${hasil}`);
tanya = confirm('lagi');
}
alert ('Terimakasih sudah bermain');

//tebak tebakan angka noted(masih ada bug)
// k = 0;
// while (k < 3){
//     ks = 0;
// var t = prompt(`masukkan angka 1 - 10 \nkesempatan kamu ${k} kali`); // masukkan angka
// var angka = Math.floor(Math.random() * 10) + 1 //membuat angka menjadi bulat kebawah dan memiliki nilai 1-10
// console.log(angka);
// // console.log (angka);
//     while (ks < 3 && t !== angka){
//         if(t == angka){
//             alert('tebakan kamu benar');
//         }else{
//             console.log('Tebakan kamu salah');
//         }
//         ks++;
//     }
//     k++;
//     tanya = confirm('Lagi?');
// } alert ('Terimakasih sudah berjuang')


// game tebak angka versi fixed (dibantu chat gpt dan dimodifikasi sesuai pemahaman)
// let k = 0;

// while (k < 3) {
//     let kesempatan = 3; // Mengubah kesempatan dari 3 menjadi 3, 2, 1
//     let tanya;

//     do {
//         let t = parseInt(prompt(`Masukkan angka 1 - 10 \nKesempatan kamu ${kesempatan} kali`));
//         let angka = Math.floor(Math.random() * 10) + 1;

//         console.log(angka);

//         if (t === angka) {
//             alert('Tebakan kamu benar');
//             kesempatan = 0; // Set kesempatan ke 0 untuk keluar dari loop
//         } else {
//             console.log('Tebakan kamu salah');
//             kesempatan--;

//             if (kesempatan === 0) {
//                 alert('Kamu telah kehabisan kesempatan.');
//             } else {
//                 tanya = confirm('Coba lagi?');
//             }
//         }
//     } while (kesempatan > 0 && tanya);

//     k++;

//     if (k < 3) {
//         tanya = confirm('Lagi?');
//         if (!tanya) {
//             break; // Keluar dari loop jika tidak ingin mencoba lagi
//         }
//     }
// }

// alert('Terimakasih sudah berjuang');
//tutup

// iseng pemahaman
// const lahir = 2001;
// let tahun = 2023;
// var umur = tahun - lahir;
// console.log(`saya lahir tahun ${lahir} karena sekarang tahun ${tahun} maka umur saya ${umur}`);
//tutup


//Function materi
//hitung kubus

// function totalVolumeKubus(a,b){
//     return a*a*a + b*b*b;
// }
// alert (totalVolumeKubus(8,3));
// tutup hitung kubus

//argument dan parameter
// function hitung(a,b){ //(a,b) adalah sebuah argument
//     return a+b;
// }
// console.log (hitung(5,10)); //(5,10) adalah parameter yang rumusnya sudah di buat dalam function
//tutup

//arguments
// function hitung(){
//     let hasil = 0;
//     for(i=0; i<arguments.length; i++){
//         hasil += arguments [i];
//     }
//     return hasil;
// }

// let coba = hitung(1,2,3,4,5,6);
// console.log(coba);
//tutup arguments

// function factorial(n){
//     if (n===0) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// function cetakAngka(n){
//     if (n === 0) return;

//     console.log(n);
//     cetakAngka(n - 1)
// }


//Array

//splice
//splice (indexawal, mauDihapusBerapa.elemenBaru1, elemenBaru2)
// let arr = ['Gewa','Uti','Darna'];
// arr.splice (1,1,'amar','farhan');
// console.log (arr.join(' - '));


//slice
//slice menghasilkan array baru
//slice [awal,akhir]
// let arr = ['Gewa','Uti','Darna','amar','farhan'];
// let arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));


//forEach
//forEach berfungsi seperti for namun lebih sederhana
//tidak mengembalikan nilai array
// let angka = [1,2,3,4,5,6,7,8,];
// let nama = ['Gewa','Uti','Darna','amar','farhan'];

// nama.forEach(function(e,i){
//     console.log(`Mahasiswa peringkat ke ${i+1} adalah ${e}`);
// })


//map
//sama seperti forEach namun lebih baik
// //mengembalikan nilai array

// let angka = [2,3,4,1,6,8,9];
// let angka2 = angka.map(function(e){
//     return e * 2;
// })

// console.log(angka2.join(' - '));

//sort
// //mengurutkan isi arraynya
// let angka = [2,3,4,1,6,8,9,10];
// angka.sort (function(a,b){
//     return a - b;
// });
// console.log (angka.join(' - '));




// //Latihan penumpang angkot
// let penumpang = [];
// let tambahPenumpang = function (namaPenumpang, penumpang){
//     // jika angkot kosong
//     if (penumpang.length == 0){
//         // tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array dan keluar dari function *return
//         return penumpang;
//     }
//     // else
//     else{
//         // telusuri seluruh kursi penumpang dari awal
//         for (i=0; i<=penumpang.length; i++){
//             //jika ada kursi kosong
//             if(penumpang[i] == undefined){
//                 // tambah penumpang di kursi tersebut
//                 penumpang[i] = namaPenumpang;
//                 //kembalikan isi array & keluar dari function
//                 return penumpang;
//              } //jika sudah ada nama yang sama
//             if(namaPenumpang === penumpang[i]){
//             //     //tampilkan pesan kesalahannya *penumpang sudah ada di dalam angkot
//             console.log ('nama penumpang sudah ada di alam angkot');
//             //     //kembalikan isi array dan keluar dari function
//             return penumpang;
//             }else if (penumpang.length == i){//jika seluruh kursi terisi
//                 //tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang)
//                 //kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//         }
//     }
// }

// let hapusPenumpang = function (namaPenumpang,penumpang){
//     //jika angkot kosong
//     if(penumpang.length == 0){
//         //tampilkan pesan bahwa angkot kosong
//         console.log('angkot kosong');
//     }else{//else
//         //telusuri seluruh kursi dari awal
//         for (i=0; i < penumpang.length; i++){
//             if(penumpang[i] == namaPenumpang ){//jika nama penumpang sesuai
//             //hapus penumpang dengan mengubah namanya menjadi undified
//             penumpang[i] = undefined;
//             //kembalikan isi array & keluar dari function
//             return penumpang;
//             }else if( i == penumpang.length -1){
//                 console.log(`${namaPenumpang} tidak ada di dalam angkot`)
//                 return penumpang;
//             }
//         }
//     }
// }


//Object


//Object literal
let mhs = {
    nama : 'muqi gewa',
    umur : 22,
    ip : [3.15, 3.78, 3.54],
    alamat : {
        kota : 'Tembung',
        kabupaten : 'Deli Serdang',
        provinsi : 'Sumatera Utara'
    }
};

// object - Function declaration
function objectMhs (nama,nim,jk){
    let maha = {};
    maha.nama = nama;
    maha.nim = nim;
    maha.jk = jk;
    return maha;
}

let mhs2 = objectMhs('gewa','2022020584','laki-laki');

//object function constructor
class Mahasiswa {
    constructor(nama, nim, jk) {
        this.nama = nama;
        this.nim = nim;
        this.jk = jk;
    }
}

let mhs3 = new Mahasiswa('uti','2022020593','Wanita');
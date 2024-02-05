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




//studi kasus 3
// pengelola angkot
class Angkot {
    constructor(sopir, kas, penumpang, trayek) {
        this.sopir = sopir;
        this.kas = kas; 
        this.penumpang = penumpang; 
        this.trayek = trayek;

        this.penumpangNaik = function(namaPenumpang){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }


        this.penumpangTurun = function(namaPenumpang,bayar){
            //mengecek apakah ada penumpang di dalam angkot
            if(penumpang.length === 0){
                console.log('angkot kosong');
                return false;

            }
            for(let i=0; i < this.penumpang.length; i++){
                if(this.penumpang[i] === namaPenumpang){
                    penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
        }
        
    }
}

let penumpang1 = new Angkot('gewa',0,[],['tembung', 'medan']);


// - sopir
// - Trayek 
// - kas 
// - penumpang 
//     - penumpang naik
//     - penumpang turun 

// class Mahasiswa {
//     constructor(nama, nim, jk) {
//         this.nama = nama;
//         this.nim = nim;
//         this.jk = jk;
//     }
// }

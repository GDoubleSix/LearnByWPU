// //DOM SELECTION
// //getElementById => mengembalikan nilai berdasarkan id => element

// const judul=document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.textAlign ='center';
// judul.style.backgroundColor ="#ccc";
// judul.innerHTML="Muqi Gewa";

// //getElementByTagName()
// // HTML collection => harus menagmbil nilai arraynya []
// const p = document.getElementsByTagName('p');
// for( i=0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
//     p[i].style.fontSize = '15px';
// }

// //getElementByClassName() => HTMLColection =>harus menagmbil nilai arraynya []
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML='Ini diubah dari Java Script';

// //querySelector()
// const p4 = document.querySelector('section#b p');
// p4.style.fontSize='30px';

// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.style.backgroundColor='orange';

// //querySelectorAll() => nodelist
// //memilih semua elemen yang ada di halaman
// //harus menggunakan index array[]
// const section=document.querySelectorAll('section');
// section[1].style.backgroundColor='grey';

//mengubah node root
//salah satu cara agar ebih efektif lagi memilih dom
// const sectionB=document.getElementById('b');
// const p4=sectionB.querySelector('p');
// p4.style.backgroundColor='orange';

//end selection


//DOM MANIPULATION

// 1.Manipulasi Elemen
//  -untuk menangkap judul halaman, mengambil paragraf dll
//      * Methode
//          - element.innerHtml
//          - element.style.<property> => mengubah style pada elemen
//          - element.setAttribute() => memanipulasi attribute pada elemen
//          - element.classList => memanipulasi class
//          - etc

// 1. Manipulasi Elemen
//element.innerHTMl => sudah ada contohnya di atas
//element.style => sudah ada contohnya di atas

//element.classList => memanipulasi class
//  -element.classList.add() = > menambahkan class
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// //
// //  -element.classList.remove() => menghapus class
// p2.classList.remove('label');
// //
// //  -element.classList.toggle() => jika tidak ada nama classnya akan ditambahkan namun jika ada akan dihapus
// p2.classList.toggle('label'); //true => dibuatkan classnya karena class baru di remove
// //
// //  -element.classList.item() => untuk mengetahui nama class pada sebuah elemen
// //      #jika kondisi di dalam element ada 3 class maka mencarinya menggunakan struktur data array dimulai dari 0
// //
// //  -element.classList.contains() => 
// p2.classList.item('label') //true => class dengan nama label ada
// //  -element.classList.replace() => mengganti nama class
// p2.classList.replace('label', 'container') // class label berubah menjadi container

// 2. Manipulasi Node
//  - Menyisipkan elemen baru pada halaman, menghilangkan sebuah elemen
//      -document.createElement() => membuat element
//      -document.createTextNode() => menuliskan apa di dalam element yang dibuat
//      -node.appendChild() => menyimpan di akhir element parent
//      -node.insertBefore() => menyinpan di tempan yang kita mau noted(perhatikan insertBefore)
//      -parentNode.removeChild()
//      -parentNode.replaceChild()
//      -etc

//contoh
// buat elemen baru
// const pBaru = document.createElement('p');
// const textPBaru = document.createTextNode('paragraph baru');

// simpan tulisan kedalam paragraf
// pBaru.appendChild(textPBaru);

// Simpan pBaru di akhir sectionA
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);



//buat element baru
// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Item baru');
//
//simpan tulisan kedapam li
// liBaru.appendChild(textLiBaru);

//simpan liBaru sebelum li ke 2
// const ulLi = document.querySelector('section#b ul');
// const li2 = ulLi.querySelector('li:nth-child(2)');
// ulLi.insertBefore(liBaru, li2);
//

//removeChild() => menghapus element
// const link = sectionA.getElementsByTagName('a')[0];
// sectionA.removeChild(link);
//

//replaceChild()
// const sectionB = document.getElementById('b'); //menangkap parent 
// const p4 = sectionB.querySelector('p') // menangkap p4 yang berada di sectionB

// const h2Baru = document.createElement('h2'); //membuat elemt h2 baru
// const textH2 = document.createTextNode('Judul Baru'); // isi dari element h2 yang dibuat

// h2Baru.appendChild(textH2);//menyimpan textH2 kedalam h2Baru

// sectionB.replaceChild(h2Baru,p4); //mengubah element p pada sectionB menjadi h2Baru yang sudah di append dengan isi textH2
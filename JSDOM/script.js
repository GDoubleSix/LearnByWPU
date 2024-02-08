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
const sectionB=document.getElementById('b');
const p4=sectionB.querySelector('p');
p4.style.backgroundColor='orange';

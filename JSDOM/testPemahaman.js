//TEST PEMAHAMAN
// 1. ubah border manjadi warna RGB
//      - h1 & container => red *done
//      - section => green * done
//      - p dan li => blue * done
// 2. manipulasi beberapa elemen
//      - ubah hello world menjadi judul besar dan berada di tengah *done
//      - tambah paragraph baru di atas paragraph 3 *done
//      - ubah paragraph 4 dengan judul baru *done
//      - judul baru berada di tengah *done
//      - tambahkan item 4 dan i
//      - tem baru di atas item 4 dengan cara yang berbeda

const h1 = document.getElementsByTagName('h1')[0]; //ambil tag h1 dengan nillai array [0]/pertama
h1.style.backgroundColor='red'; //merubah background color h1 menjadi merah
h1.style.textAlign='center'; // meletakkan teks h1 ke tengah

const container = document.getElementById('container'); //ambil id dengan nama container
container.style.backgroundColor ="red"; //berikan warna merah pada id container

const section = document.querySelectorAll('section'); //ambil semua elemen dengan nama section
section[0].style.backgroundColor='green'; //ubah section pertama dengan warna hijau
section[1].style.backgroundColor='green'; //ubah section kedua dengan warna hijau

const p = document.getElementsByTagName('p');//ambil element dengan tag p
for(i=0; i<p.length; i++){ // semua elemen dengan tag p (p.length)
    p[i].style.backgroundColor='blue'; //ubah elemen p dengan background berwarna biru
}

const li = document.getElementsByTagName('li'); //ambil elemen li
for(i=0; i<li.length; i++){ //semua elemen dengan tag li
    li[i].style.backgroundColor='blue'; //ubah warnanya menjadi biru
}

const pBaru = document.createElement('p'); // Membuat elemen <p> baru
const textPBaru = document.createTextNode('paragraph baru'); // Membuat teks untuk elemen <p> baru
pBaru.appendChild(textPBaru); // Menambahkan teks ke dalam elemen <p> baru

const sectionA = document.getElementById('a'); // Mendapatkan elemen <section> dengan ID 'a'
const parBaru = sectionA.querySelector('p:nth-child(4)'); // Mendapatkan elemen <p> yang akan menjadi referensi
sectionA.insertBefore(pBaru, parBaru); // Menyisipkan elemen <p> baru sebelum elemen referensi


const h2ForP4Baru = document.createElement('h2');//buat element baru
const textH2 = document.createTextNode('Judul Baru'); // membuat teks untuk elemen <p> baru
h2ForP4Baru.appendChild(textH2); //menambahkan teks ke dalaman lemen <p> baru

const sectionB =document.getElementById('b'); //mengambil parent node section b dan mempersempit area p
const p4 = sectionB.querySelector('p'); //mengambil elemen p dari section b

sectionB.replaceChild(h2ForP4Baru,p4) //mengubah teks yang ada di p4 menjadi h2ForP4Baru yang telah di append dengan textH2
sectionB.style.textAlign='center'; // mengubah elemen section b menjadi center


//menambahkan item 4 dan item baru di atas item 4

const li4 = document.createElement('li'); //membuat elemen li baru
const textLi4 = document.createTextNode('Item 4'); //membuat text 'Item 4' pada li baru
li4.appendChild(textLi4);

const item4 = sectionB.querySelector('ul'); //mengambil child li dari section b
item4.appendChild(li4);

// tutup nambah item 4

// tem baru di atas item 4 
const li5 = document.createElement('li');
const textLi5 = document.createTextNode('Item Baru');
li5.appendChild(textLi5);
//
const ulLi = document.querySelector('section#b ul');
const itemBaru = ulLi.querySelector('li:nth-child(4)');
ulLi.insertBefore(li5,itemBaru);


const button = document.querySelector('button#btn');
button.addEventListener('click',function() {
    const bgColor = document.getElementsByTagName('body')[0];
    bgColor.classList.toggle('biru-muda');
});

////////

const btnAcakWarna = document.createElement('button'); //buat element button baru
const txtAcakWarna = document.createTextNode('Acak Warna'); // tambahkan teks Acak Warna kedalam button

btnAcakWarna.appendChild(txtAcakWarna); // gabungkan txtAcakWarna kedalam btnAcakWarna
btnAcakWarna.setAttribute('type','button'); //Tambahkan type="button" pada btnAcakWarna
button.after(btnAcakWarna); //letakkan btnAcakWarna setelah button di html

btnAcakWarna.addEventListener('click', function() {
    const r = Math.floor(Math.random()*255 +1); // buat element matematika acak dengan maksimal 255 dan minimal 1, dan genapkan kebawah menggunakan math.floor
    const g = Math.floor(Math.random()*255 +1); 
    const b = Math.floor(Math.random()*255 +1); 

    const bgColor = document.getElementsByTagName('body')[0]; //dapatkan tag body untuk bgColor
    bgColor.style.backgroundColor=`rgb(${r},${g},${b})`; // ubah bgColor secara acak dengan nilai math.random
});
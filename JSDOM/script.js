//DOM SELECTION
//getElementById => mengembalikan nilai berdasarkan id => element

const judul=document.getElementById('judul');
judul.style.color = 'red';
judul.style.textAlign ='center';
judul.style.backgroundColor ="#ccc";
judul.innerHTML="Muqi Gewa";

//getElementByTagName()
// HTML collection
const p = document.getElementsByTagName('p');
for( i=0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
    p[i].style.fontSize = '15px';
}

//getElementByClassName() => HTMLColection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML='Ini diubah dari Java Script';


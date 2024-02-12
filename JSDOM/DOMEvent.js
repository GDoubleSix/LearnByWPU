//Definisi Event
//Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM
//...Kejadiannya bisa dilakukan oleh user   / API


//addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('enter',function() {
    if(confirm() == true){
        const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');

    const liBaru = document.createTextNode('Item Baru');
    li.appendChild(liBaru); //tambahkan liBaru pada element li
    ul.appendChild(li); //tambahkan li kedalam ul
    }
});
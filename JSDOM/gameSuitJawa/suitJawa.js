function pilihanComputer(){
    const comp = Math.random();
    if(comp < 0.35) return  'gajah';
    if(comp < 0.70 && comp < 0.67) return 'orang';
        return 'semut';
};

function getHasil(comp,user){
    if(user == comp) return 'SERI';
    if(user == 'gajah') return (comp == 'orang') ? 'Menang !' : 'KALAH !';
    if(user == 'orang') return (comp == 'gajah') ? 'KALAH !' : 'Menang !';
    if(user == 'semut') return (comp == 'orang') ? 'KALAH !' : 'Menang !';
};

function putar(){
    const imgComp = document.querySelector('.img-computer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;  
            return;
        }

        imgComp.setAttribute('src','img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    },100);
}

const choices = document.querySelectorAll('.gajah, .orang, .semut');
choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const pilihanPlayer = choice.className; // Mendapatkan kelas dari elemen yang diklik
        const pilihanComp = pilihanComputer();
        const hasil = getHasil(pilihanComp, pilihanPlayer);

        putar();
        
        setTimeout(function(){
            const imgComp = document.querySelector('.img-computer');
            imgComp.setAttribute('src','img/' + pilihanComp + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        },1000);

        const imgComp = document.querySelector('.img-computer');
        imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    });
});
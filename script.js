const boxTrocaImg = document.querySelectorAll('.boxTrocaImg');
const fotoTroca = document.querySelectorAll('.fotoTroca');
const fotoHover = ['img/fotos/bike-1.jpg',
    'img/fotos/bike-4.jpg'];
var imgSrc = [];
fotoTroca.forEach(elemento => {
    imgSrc.push(elemento.getAttribute('src'))
});
const transition = 50;
document.querySelectorAll('.fotoTroca').forEach(elemento => {
    elemento.style.transition = transition * 2 + 'ms';
})

boxTrocaImg.forEach((elemento, i) => {
    // MOUSE OVER
    elemento.addEventListener('mouseover', function () {
        fotoTroca[i].classList.add('hidden');
        setTimeout(function () {
            fotoTroca[i].setAttribute('src', fotoHover[i]);
            fotoTroca[i].classList.remove('hidden');
        },
            transition
        )
    });
    // MOUSE OUT
    elemento.addEventListener('mouseout', function () {
        fotoTroca[i].classList.add('hidden');
        setTimeout(function () {
            fotoTroca[i].setAttribute('src', imgSrc[i]);
            fotoTroca[i].classList.remove('hidden');
        },
            transition
        )
    });
});

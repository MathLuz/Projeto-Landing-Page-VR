const boxTrocaImg = document.querySelectorAll('.boxTrocaImg');
const fotoTroca = document.querySelectorAll('.fotoTroca');
const fotoHover = ['img/fotos/bike-1.jpg',
                'img/fotos/bike-4.jpg'];
var imgSrc = [];
fotoTroca.forEach(element => {
    imgSrc.push(element.getAttribute('src'))
});
const transition = 10;
document.querySelector('.fotoTroca').style.transition = transition*2+'ms';

boxTrocaImg.forEach((elemento, i) => {
    elemento.addEventListener('mouseover', function () {
        fotoTroca[i].classList.add('hidden');
        setTimeout(function(){
            fotoTroca[i].setAttribute('src', fotoHover[i]);
            fotoTroca[i].classList.remove('hidden');
        },
            transition
        )
    });
    elemento.addEventListener('mouseout', function () {
        fotoTroca[i].classList.add('hidden');
        setTimeout( function(){
            fotoTroca[i].setAttribute('src', imgSrc[i]);
            fotoTroca[i].classList.remove('hidden');
        },
            transition
        )
    });
});

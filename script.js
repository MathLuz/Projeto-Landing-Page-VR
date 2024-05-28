const boxTrocaImg = document.querySelectorAll('.boxTrocaImg');
const fotoTroca = document.querySelectorAll('.fotoTroca');

var imgSrc = [];
fotoTroca.forEach(element => {
    imgSrc.push(element.getAttribute('src'))
});

const fotoHover = ['img/fotos/bike-1.jpg',
                    'img/fotos/bike-4.jpg'];

boxTrocaImg.forEach((elemento,i)=> {
    elemento.addEventListener('mouseover',function(){
        fotoTroca[i].setAttribute('src', fotoHover[i]);

    });
    elemento.addEventListener('mouseout', function() {
        fotoTroca[i].setAttribute('src', imgSrc[i]);
    });
});
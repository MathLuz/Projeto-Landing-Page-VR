const imgHtml = document.querySelectorAll('section div img');

const imgOri = ['img/fotos/IMG_7200-Aprimorado-NR.jpg',
                'img/fotos/IMG_7200-Aprimorado-NR.jpg',
                'img/fotos/IMG_7200-Aprimorado-NR.jpg',
                'img/fotos/IMG_7200-Aprimorado-NR.jpg'
            ];
const imgNew = ['img/fotos/IMG_7162-Editar.jpg',
                'img/fotos/IMG_7162-Editar.jpg',
                'img/fotos/IMG_7162-Editar.jpg',
                'img/fotos/IMG_7162-Editar.jpg'
            ];
var mudar = true;

imgHtml.forEach((img, i) => {
    img.setAttribute('src',imgOri[i]);
});

var mudar = true;
var imgTroca;

setInterval(mudarImagem, 5000);
function mudarImagem(){
    if(mudar){
        mudar = false;
        imgTroca = imgOri;
    } else {
        mudar = true;
        imgTroca = imgNew;
    }

    imgHtml.forEach((img, i) => {
        img.setAttribute('src',imgTroca[i]);
        img.setAttribute
    });
}

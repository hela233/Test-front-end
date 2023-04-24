let img_slider = document.getElementsByClassName('img_slider');

let step = 0;

let nbr_img = img_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr_img ; i++) {
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    step++;
    if(step >= nbr_img) {
        step = 0;
    }
    enleverActiveImages();
    img_slider[step].classList.add('active');
})

precedent.addEventListener('click', function() {
    step--;
    if(step < 0) {
        step = nbr_img - 1;
    }
    enleverActiveImages();
    img_slider[step].classList.add('active');
})

setInterval(function() {
    step++;
    if(step >= nbr_img) {
        step = 0;
    }
    enleverActiveImages();
    img_slider[step].classList.add('active');
}, 3000)


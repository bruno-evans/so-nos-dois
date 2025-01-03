let imgActive = 1;
let quantImg = 3;

//window.onload(setInterval(startCarousel, 9000));

function startCarousel() {
    document.getElementById(`foto${imgActive}`).classList.toggle('active');
    document.querySelectorAll('ul li')[imgActive-1].classList.toggle('active');
    imgActive < quantImg ? imgActive++ : imgActive = 1;
    document.getElementById(`foto${imgActive}`).classList.toggle('active');
    document.querySelectorAll('ul li')[imgActive-1].classList.toggle('active');
}
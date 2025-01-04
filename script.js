let imgActive = 1;
let quantImg = 5;
let initDate = new Date(2023, 7, 5, 10, 30);

window.onload(allFunctions());

function allFunctions() {
    heartsFall();
    setInterval(calculateTime, 1000);
    setInterval(startCarousel, 9000);
}

function startCarousel() {
    document.getElementById(`foto${imgActive}`).classList.toggle('active');
    document.querySelectorAll('ul li')[imgActive-1].classList.toggle('active');
    imgActive < quantImg ? imgActive++ : imgActive = 1;
    document.getElementById(`foto${imgActive}`).classList.toggle('active');
    document.querySelectorAll('ul li')[imgActive-1].classList.toggle('active');
}

function calculateTime() {
    let nowDate = new Date();
    
    let sec = 0, min = 0, hour = 0, day = 0, month = 0, year = 0;

    sec += nowDate.getSeconds() - initDate.getSeconds();
    if(sec < 0) {
        sec += 60;
        min--;
    }
    
    min += nowDate.getMinutes() - initDate.getMinutes();
    if(min < 0) {
        min += 60;
        hour--;
    }

    hour += nowDate.getHours() - initDate.getHours();
    if(hour < 0) {
        hour += 24;
        day--;
    }

    day += nowDate.getDate() - initDate.getDate();
    if(day < 0) {
        day += nowDate.getMonth() == 1 ? ((new Date(nowDate.getFullYear(), nowDate.getMonth(), 1)) - (new Date(nowDate.getFullYear()-1, 12, 1))) / 1000 / 60 / 60 / 24 : ((new Date(nowDate.getFullYear(), nowDate.getMonth(), 1)) - (new Date(nowDate.getFullYear(), nowDate.getMonth()-1, 1))) / 1000 / 60 / 60 / 24;
        month--;
    }

    month += nowDate.getMonth() - initDate.getMonth();
    if(month < 0) {
        month += 12
        year--;
    }

    year += nowDate.getFullYear() - initDate.getFullYear();
    
    document.getElementById('time').innerHTML = `~ ${year} ano, ${month} meses, ${day} dias<br>${hour} horas, ${min} minutos<br>e ${sec} segundos<br><span id="love">&#x1F495;</span>`;
}

function heartsFall(numHearts = 100) {
    let region = document.querySelector('body');

    document.getElementById('heartsFalling').classList.add('disable');

    for(i=0; i<numHearts; i++) {
        let heart = document.createElement('span')
        heart.innerHTML = '&#x1F497;';
        heart.classList.add('heart');
        heart.style.transform = `translateX(calc(-50% - 200px + ${Math.floor(Math.random() * 400)}px))`;
        heart.style.animation = `${Math.random()*3 + 1}s linear fall`;
        heart.style.animationDelay = `${Math.random()*2 +1}s`;
        heart.style.fontSize = `${Math.random() * 2 + 0.5}em`
        region.appendChild(heart);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    setTimeout(() => {
        let allHearts = document.querySelectorAll('.heart');
        allHearts.forEach((heart) => {
            heart.remove();
        })

        document.getElementById('heartsFalling').classList.remove('disable');
    }, 7000)
}
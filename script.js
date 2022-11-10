const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
const back = document.querySelector('.main');
const second = document.getElementsByClassName('secondText');
const third = document.getElementsByClassName('thirdText');
let pics = document.getElementById('image');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

function setActive(i){
    for (slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active')
    for (dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for (let j = 0; j<dots.length; j++) {
    dots[j].addEventListener('click', function(){
        setActive(j)
    })
}

btn1.addEventListener('click', () => {
    pics.src = 'images/carnelian.jpg';
    back.classList.remove('secondText', 'thirdText')
})

btn2.addEventListener('click', () => {
    pics.src = 'images/manifest.png';
    back.classList.remove('thirdText')
    back.classList.add('secondText')
})

btn3.addEventListener('click', () => {
    pics.src = 'images/tarot.png';
    back.classList.remove('secondText')
    back.classList.add('thirdText')
})

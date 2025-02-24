'use strict';
let number = document.querySelectorAll('.number__items');
let date = document.querySelector('.date');
let today = new Date();
let year = today.getFullYear();
date.innerText = year;

number.forEach((num) => {
    let numberTop = num.getBoundingClientRect().top;

    let start = +num.innerHTML;

    let end = +num.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
            this.removeEventListener('scroll', onScroll);
            let interval = setInterval(function () {
                num.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 2);
        }
    });
});

const offset = 500;
const scrollTop = document.querySelector('.scrollTop');
const getTop = () => window.pageXOffset || document.documentElement.scrollTop;
console.log(getTop());

window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        scrollTop.classList.add('--active');
    } else {
        scrollTop.classList.remove('--active');
    }
});

let timeOut;

scrollTop.onclick = () => {
    goUp();
};

function goUp() {
    let top = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
    );
    if (top > 0) {
        window.scrollBy(0, -200);
        timeOut = setTimeout('goUp()', 20);
    } else clearInterval(timeOut);
}
// function goUp() {
//     let top = Math.max(
//         document.body.scrollTop,
//         document.documentElement.scrollTop
//     );
//     if (top > 0) {
//         window.scrollBy(0, -200);
//         timeOut = setTimeout('goUp()', 20);
//     } else clearInterval(timeOut);
// }

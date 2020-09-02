import '../styles/index.scss'
// import '../styles/index.sass'
// import '../styles/index.less'


let el = document.querySelector('.toggleClass');
document.addEventListener('scroll', toggleClassOnScroll.bind(el, 1));

function toggleClassOnScroll(pxAmount, e) {
    let scrollTop = window.scrollY;
console.log(scrollTop)
    if(scrollTop > 0) {
        this.classList.add('toggleClass--active');
    } else {
        this.classList.remove('toggleClass--active');
    }
}

import decorSrc from '../img/decor_el.svg'
const decor = document.querySelector('.decor')
for (let i=0; i<30; i++) {
    const img = document.createElement('img');
    img.setAttribute('src', decorSrc);
    img.classList.add('decor-item');
    decor.appendChild(img);
}
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
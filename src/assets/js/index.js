import '../styles/index.scss'
// import '../styles/index.sass'
// import '../styles/index.less'



let el = document.querySelector('.toggleClass');


window.addEventListener('scroll', toggleClassOnScroll.bind(el, 1));

function toggleClassOnScroll(pxAmount) {
    let scrollTop = document.body.scrollTop;

    if(scrollTop < pxAmount) {
        this.classList.add('toggleClass--active');
        console.log(el)
    } else {
        this.classList.remove('toggleClass--active');

    }
}
import '../styles/index.scss'
// import '../styles/index.sass'
// import '../styles/index.less'


let el = document.querySelector('.toggleClass');
document.addEventListener('scroll', toggleClassOnScroll.bind(el, 1));

function toggleClassOnScroll(pxAmount, e) {
    let scrollTop = window.scrollY;
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

function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}

function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

async function sendEmail(subject, message) {
    const url = 'https://x0usjw1m3c.execute-api.eu-west-2.amazonaws.com/Prod/send';
    const toEmails = ['moskrc@gmail.com', 'sprashivaesh@yandex.ru', 'goldliliya@mail.ru']
    const data = {"subject": subject, "message": message, "toEmails": toEmails};
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
        console.log(error)
        alert('ошибка')
    }
}

const feedback_form = document.querySelector('.form-feedback');


//  this is normalno
const name = feedback_form.elements[0];
const email = feedback_form.elements[1];
const phone = feedback_form.elements[2];
const message = feedback_form.elements[3];



const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email,message: 'Email is required'}
];

feedback_form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // check required fields
    let valid = true;

    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });

    // validate email
    if (valid) {
        valid = validateEmail(email);
    }

    // stop submitting the form if the data is invalid
    if (valid) {
        const message_to_send = `Сделайте мне уже что нибудь. Меня зовут: ${name.value}. Мой телефон: ${phone.value}. А электронная почта: ${email.value}. Вот мой сообщение вам: ${message.value}`;
        sendEmail('Заказ с сайта', message_to_send )
    } else {
        alert('Fff')
    }    
});


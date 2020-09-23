import "../styles/index.scss";
import './headerMasking'

let el = document.querySelector(".toggleClass");
document.addEventListener("scroll", toggleClassOnScroll.bind(el, 1));

function toggleClassOnScroll(pxAmount, e) {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    this.classList.add("toggleClass--active");
  } else {
    this.classList.remove("toggleClass--active");
  }
}

import decorSrc from "../img/decor_el.svg";
const decor = document.querySelector(".decor");
for (let i = 0; i < 30; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", decorSrc);
  img.classList.add("decor-item");
  decor.appendChild(img);
}

// feedback form

const feedback_form = document.querySelector(".form-feedback");
const success_msg = document.querySelector(".success-msg");

function error(input, message) {
  input.className = "form__item error";
  // show the error message
  const error = input.nextElementSibling;
  error.innerText = message;
  return false;
}

function success(input) {
  input.className = "form__item success";
  // hide the error message
  const error = input.nextElementSibling;
  error.innerText = "";
  return true;
}

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, "Неверный адрес электронной почты");
}

async function sendEmail(sbj, msg) {
  const url =
    "https://x0usjw1m3c.execute-api.eu-west-2.amazonaws.com/Prod/send";
  const toEmails = [
    "moskrc@gmail.com",
    "sprashivaesh@yandex.ru",
    "goldliliya@mail.ru",
    "deluverance@mail.ru"
  ];
  const data = { subject: sbj, message: msg, toEmails: toEmails };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    feedback_form.reset();

    // ya ne dizayner/frontender i css ne videl nikogda
    // eto ne rabotaet, ya zadolbalsya, ya backender, otstn'te ot menya
    feedback_form.style.display = "none";
    success_msg.style.display = "block";
    success_msg.style.opacity = 1;
  
    return response
  } catch (err) {
    console.log(err);
  }
}

//  this is normalno
const name = feedback_form.elements[0];
const email = feedback_form.elements[1];
const phone = feedback_form.elements[2];
const message = feedback_form.elements[3];

feedback_form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateEmail(email)) {
    const message_to_send = `Имя: ${name.value}\nТелефон: ${phone.value}\nПочта: ${email.value}\nСообщение: \n${message.value}\n`;
    sendEmail("Заказ с сайта", message_to_send);
  }
});

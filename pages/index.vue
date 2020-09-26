<template>
  <main class="content">
    <section class="main">
      <div class="wrapper">
        <div class="main__wrapper margin-left">
          <h1 class="main__title">
            Создание сайтов и приложений
          </h1>
          <h3 class="main__subtitle">Дизайн, разработка и продвижение</h3>
          <div class="main__btn">
            <nuxt-link :to="{path: '/', hash:'#order'}" class="btn">
              <span>заказать</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section about" id="about">
      <div class="wrapper">
        <div class="about__wrapper">
          <h2 class="section__title about__title">
            кто мы
          </h2>
          <p class="about__descript margin-left margin-right">
            GARAЖ — веб-студия: помогаем людям и организациям, которым нужен сайт, приложение или сервис. Нарисуем,
            сверстаем, запрограммируем и продвинем любую фигню за немного деньжат или еду
          </p>
          <div class="about__btn">
            <nuxt-link to="/portfolio" class="btn margin-btn">
              <span>посмотреть</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section services">
      <div class="wrapper">
        <div class="services__wrapper">
          <div class="services__info">
            <div class="services__info_top">
              <h2 class="section__title services__info_title ">
                Чем мы поможем
              </h2>
              <p class="services__info_descript margin-left margin-right margin-top">
                С Божьей помощью что-нибудь сделаем. Это неточно, долго, плохо и всем будет стыдно. Но мы
                постараемся!
              </p>
            </div>
            <div class="services__info_btn margin-left ">
              <nuxt-link :to="{path: '/', hash:'#order'}" class="btn btn-show">
                <span>заказать</span>
              </nuxt-link>
            </div>
          </div>
          <div class="services__cards margin-left margin-right">
            <div class="services-card">
              <img src="../assets/img/1.svg" alt="" class="services-card__icon">
              <div class="services-card__title">сделаем сайт или приложение</div>
              <div class="services-card__descript">Платформы с графиками и инструментами для анализа финансовых
                рынков
              </div>
            </div>
            <div class="services-card">
              <img src="../assets/img/2.svg" alt="" class="services-card__icon">
              <div class="services-card__title">сервис шмервис</div>
              <div class="services-card__descript">Платформы с графиками и инструментами для анализа финансовых
                рынков.Платформы с графиками и инструментами для анализа финансовых рынков
              </div>
            </div>
            <div class="services-card">
              <img src="../assets/img/3.svg" alt="" class="services-card__icon">
              <div class="services-card__title">дизайн недизайн</div>
              <div class="services-card__descript">Платформы с графиками и инструментами для анализа финансовых
                рынков.Платформы с графиками и инструментами для анализа финансовых рынков
              </div>
            </div>
            <div class="center">
              <nuxt-link :to="{path: '/', hash:'#order'}" class="btn-hidden">
                <span>заказать</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--        <section class="section partners">-->
    <!--            <div class="wrapper">-->
    <!--                <div class="partners__wrapper">-->
    <!--                    <h2 class="section__title partners__title">-->
    <!--                        <span class="title__align-left">C кем мы</span> <span class="title__align-right">работали</span>-->
    <!--                    </h2>-->
    <!--                </div>-->
    <!--                <div class="center  carousel__wrapper">-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </section>-->
    <section class="section contact" id="order">
      <div class="wrapper">
        <div class="contact__wrapper">
          <div class="success-msg">
            <h2>Спасибо!</h2>
            <strong>Мы свяжемся с вами в течение нескольких минут!</strong>
          </div>
          <form name="form" class="form form-feedback">
            <h2 class="section__title form__title">
              свяжитесь с нами
            </h2>
            <div class="form__column">
              <div class="form__input-container">
                <input class="form__item" placeholder="Ваше имя" name="name" type="text">
                <small></small>
                <input class="form__item" required placeholder="hello@example.com" name="email" type="email">
                <small></small>
                <input class="form__item" placeholder="+7 ___ __ __" name="phone" type="tel">
                <small></small>
              </div>
              <div class="form__input-container">
                    <textarea class="form__item form__item_main-text" required placeholder="Ваше сообщение"
                              name="message"></textarea>
                <small></small>
              </div>
            </div>
            <div class="form__column form__column_margin">
              <div class="form__input-container">
              </div>
              <div class="form__input-container">
                <div class="">
                  <button class="btn btn-form" type="submit">Отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
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
      const data = {subject: sbj, message: msg, toEmails: toEmails};

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

  }
}
</script>

<style scoped>
</style>


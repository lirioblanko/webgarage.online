<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrapper">
        <div class="footer__row">
          <div class="footer__column">
            <nuxt-link to="/">
              <img src="../assets/img/logo-color.svg" alt="logo" class="logo">
            </nuxt-link>
          </div>
          <div class="footer__column">
            <span class="footer_text">Не связывайтесь с нами</span>
            <a class="footer_text text-decor" href="mailto:info@webgarage.online">info@webgarage.online</a>
            <a href="tel:+79192431320" class="text-decor">+7 919 243 13 20</a>
            <a href="http://instagram.com">
              <img src="../assets/img/instagram.svg" alt="instagram" class="media-link">
            </a>
          </div>
        </div>
        <div class="footer__row">
          <div class="footer__column">
            <p class="copyright">&copy; 2020 GARAЖ</p>
          </div>
          <div class="footer__column_hidden">
            <nav class="footer__menu">
              <a href="#about" class="footer_text link_text"><span>Кто мы</span></a>
              <nuxt-link to="/portfolio" class="footer_text link_text"><span>Что мы наделали</span></nuxt-link>
              <a href="#order" class="footer_text link_text"><span>Контакты</span></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>

</style>


<template>
  <header class="header toggleClass" ref="header">
    <div class="wrapper ">
      <div class="header__wrapper ">
        <div class="logo__wapper">
          <nuxt-link to="/">
            <img src="../assets/img/logo.svg" alt="logo" class="logo">
          </nuxt-link>
        </div>
        <div class="menu">
          <nav class="menu__wrapper">
            <nuxt-link :to="{path: '/', hash:'#about'}" class="menu__nav-link">
              <span class="link_text">Кто мы</span>
            </nuxt-link>
            <nuxt-link to="/portfolio" class="menu__nav-link" exact-active-class="active"><span class="link_text">Что мы наделали</span>
            </nuxt-link>
            <nuxt-link :to="{path: '/', hash:'#order'}" class="menu__nav-link">
              <span class="link_text">Контакты</span>
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const headerRef = this.$refs.header
    document.addEventListener("scroll", toggleClassOnScroll.bind(headerRef));

    function toggleClassOnScroll(e) {
      let scrollTop = window.scrollY;
      if (scrollTop > 0) {
        this.classList.add("toggleClass--active");
      } else {
        this.classList.remove("toggleClass--active");
      }
    }
  }
}

</script>

<style scoped>

</style>

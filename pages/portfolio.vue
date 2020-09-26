<template>
  <div>
    <div class="page">
      <div class="decor">
      </div>
      <Header/>
      <main class="content">
        <section class="main">
          <div class="wrapper">
            <div class="main__wrapper margin-left">
              <h1 class="main__title">
                Портфолио
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {Header, Footer},
  head() {
    return {
      title: 'Портфолио'
    }
  }
}
</script>

<style scoped>

</style>

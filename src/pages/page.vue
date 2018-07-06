<template>
  <div id="home">
    <Header @num="changeNum"></Header>
    <main class="container">
      <transition name="fade">
        <Home v-show="num === 0" @num="changeNum"></Home>
      </transition>
      <transition name="fade">
        <Intro v-show="num === 1"></Intro>
      </transition>
      <transition name="fade">
        <Product v-show="num === 2"></Product>
      </transition>
      <transition name="fade">
        <Technical v-show="num === 3"></Technical>
      </transition>
      <transition name="fade">
        <News v-show="num === 4"></News>
      </transition>
      <transition name="fade">
        <AboutUs v-show="num === 5"></AboutUs>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Home from '../components/home'
  import Intro from '../components/intro'
  import Product from '../components/product'
  import Footer from '../components/Footer'
  import Technical from '../components/technical'
  import News from '../components/news'
  import AboutUs from '../components/about_us'

  export default {
    name: '',
    data() {
      return {
        num: 0,
      }
    },
    components: {Header, Home, Intro, Product, Technical, News, AboutUs, Footer},
    methods: {
      changeNum(msg) {
        this.num = msg;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .container {
    padding: 20px 45px;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom: none;;
  }
</style>

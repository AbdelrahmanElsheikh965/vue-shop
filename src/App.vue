<template>
  <Header></Header>
  <Container></Container>
  <Footer></Footer>
</template>

<script>
/**
    home page => list all products
    delete product (with icon from main page)

    cart => wishlist (add + remove)	pinia store

    product details => show data (edit)
    add a new product => (form in a separate page)
 */

import Container from './components/content/Container.vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer
  }
}
</script>

<style>

</style>

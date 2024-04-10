<template>
  <Header></Header>
  <Container></Container>
  <Footer></Footer>
</template>

<script>

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

<template>
    <section id="work" class="portfolio-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Portfolio
            </h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">

      <!-- Product Component  -->
      <ProductCard></ProductCard>

      </div>
    </div>
  </section>
 
</template>



<script>
import ProductCard from './ProductCard.vue';
export default {
  name: 'ProductList',
  props: {
    
  },
  components: {
    ProductCard
  }
}
</script>


<style scoped>

</style>

<script>
/* eslint-disable */
import ProductCard from "./ProductCard.vue";

const products = await fetch('http://localhost:3000/products')
const productsData = await products.json()
console.log(productsData);

export default {
  name: "ProductList",
  props: {
    productsData 
  },
  components: {
    ProductCard,
  },
  data(){
    return {
        allProducts: productsData
    }
  }
};
</script>

<template>
  <section id="work" class="portfolio-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">Portfolio</h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <ProductCard
      v-for="p in allProducts"
      :id="p.id"
      :title="p.title"
      :description="p.description"
      :price="p.price"
      :category="p.category"/>
      </div>
    </div>
  </section>
</template>


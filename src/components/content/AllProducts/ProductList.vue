<script>
/* eslint-disable */
import ProductCard from "./ProductCard.vue";
import { useMainStore } from "@/stores/mainstore";
import { onMounted, ref } from "vue";

export default {
  name: "ProductList",
  setup() {
    const mainStore = useMainStore(); // Access the Pinia store
    const products = ref([]);

    onMounted(async () => {
      await mainStore.fetchProducts();
      products.value = mainStore.all_products;
    });

    return {
      products,
    };
  },
  components: {
    ProductCard,
  },
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
      <div class="row" v-if="products">
        <ProductCard
          v-for="p in products"
          :key="p.id"
          :product="p"
        />
      </div>
      <div class="row" v-else>Loading...</div>
    </div>
  </section>
</template>

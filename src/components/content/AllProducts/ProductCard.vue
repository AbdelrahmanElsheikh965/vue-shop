<script>
import { useMainStore } from "@/stores/mainstore";
import { useCartStore } from "@/stores/cartstore";

export default {
  name: "ProductCard",
  props: {
    product: Object, 
  },
  
  // var ans = prompt('Delete selected item? (Y/n)');
  setup() {
    const mainStore = useMainStore();
    const cartStore = useCartStore();

    const deleteProduct = (p_id) => {
      console.log(p_id);
      mainStore.removeProduct(p_id);
      alert("Deleted");
    };

    const addToCart = (p) => {
      cartStore.addToCart(p);
      alert("added to cart :)");
    };

    return {
      deleteProduct,
      addToCart,
    };
  },
};
</script>

<template>
  <div class="col-md-4">
    <div class="work-box">
      <a
        href="assets/img/work-2.jpg"
        data-gallery="portfolioGallery"
        class="portfolio-lightbox"
      >
        <div class="work-img">
          <img src="assets/img/work-2.jpg" alt="" class="img-fluid" />
        </div>
      </a>
      <div class="work-content">
        <div class="row">
          <div class="col-sm-8">
            <h2 class="w-title">
              <router-link :to="'/details/'+product.id"> {{ product.title }} </router-link>  
            </h2>
            <div class="w-more">
              <span class="w-ctegory">Category</span> /
              <span class="w-date">{{ product.category }}</span>
            </div>
            <div class="w-more">
              <span class="w-ctegory">Price</span> /
              <span class="w-date"> {{ product.price }} </span>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="w-like">
              <a href="" @click.prevent="addToCart(product)">
                <span class="bi bi-plus-circle"></span> 
              </a> 
              <a href="" @click.prevent="deleteProduct(product.id)">
                <span class="bi bi-ban"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

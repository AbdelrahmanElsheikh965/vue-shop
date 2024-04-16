<script>
/* eslint-disable */
export default {
  name: "ProductCard",
  props: {
    product: Object, // Define a prop named 'product' of type Object
  },
  data:() => ({
      // cartStore: useCartStore()
    }),
    methods:{
      // cartAdd(product){
      //   this.cartStore.addToCart(product)
      // },

    // removeProduct(id){

      // fetch(`http://localhost:3000/products/${id}`, {
      //     method: 'DELETE',
      //     header: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      // })
    // }
      
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
              <a href="" @click.prevent="cartProduct(id)">
                <span class="bi bi-plus-circle"></span> 
              </a> 
              <a href="" @click.prevent="removeProduct(id)">
                <span class="bi bi-ban"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

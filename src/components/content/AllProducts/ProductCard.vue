<script>
/* eslint-disable */
export default {
  name: "ProductCard",
  props: ["id", "title", "description", "category", "price"],
  data() {
    return {

    };
  },
  methods: {

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
              <router-link :to="'/details/'+id"> {{ title }} </router-link>  
            </h2>
            <div class="w-more">
              <span class="w-ctegory">Category</span> /
              <span class="w-date">{{ category }}</span>
            </div>
            <div class="w-more">
              <span class="w-ctegory">Price</span> /
              <span class="w-date"> {{ price }} </span>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="w-like">
              <a href="portfolio-details.html">
                <span class="bi bi-plus-circle"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

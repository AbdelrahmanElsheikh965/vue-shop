<script>
import { useMainStore } from "@/stores/mainstore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ProductDetails",

  setup() {
    const route = useRoute();
    const productId = ref(route.params.id);
    const mainStore = useMainStore();
    const product = ref({
      title: "",
      description: "",
      price: "",
      category: "",
    });

    onMounted(async () => {
      var productResult = await mainStore.getOneProduct(productId.value);
      console.log(productResult);
      product.value.title = productResult.title;
      product.value.description = productResult.description;
      product.value.price = productResult.price;
      product.value.category = productResult.category;
    });

    const handleUpdateSubmit = () => {
      console.log(productId.value, product.value);
      mainStore.updateProduct(
        productId.value,
        product.value
      );
      alert("updated");
    };

    return {
      productId,
      product,
      handleUpdateSubmit,
    };
  },
};
</script>


<template>
  <section
    class="paralax-mf footer-paralax bg-image sect-mt4 route"
    style="background-image: url(assets/img/overlay-bg.jpg)"
  >
    <div class="overlay-mf"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="contact-mf">
            <div id="contact" class="box-shadow-full">
              <div class="row">
                <div class="col-md-6" style="margin: auto">
                  <div class="title-box-2">
                    <h5 class="title-left">Update this product</h5>
                  </div>
                  <div>
                    <form
                      action=""
                      @submit.prevent="handleUpdateSubmit"
                      method="post"
                      role="form"
                      class="php-email-form"
                    >
                      <div class="row">
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input
                              type="text"
                              name="title"
                              v-model="product.title"
                              class="form-control"
                              placeholder="Title of the product"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input
                              type="text"
                              name="category"
                              v-model="product.category"
                              class="form-control"
                              placeholder="Category of the product"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input
                              type="number"
                              name="price"
                              v-model="product.price"
                              class="form-control"
                              placeholder="Price of the product"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              name="description"
                              v-model="product.description"
                              rows="5"
                              placeholder="Description of the product ..."
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 text-center">
                          <br />
                          <button
                            type="submit"
                            class="button button-a button-big button-rouded"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

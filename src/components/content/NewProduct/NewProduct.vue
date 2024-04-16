<script>
/* eslint-disable */
import { useMainStore } from "@/stores/mainstore";

export default {

  name: "NewProduct",
  data(){
    return {
      model: {
        product: {
          title: '',
          description: '',
          price: '',
          category: '',
        }
      }
    }
  },

  methods:{

    handleFormSubmit (submitEvent) {
      const mainStore = useMainStore();
      const saved = mainStore.addNewProduct(this.model.product);
      alert(saved);
    }

  }
};
</script>

<template>
  <section
    id="contact"
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
                <div class="col-md-6">
                  <div class="title-box-2">
                    <h5 class="title-left">Save a new product</h5>
                  </div>
                  <div>
                    <form
                      @submit.prevent="handleFormSubmit"
                      action=""
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
                              v-model="model.product.title"
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
                              class="form-control"
                              v-model="model.product.category"
                              name="category"
                              placeholder="Category of the product"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12 mb-3">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              v-model="model.product.price"
                              name="price"
                              placeholder="Price of the product"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              v-model="model.product.description"
                              name="description"
                              rows="5"
                              placeholder="Description of the product ..."
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 text-center">
                          <button
                            type="submit"
                            class="button button-a button-big button-rouded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="title-box-2 pt-4 pt-md-0">
                    <h5 class="title-left">Get in Touch</h5>
                  </div>
                  <div class="more-info">
                    <p class="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolorum dolorem soluta quidem expedita aperiam
                      aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                      esse laboriosam ratione nobis mollitia inventore?
                    </p>
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

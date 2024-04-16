<script>
/* eslint-disable */


export default {

  name: "NewProduct",

  props: {
    // lastId: {
    //   type: Number, // Assuming last_id is a number
    //   required: true // You can adjust this as needed
    // }
  },
  setup() {
    // const lastIdStore = useLastIdStore();
    // console.log(lastIdStore.last_id);
    // return { lastIdStore };
  },

  methods:{

    handleFormSubmit (submitEvent) {
     
      // alert(this.lastIdStore.last_id)
      // this.title = submitEvent.target.elements.title.value
      // this.description = submitEvent.target.elements.description.value
      // this.category = submitEvent.target.elements.category.value
      // this.price = submitEvent.target.elements.price.value

      // let product = {
      //   id: props.lastId, // Accessing lastId from props
      //   // id: this.lastIdStore.last_id,  // get the last product id from the store +1
      //   title: this.title,
      //   description: this.description,
      //   category: this.category,
      //   price: this.price
      // }

      // fetch('http://localhost:3000/products', {
      //     method: 'GET',
      //     header: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json'
      //     },
      // })
      // .then((data) => data.json())
      // .then((data) => data)     

      // console.log(product);
      // fetch('http://localhost:3000/products', {
      //     method: 'POST',
      //     header: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify(product)
      // })

      

      // fetch('http://localhost:3000/products/8', {
      //     method: 'PUT',
      //     header: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify(product)
      // })

      // fetch('http://localhost:3000/products/8', {
      //     method: 'GET',
      //     header: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      // })
      // .then((data) => data.json())
      // .then((data) => console.log(data))

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

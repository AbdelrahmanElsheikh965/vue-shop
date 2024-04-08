<template>
  
  <div>
      <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
  
        <h1 class="logo"><a href="index.html">DevFolio</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a>-->
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero" @click="toggleBooks()">Home | Books</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#contact" @click="toggleCart()">Cart Books</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
  
    <!-- ======= Hero Section ======= -->
    <div id="hero" class="hero route bg-image" style="background-image: url(../../public/img/hero-bg.jpg)">
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <!--<p class="display-6 color-d">Hello, world!</p>-->
            <h1 class="hero-title mb-4">I am a person</h1>
            <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
            <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
          </div>
        </div>
      </div>
    </div><!-- End Hero Section -->

    <!-- ======= Portfolio Section ======= -->
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
          
          <table class="table" v-if="in_cart===true">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Release Year</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c_item in cart_books">
                <td>{{c_item.title}}</td>
                <td>{{c_item.genre}}</td>
                <td>{{c_item.released}}</td>
                <td> <button type="button" class="btn btn-danger" @click="removeFromCart(c_item)">Delete</button> </td>
              </tr>
            </tbody>
          </table>

          <div class="col-md-4" v-for="book in books" v-if="in_books===true" :key="book.id">
            <div class="work-box">
              <a href="../assets/hero-bg.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img :src="book.image" alt="" class="img-fluid">
                </div>
              </a>
              <div class="work-content" :class="{'more': book.price>=250, 'less': book.price<250, 'none': book.price<200}">
                <div class="row" >
                  <div class="col-sm-8" >
                    <h2 class="w-title"> {{book.title}} </h2>
                    <div class="w-more">
                      <span class="w-ctegory">Genre</span> / <span class="w-date"> {{book.genre}} </span>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">Price</span> / <span class="w-date"> {{formatNumber(book.price)}} </span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a @click.prevent="addBook(book)" href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </div>

</template>

<script>

import books_jsonArray from './books_jsonArray'

export default {
  
  data: () => ({

      books: books_jsonArray,

      counter: 10,
      in_books: true,
      in_cart: false,
      
      cart_books: [],
      
    }),
    
    //concise methods
    methods: {
      
      prepareImageLink(bookImageLink){
        return require(`${bookImageLink}`)
      },

      formatNumber(n){
        return new Intl.NumberFormat("ar-SA").format(n);
      },

      addBook(book) {
        if (this.cart_books.includes(book)) {
          alert('Already added')
        }else{
          this.cart_books.push(book)
        }
        console.log(this.cart_books);
      },
      
      toggleCart() {
        this.in_cart = true;
        this.in_books = false;
      },

      toggleBooks() {
        this.in_cart = false;
        this.in_books = true;
      },
      
      removeFromCart(itemToBeDeleted) {
        this.cart_books = this.cart_books.filter(book => book.id !== itemToBeDeleted.id);
        console.log(this.cart_books);
      }

    },

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.more{
  background-color: yellowgreen;
}
.less{
  background-color: aqua;
}
.none{
  background-color: chocolate;
}

</style>

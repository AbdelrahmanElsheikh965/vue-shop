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
    <div id="hero" class="hero route bg-image" style="background-image: url(../assets/img/hero-bg.jpg)">
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
                <th scope="col">Author</th>
                <th scope="col">Country</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c_item in cart_books">
                <td>{{c_item.title}}</td>
                <td>{{c_item.author}}</td>
                <td>{{c_item.country}}</td>
                <td> <button type="button" class="btn btn-danger" @click="removeFromCart(c_item)">Delete</button> </td>
              </tr>
            </tbody>
          </table>

          <div class="col-md-4" v-for="book in books" v-if="in_books===true">
            <div class="work-box">
              <a href="/cli-books/src/assets/img/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img :src="book.imageLink" alt="" class="img-fluid">
                </div>
              </a>
              <div class="work-content" :class="{'more': book.pages>=250, 'less': book.pages<250, 'none': book.pages<200}">
                <div class="row" >
                  <div class="col-sm-8" >
                    <h2 class="w-title"> {{book.title}} </h2>
                    <div class="w-more">
                      <span class="w-ctegory">Author</span> / <span class="w-date"> {{book.author}} </span>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">Pages</span> / <span class="w-date"> {{formatNumber(book.pages)}} </span>
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

import source_books from '../data/books'

export default {
  
  data: () => ({

      books: source_books,

      counter: 10,
      in_books: true,
      in_cart: false,
      
      cart_books: [],
      
      // mytemplate: "<h4>ITI NewCapital Branch</h4>",
      
    }),
    
    //concise methods
    methods: {
      
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
        this.cart_books = this.cart_books.filter(book => book.title !== itemToBeDeleted.title);
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

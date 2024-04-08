<template>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Vue our books</title>

      <!-- Favicons -->
      <link href="assets/img/favicon.png" rel="icon">
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

      <!-- Vendor CSS Files -->
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
      <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
      <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

      <!-- Template Main CSS File -->
      <link href="assets/css/style.css" rel="stylesheet">

    <!-- Step 1: import the source file | CDN -->
    <script src="vueversion3.js"></script>
  
  </head>

  <body>

    <div id="main">

      <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
  
        <h1 class="logo"><a href="index.html">DevFolio</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero" @click="toggleBooks()">Home | Books</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#contact" @click="toggleCart()">Cart Books</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
      </div>
    </header><!-- End Header -->
  
    <!-- ======= Hero Section ======= -->
    <div id="hero" class="hero route bg-image" style="background-image: url(assets/img/hero-bg.jpg)">
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
              <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
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

    
    <!-- books source file -->
    <script src="books.js"></script>

    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/typed.js/typed.umd.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  


  </body>
</html>

</template>

<script>
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

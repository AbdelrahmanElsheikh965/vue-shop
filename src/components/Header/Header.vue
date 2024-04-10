<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><router-link :to="'/'"> Shop </router-link> </h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li> <router-link :to="'/'"> Home </router-link> </li>
          <li> <router-link :to="'/details'"> Details </router-link> </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    
  },
};
</script>

<style scoped></style>

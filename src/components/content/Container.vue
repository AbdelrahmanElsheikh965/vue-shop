<template>
  <ProductList/>
</template>

<script>


import ProductList from './AllProducts/ProductList.vue';

export default {
    name: 'Container',
    props: {
      
    },
    components: { ProductList }
}
</script>


<style scoped>

</style>

<script>

import {useCartStore} from '@/stores/cartstore'; 
import { onMounted, ref, watch } from "vue";


export default {
    name: 'Cart',
    setup() {
    const cartStore = useCartStore(); // Access the Pinia store
    const myProducts = ref([]);

    onMounted(() => {
      console.log(cartStore.cart_data);
      myProducts.value = cartStore.cart_data;
    });

    const deleteFromcart = (p) => {
      console.log(p, myProducts);

      cartStore.removeFromCart(p);
      console.log("Cart after removal:", cartStore.cart_data); 

      myProducts.value = cartStore.cart_data;
      alert("removed from cart :)");
    };
   
    // Ensure products is reactive to changes in mainStore.all_products
    watch(
      () => cartStore.all_products,
      (newProducts) => {
        myProducts.value = newProducts;
      }
    );

    return {
      myProducts,
      deleteFromcart
    };
  },
}
</script>

<template>
   <br> <br>  <br>  <br> <br> 
   <table class="table">
  <thead class="table-dark">
    <tr>
        <th>Title</th>
        <th>Desc</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
  </thead>
  <tbody v-for="p in myProducts" :key="p.id">

    <tr>
        <td>{{p.title}}</td>
        <td>{{p.description}}</td>
        <td>{{p.price}}</td>
        <td>{{p.category}}</td>
        
        <td><button  @click="deleteFromcart(p.id)" type="button" class="btn btn-danger">Danger</button></td>
      </tr>

  </tbody>
</table>
    
</template>


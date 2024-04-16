<script>

// import {useCartStore} from '@/stores/cartstore'; 

export default {
    name: 'Cart',
    data:() => ({
      // cartStore: useCartStore()
    }),
    methods:{
      // cartAdd(product){
      //   this.cartStore.addToCart(product)
      // }
    }
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
  <tbody>
    <tr>
        <td>kk</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
        <td><button  @click="incrementLastId" type="button" class="btn btn-danger">Danger</button></td>
      </tr>
  </tbody>
</table>
    
</template>


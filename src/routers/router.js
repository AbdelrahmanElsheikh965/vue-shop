import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '../components/content/AllProducts/ProductList.vue'
import NewProduct from '../components/content/NewProduct/NewProduct.vue'
import ProductDetails from '../components/content/ProductDetails/ProductDetails.vue'
import Cart from '../components/content/Cart/Cart.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/new', component: NewProduct },
  { path: '/details', component: ProductDetails },
  { path: '/cart', component: Cart },
]

const router = createRouter({
//   history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

export default router
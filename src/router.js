import { createRouter, createWebHistory } from 'vue-router'

import ProductList from './components/content/AllProducts/ProductList.vue'
import ProductDetails from './components/content/ProductDetails/ProductDetails.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/details', component: ProductDetails },
]

const router = createRouter({
//   history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

export default router
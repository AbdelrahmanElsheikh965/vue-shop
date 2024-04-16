import { defineStore } from "pinia";


export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cart_data: []          
    }),
    actions: {
        addToCart(productToBeAdded){
            this.cart_data.push(productToBeAdded)
        },
        removeFromCart(productToBeRemoved){
            this.cart_data = this.cart_data.filter( p => p.id !== productToBeRemoved.id)
        }
    }
})

export default useCartStore;
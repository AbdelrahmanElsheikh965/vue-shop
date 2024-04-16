import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
    state: () => ({
        all_products: [] //fetch('http://localhost:3000/products').then((data)=>data.json())
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                this.all_products = data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        addNewProduct(productObjectToBeAdded){
            fetch('http://localhost:3000/products', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(productObjectToBeAdded)
            })
        },

        removeProduct(productIdToBeRemoved){
            fetch(`http://localhost:3000/products/${productIdToBeRemoved}`, {
                method: 'DELETE',
                header: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
        },

        updateProduct(productIdToBeUpdated, data){
            fetch(`http://localhost:3000/products/${productIdToBeUpdated}`, {
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

    }
})

export default useMainStore;
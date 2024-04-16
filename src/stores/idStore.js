import { defineStore } from "pinia";


export const useLastIdStore = defineStore("lastIdStore", {
    state: () => ({
        last_id: null
    }),
    actions: {
        setLastId(id) {
            this.last_id = id;
        },
        incrementLastId() {
            if (this.last_id !== null) {
                this.last_id++;
            } else {
                alert('Cannot increase id null value');
            }
        }
    }
})

// fetch('http://localhost:3000/products', {
//     method: 'GET',
//     header: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
// })
// .then((data) => data.json())
// .then((data) => {
//     useLastIdStore.setLastId(data[data.length - 1].id);
// })
//  export default useLastIdStore;
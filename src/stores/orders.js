import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id: 1,
                customer_id: 1,
                book_id: 4,
                quantity: 5,
                total_paid: 8500,
                status: "processing"
            },
            1:{
                id: 1,
                customer_id: 2,
                book_id: 7,
                quantity: 1,
                total_paid: 1000,
                status: "processing"
            },
            2:{
                id: 1,
                customer_id: 3,
                book_id: 5,
                quantity: 3,
                total_paid: 5100,
                status: "processing"
            },
            3:{
                id: 1,
                customer_id: 4,
                book_id: 4,
                quantity: 4,
                total_paid: 6800,
                status: "processing"
            },
            4:{
                id: 1,
                customer_id: 5,
                book_id: 4,
                quantity: 3,
                total_paid: 3750,
                status: "processing"
            },
            5:{
                id: 1,
                customer_id: 6,
                book_id: 14,
                quantity: 2,
                total_paid: 3600,
                status: "processing"
            }
        }

        return{
            orders
        }
   },
   actions:{
       
   },
   persist: true,
})
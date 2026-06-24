<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const books = booksStore.books


//cart
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const quantity = ref(1)

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}

function buyBook(book){
    book.quantity = quantity.value //Set the quantity for the book being added to the cart        
    cartStore.updateCart(book)
}

function addToWishlist(book){
    wishlistStore.addToWishlist(book)
}

</script>

<template>
    <v-container max-width = "100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Browse Books
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="book in booksStore.books" :key="book.name" cols="12" sm="6" mb="4" lg="3">
                <v-card class="h-100 d-flex flex-column" width="325">
                <v-img :src="book.image" height="200px" class="mt-4"></v-img>

                <v-card-title> {{ book.title }} </v-card-title>
                <v-card-text>By: {{ book.author }} </v-card-text>
                <v-card-text> 
                    <v-chip size="small" color="primary" variant="tonal" class="mb-3"> {{ book.price }} </v-chip>
                    <div class="text-body-2"> {{ book.description }} </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color ="primary" variant="elevated" @click="buyBook(book)">Add to Cart</v-btn>
                    <v-btn color ="primary" variant="elevated" @click="view(book)">View Book</v-btn>
                    <v-btn color ="primary" variant="elevated" @click="addToWishlist(book)">Add to Wishlist</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
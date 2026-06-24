<script setup>
import { useRouter } from 'vue-router'
import { useWishlistStore } from '../stores/wishlist'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

function removeItem(bookName) {
  wishlistStore.removeFromWishlist(bookName)
}

function addToCart(book) {
  cartStore.addToCart(book)
}
</script>

<template>
  <v-container class="page-section" max-width="1200">
    <v-row class="mb-6">
      <v-col cols="12" class="text-center">
        <div class="section-title">Your wishlist</div>
        <p class="section-subtitle mt-4">Keep books here while you decide what to read next.</p>
      </v-col>
    </v-row>

    <v-row v-if="wishlistStore.wishlist.length">
      <v-col v-for="item in wishlistStore.wishlist" :key="item.name" cols="12" md="6" lg="4">
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden">
          <v-img :src="item.image" height="220" cover />

          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>By {{ item.author }}</v-card-subtitle>
          <v-card-text>
            <div>{{ item.description }}</div>
            <div class="mt-3 font-weight-medium">Price: {{ item.price }}</div>
          </v-card-text>

          <v-card-actions class="mt-auto">
            <v-btn variant="outlined" color="primary" @click="removeItem(item.name)">
              Remove
            </v-btn>
            <v-spacer />
            <v-btn color="primary" variant="elevated" @click="addToCart(item)">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="text-center py-12">
        <v-icon size="72" color="primary" icon="mdi-heart-outline" />
        <div class="text-h5 mt-4 mb-2">Your wishlist is empty</div>
        <div class="text-body-1 mb-6">Save books here to come back to them later.</div>
        <v-btn color="primary" variant="elevated" @click="router.push('/books')">
          Browse books
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="wishlistStore.wishlist.length" class="mt-4">
      <v-col cols="12" class="text-right">
        <v-btn variant="outlined" color="error" @click="wishlistStore.clearWishlist()">
          Clear wishlist
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
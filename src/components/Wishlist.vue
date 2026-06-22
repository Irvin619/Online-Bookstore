<script setup>

</script>

<script setup>
import { ref } from 'vue'

const wishlist = ref([
  {
    id: 1,
    name: 'Atomic Habits',
    price: 1500,
    author: 'James Clear',
    image: '/images/Book_16.jpg'
  },
  {
    id: 2,
    name: 'The Pragmatic Programmer',
    price: 2200,
    author: 'David Thomas & Andrew Hunt',
    image: '/images/Book_17.jpg'
  }
  // add as many books as you like, following the same shape
])

function addToCart(item) {
  console.log('Added to cart:', item.name)
  // hook this up to your cart logic / store
}
</script>

<!-- Wishlist Component -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4 mb-15 mt-15 text-center">
          Your Wishlist
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        v-for="item in wishlist"
        :key="item.id"
      >
        <v-card color="primary">
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-avatar color="grey" rounded="0" size="150">
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8" class="text-right">
              <v-card-item>
                <v-card-title class="mb-6">{{ item.name }}</v-card-title>
                <v-card-subtitle>Ksh {{ item.price }}</v-card-subtitle>
                <v-card-text>By: {{ item.author }}</v-card-text>
              </v-card-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  elevation="4"
                  variant="elevated"
                  @click="addToCart(item)"
                >
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'

const user = JSON.parse(localStorage.getItem('user') || '{}')
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cart || [])
const cartCount = computed(() => cartItems.value.length)

const wishlist = ref([
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 1500,
    image: '/images/Book_16.jpg'
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    price: 2200,
    image: '/images/Book_17.jpg'
  }
])
const wishlistCount = computed(() => wishlist.value.length)
const profileImage = ref(user.profileImage || 'https://via.placeholder.com/150')

function handleProfileImage(file) {
  if (!file) return
  const selectedFile = Array.isArray(file) ? file[0] : file
  profileImage.value = URL.createObjectURL(selectedFile)
}

function itemTitle(item) {
  return item.title || item.name || 'Untitled Book'
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="3">
          <v-row align="center" class="mb-6">
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="150" class="mx-auto">
                <v-img :src="profileImage" alt="Profile picture" />
              </v-avatar>
              <v-file-input
                class="mt-4"
                label="Upload profile picture"
                accept="image/*"
                hide-details
                dense
                @update:modelValue="handleProfileImage"
              />
            </v-col>
            <v-col cols="12" md="8">
              <div class="text-h4 mb-2">
                {{ user.firstname || 'Your' }} {{ user.lastname || 'Name' }}
              </div>
              <div class="text-subtitle-1 mb-1">Member since 2026</div>
              <div class="text-body-2">
                View your cart items and wishlist from one place.
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-6" />

          <v-row justify="center">
            <v-col cols="12" md="10">
              <v-card color="primary" class="pa-4" elevation="2">
                <div class="text-h6 mb-4 text-center">Cart ({{ cartCount }})</div>
                <div v-if="cartCount === 0" class="text-body-2 text-center">
                  Your cart is empty. Add books to see them here.
                </div>
                <div v-else>
                  <v-carousel hide-delimiters height="360">
                    <v-carousel-item
                      v-for="item in cartItems"
                      :key="item.id || item.title || item.name"
                    >
                      <v-card flat class="d-flex align-center justify-center pa-4" height="100%">
                        <v-row align="center" justify="center" class="w-100">
                          <v-col cols="12" md="5" class="text-center">
                            <v-img
                              :src="item.image"
                              alt="Book image"
                              height="260"
                              class="rounded-lg"
                              cover
                            />
                          </v-col>
                          <v-col cols="12" md="7">
                            <div class="text-h6 mb-3">{{ itemTitle(item) }}</div>
                            <div class="text-body-2 mb-2">By {{ item.author || 'Unknown author' }}</div>
                            <div class="text-body-2 mb-2">Price: Ksh {{ item.price || 0 }}</div>
                            <div class="text-body-2 mb-2">Quantity: {{ item.quantity || 1 }}</div>
                            <div class="text-body-2">Total: Ksh {{ (item.price || 0) * (item.quantity || 1) }}</div>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-6">
            <v-col cols="12" md="10">
              <v-card color="secondary" class="pa-4" elevation="2">
                <div class="text-h6 mb-4">Wishlist ({{ wishlistCount }})</div>
                <div class="text-body-2 mb-4">
                  See all the books you’ve saved for later on the wishlist page.
                </div>
                <div class="d-flex justify-center">
                  <v-btn color="primary" variant="elevated" to="/wishlist">
                    Open Wishlist
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

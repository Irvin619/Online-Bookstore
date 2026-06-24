import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => {
    const wishlist = []

    return {
      wishlist,
    }
  },
  actions: {
    addToWishlist(payload) {
      const exists = this.wishlist.some((book) => book.name === payload.name)

      if (!exists) {
        this.wishlist.push(payload)
      }
    },
    removeFromWishlist(bookName) {
      this.wishlist = this.wishlist.filter((book) => book.name !== bookName)
    },
    clearWishlist() {
      this.wishlist = []
    },
  },
  persist: true,
})
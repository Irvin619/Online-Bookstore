<script setup>

</script>

<template>
    <v-app-bar color = "primary">
        <v-app-bar-title>
            <router-link to="/">
                <v-img src="/Tusome_logo.png" width="15%" height="15%"></v-img>
            </router-link>
        </v-app-bar-title>
        
        <v-btn to="/">Home</v-btn>
        <v-btn to="/books">Books</v-btn>
        <v-btn to="/cart">Cart</v-btn>
        <v-btn to="/library">Library</v-btn>
        <v-btn to="/wishlist">Wishlist</v-btn>
        <v-btn to="/admin">Admin</v-btn>
        <v-btn to="/profile">Profile</v-btn>
    </v-app-bar>
</template>
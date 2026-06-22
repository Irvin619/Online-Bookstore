<script setup>

</script>

<template>
    <v-container max-width = "100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/carousel_1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel_8.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel_3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel_4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

<!-- About Us -->
<v-container class="bg-secondary" max-width = "100%">
    <v-row>
        <v-col class= text-center>
            <div class= "text-display-medium mb-12">Welcome to Tusome!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">An Online Book Haven at the palm of your hand!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Discover a world of knowledge and imagination with a wide range of genres and new insightful content for you and your mind! Explore this new world of reading and knowledge with a single tap of your screen!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Get empowered with Tusome!</div>
        </v-col>
    </v-row>
</v-container>

<!-- Our Bestsellers -->
<v-container max-width = "100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="/Book_1.jpg" cover></v-img> <!-- Book picture -->
                <v-card-title>A Court of Thorns and Roses</v-card-title> <!-- Book name -->
                <v-card-subtitle>Ksh 1750</v-card-subtitle> <!-- Book price -->
                <v-btn to ="/cart" color ="primary">Add to Cart</v-btn> <!-- Button -->
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/Book_6.jpg" cover></v-img> <!-- Book picture -->
                <v-card-title>Percy Jackson and the Lightning Thief</v-card-title> <!-- Book name -->
                <v-card-subtitle>Ksh 1600</v-card-subtitle> <!-- Book price -->
                <v-btn to ="/cart" color ="primary">Add to Cart</v-btn> <!-- Button -->
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/Book_11.jpg" cover></v-img> <!-- Book picture -->
                <v-card-title>The Dangerous Days of Daniel X</v-card-title> <!-- Book name -->
                <v-card-subtitle>Ksh 1500</v-card-subtitle> <!-- Book price -->
                <v-btn to ="/cart" color ="primary">Add to Cart</v-btn> <!-- Button -->
            </v-card>
        </v-col>

    </v-row>
</v-container>

<!-- Footer -->
    <v-container class="bg-primary" max-width="100%">
     <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/Tusome_logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Tusome Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@tusomeonline.com</p>
                <p>Phone: 254712345789</p>
            </div>
        </v-col>
     </v-row>
    </v-container>

</template>
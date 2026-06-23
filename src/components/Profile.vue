<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <h1>
        {{ user.firstname }} {{ user.lastname }}
    </h1>
</template>

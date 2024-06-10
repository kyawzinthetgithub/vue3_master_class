<template>
  <TheNavbar></TheNavbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
</script>

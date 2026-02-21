<script setup>
import Footer from './utils/footer.vue';
import Navbar from './utils/navbar.vue';
import FormPage from './pages/FormPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';

</script>

<template>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style scoped>
</style>

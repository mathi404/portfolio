<script setup>
import { onMounted } from 'vue';
import {ref} from "vue"

const projects = ref([])
onMounted(async()=>{

    const response = await fetch(`${import.meta.env.VITE_SERVER_API_BASE_URL}/projects`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json();
    projects.value = Array.isArray(data) ? data : Object.values(data);

})

</script>

<template>
  <div class="project-container">
    <div class="project-item" v-for="i in projects" :key="i.title">
      <div class="project-media">
        <img v-if="i.images?.foto1" :src="i.images.foto1" />
      </div>
      <div class="title-container">
        <span>{{i.title}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-item img {
  width: 100%;
  height: auto;
}
.project-container {
  color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 20%;
}
.project-item {
  background-color: #27272a;
  margin: 20px;
  padding: 20px 20px;
  width: 800px;
  height: 500px;
  overflow: hidden;
}
.project-media{
    width: 100%;
    height: 420px;
    overflow: hidden;
}
.project-media img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}
.title-container {
  text-align: center;
  background-color: #323235;
  border-radius: 25px;
}
</style>

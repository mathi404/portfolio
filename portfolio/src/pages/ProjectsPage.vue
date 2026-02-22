<script setup>
import { onMounted } from "vue";
import { ref, reactive } from "vue";
const API_BASE = import.meta.env.VITE_SERVER_API_BASE_URL;
const projects = ref([]);
let isActive = ref(false);
let currentFotoIndex = reactive({});
let showMoreContentObject = reactive({});

onMounted(async () => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_API_BASE_URL}/projects`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    },
  );
  const data = await response.json();
  projects.value = Array.isArray(data) ? data : Object.values(data);
  projects.value.forEach((p) => {
    currentFotoIndex[p.title] = 1;
  });
});
function showMore(title) {
  isActive.value = !isActive.value;
  showMoreContentObject[title] = !showMoreContentObject[title];
}
function showLess(title) {
  isActive.value = !isActive.value;
  showMoreContentObject[title] = !showMoreContentObject[title];
}
function next(title, images) {
  const count = images ? Object.keys(images).length : 0;
  if (!count) return;
  currentFotoIndex[title] = (currentFotoIndex[title] % count) + 1;
}
function previous(title, images) {
  const count = images ? Object.keys(images).length : 0;
  if (!count) return;
  currentFotoIndex[title] = ((currentFotoIndex[title] - 2 + count) % count) + 1;
}
</script>

<template>
  <div class="project-container">
    <div class="project-item" v-for="i in projects" :key="i.title">
      <div class="project-media">
        <img
          v-if="i.images?.foto1"
          :src="API_BASE + i.images['foto' + currentFotoIndex[i.title]]"
        />
        <button @click="previous(i.title, i.images)" class="slider-btn left">
          <
        </button>
        <button @click="next(i.title, i.images)" class="slider-btn right">
          >
        </button>
      </div>
      <div class="title-container">
        <span>{{ i.title }}</span>
      </div>
      <div class="see-more-container">
        <a v-if="!showMoreContentObject[i.title]" @click="showMore(i.title)"
          >Show more</a
        >
      </div>
      <Transition name="expand">
        <div
          v-if="showMoreContentObject[i.title]"
          class="more-content-container"
        >
          <span><b>Description</b>: {{ i.description }}</span
          ><br />
          <span><b>Role</b>: {{ i.role }}</span
          ><br />
          <span><b>Year</b>: {{ i.year }}</span
          ><br />
          <span><b>Course</b>: {{ i.course }}</span
          ><br />
          <span><b>Techstack: </b></span>
          <ul>
            <li v-for="(item, index) in i.techStack" :key="index">
              <b>{{ index }}</b> - {{ item }}
            </li>
          </ul>
          <span><b>Core activities: </b></span>
          <ul>
            <li v-for="(item, index) in i.coreActivities" :key="index">
              <b>{{ index }} - {{ item }}</b>
            </li>
          </ul>
          <a class="see-more-container" @click="showLess(i.title)">Show less</a>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active{
    transition: max-height 0.5s ease, opacity 0.5s ease;
    overflow: hidden;
}
.expand-enter-from,
.expand-leave-to{
    max-height: 0;
    opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 650px;
  opacity: 1;
}
.see-more-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: white;
  cursor: pointer;
}
.slider-btn {
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateY(-50%, -50%);
  top: 50%;
  z-index: 1;
  background-color: #323235;
  opacity: 0.3;
}
.slider-btn.left {
  left: 12px;
}
.slider-btn.right {
  right: 12px;
}
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
  height: auto;
  overflow: hidden;
}
.project-media {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
}
.project-media img {
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

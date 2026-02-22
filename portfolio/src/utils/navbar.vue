<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const isOpen = ref(false)

// &#8801
const routeTo = (path) =>{

    router.push(path)
    isOpen.value=false
    }
</script>

<template>
    <div class="navbar-container">
        <div @click="isOpen = !isOpen" class="hamburger-container">
            <span v-if="!isOpen">&#8801</span>
            <span v-else>&times;</span>
        </div>
        <div v-if="isOpen" class="menu-backdrop" @click="isOpen=false"></div>
        <div class="mobile-links-container" :class="{open: isOpen}">
                <span @click="routeTo('/home')"><RouterLink to="/home">&#8962; Home</RouterLink></span>
                <span @click="routeTo('/projects')"><RouterLink to="/projects">&#9989; Projects</RouterLink></span>
                <span @click="routeTo('/form')"><RouterLink to="/form">&#9993; Contact me</RouterLink></span>
            </div>
         <div @click="routeTo('/home')" class="navbar-home-container">
            <span><RouterLink to="/home">&#8962; Home</RouterLink></span>
        </div>
        <div @click="routeTo('/projects')" class="navbar-projects-container">
            <span><RouterLink to="/projects">&#9989; Projects</RouterLink></span>
        </div>
        
        <div @click="routeTo('/form')" class="navbar-contactme-container">
            <span><RouterLink to="/form">&#9993; Contact me</RouterLink></span>
        </div>
    </div>
</template>

<style scoped>
.hamburger-container{display: none;}
.mobile-links-container{display: none;}
.menu-backdrop{
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 999;
}
a{
    text-decoration: none;
    color: white;
}
.navbar-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 11vh;
    color: white;
    position: relative;
}
.navbar-projects-container{
    position: relative;
    font-size: large;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    width: 33vh;
    margin: 25px;
    text-align: center;
    background-color: #27272a;
    border-radius: 25px;
    cursor: pointer;

}
.navbar-contactme-container{
    position: relative;
    font-size: large;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin: 25px;
    width: 33vh;
    background-color: #27272a;
    border-radius: 25px;
    cursor: pointer;
}
.navbar-home-container{
    position: relative;
    font-size: large;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    width: 33vh;
    margin: 25px;
    background-color: #27272a;
    border-radius: 25px;
    cursor: pointer;
}
.navbar-projects-container::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
}
.navbar-projects-container:hover::after{
    width: 60%;
}
.navbar-home-container::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
}
.navbar-home-container:hover::after{
    width: 60%;
}
.navbar-contactme-container::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
}
.navbar-contactme-container:hover::after{
    width: 60%;
}
@media screen and (max-width: 768px){
  .navbar-home-container,
  .navbar-projects-container,
  .navbar-contactme-container{
    display: none;
  }
  .navbar-container{
    justify-content: center;
    padding: 0 16px;
  }
    .hamburger-container{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: white;
        background-color: #27272a;
        border-radius: 15px;
        padding: 10px 10px;
        cursor: pointer;
        z-index: 1001;
    }
    .mobile-links-container{
        position: absolute;
        top: 100%;
        width: 220px;
        background: #18181b;
        border-radius: 16px;
        padding: 12px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 12px;

        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .mobile-links-container.open{
        opacity: 1;
        transform: translateY(-50%, -50% ) scale(1);
        pointer-events: auto;

    }
    .mobile-links-container span{
        background: #27272a;
        border-radius: 14px;
        padding: 12px 14px;
    }
}
</style>

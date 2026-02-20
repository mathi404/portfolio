<script setup>
</script>

<template>
    <div class="navbar-container">
        
         <div class="navbar-home-container">
            <span><a>&#8962; Home</a></span>
        </div>
        <div class="navbar-projects-container">
            <span><a>&#9989; Projects</a></span>
        </div>
        
        <div class="navbar-contactme-container">
            <span><a>&#9993; Contact me</a></span>
        </div>
    </div>
</template>

<style scoped>
.navbar-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 11vh;
    color: white;
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
</style>

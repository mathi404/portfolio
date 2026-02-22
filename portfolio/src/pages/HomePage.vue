<script setup>
import router from '@/router';
function redirect(){
    router.push("/projects");
}

</script>
<template>
<div class="hello-wrapper">
    <h1 class="hello-container">Hello! I'm Mathijs Langhorst, Software developer.</h1>
</div>
    <div class="general-container">
        <div class="img-container">
            <img src="../assets/profilepicture.jpg">
        </div>
        <div class="about-me-container">
            <h1>text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ducimus dignissimos beatae odio in illum molestias officia ad. Dicta mollitia voluptatibus sapiente ipsa ipsam fuga aliquam numquam consequuntur omnis deserunt.</p>
        </div>
    </div>
    <div class="info-wrapper">
        <div class="experience-container">
            <p>total successfull completed projects: </p>
            <div class="experience-container-item">
                <h1>10+</h1>
                <button @click="redirect()">See recent projects</button>
            </div>
        </div>
        <div class="experience-container">
        <p>Years of experience: </p>
        <div class="experience-container-item">
            <h1>3+</h1>
        </div>
    </div>
    

    </div>
</template>
<style scoped>
.hello-wrapper{
    display: flex;
    justify-content: center;
}
.hello-container{
    display: inline-block;
    color: white;
    overflow: hidden;
    border-right: 0.15em solid white;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3s steps(40, end), blink-caret 0.5s step-end infinite;
}
@keyframes typing{
    from{width: 0;}
    to{width: 50%;}
}
@keyframes blink-caret{
    from,to { border-color: transparent;}
    50% {border-color: white;}
}
.info-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.experience-container{
    margin-left: 30px;
    margin-right: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20vh;
    
}
.experience-container-item{
    text-align: center;
    width: 500px;
    height: 800px;
    padding: 120px;
    height:auto;
    border-radius: 50px;
    background-color: #27272a;
}
.general-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 250px;
}
.img-container{
    margin: 50px;
    margin-right: 250px;
}
.img-container img{
    border-radius: 500px;
}
.about-me-container{
    background-color: #27272a;
    color: white;
    width: 500px;
    height:350px;
    padding: 50px;
    border-radius: 50px;
}
</style>
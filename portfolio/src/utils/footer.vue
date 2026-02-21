<script setup>
import {ref} from "vue"
const currentYear = ref(new Date().getFullYear());
</script>

<template>
<div class="general-container">
  <div class="links-container">
    <h4 class="footer-header">Socials.</h4>
    <div class="link-item">
      <a href="https://www.linkedin.com/in/mathijs-langhorst/"
        ><img src="../assets/icons8-linkedin-48.png"
      /></a>
    </div>
    <div class="link-item">
      <a href="https://github.com/mathi404"
        ><img src="../assets/icons8-github-50.png"
      /></a>
    </div>
  </div>
  <div class="contact-container">
    <h4 class="footer-header">Contact.</h4>
    <div class="contact-item">
      <a href="mailto:mathijslanghorst@hotmail.com"
        >mathijslanghorst@hotmail.com</a
      >
    </div>
    <div class="contact-item">
      <span class="contact-item-description"></span>
      <a href="tel:31681145552">31 6 81145552</a>
    </div>
  </div>
  <div class="page-link-container">
    <h4 class="footer-header">Routes.</h4>
    <div class="page-link-item"><RouterLink to="/home">Home</RouterLink></div>
    <div class="page-link-item"><RouterLink to="/projects">Projects</RouterLink></div>
    <div class="page-link-item"><RouterLink to="/form">Form</RouterLink></div>
  </div>
  </div>
    <div class="copyright-container">
    <span>Copyright ©{{ currentYear }} All rights reserverd</span>
  </div>
</template>

<style scoped>
.copyright-container{
    margin-top: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.link-item{
    margin-bottom: 30px;
}
.page-link-item{
margin-bottom: 30px;
}
.contact-item{
    margin-bottom: 30px;
}
a{
    color: white;
    text-decoration: none;
}
.footer-header{
    margin: 0;
    color: white;
    padding-bottom: 30px;
}
.general-container{
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 25vh;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 50px;
}
.general-container::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.6s ease;
}
.general-container:hover::after{
    width: 40%;
}
.links-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;

}
.contact-container{
    margin: 0;
}
.page-link-container{
    margin: 0;
}

</style>

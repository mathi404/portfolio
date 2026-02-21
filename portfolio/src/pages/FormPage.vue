<script setup>
import { reactive, ref } from "vue";

const API_BASE = import.meta.env.VITE_SERVER_API_BASE_URL;
const buttonStatus = ref("Send message.")
const form = reactive({
  name: "",
  email: "",
  message: "",
  website: "",
});
async function sendMessage() {
  buttonStatus.value = "loading"
  if (form.website) {
    return;
  }
  if (!form.name || !form.email || !form.message) {
    return {
      error: "missing form values",
    };
  }
  if (form.message >= 5000) {
    return {
      error: "message to long!",
    };
  }
  const response = await fetch(`${API_BASE}/form`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"

    },
    body: JSON.stringify(form),
  }).then((response)=>{
    if(!response.ok){
      buttonStatus.value = "error"
      throw new Error("HTTP error! status: "+response.status);
    }
    if(response.ok){
      buttonStatus.value = "success"
      return {succes: "message succesfully sent!"}
    }
    return response.json()
  })

  form.name = "";
  form.email = "";
  form.message = "";
  form.website = "";
}
</script>

<template>
  <div class="intro-text-container">
    <h3>Send me a message!</h3>
    <span
      >I'm always open to discussing new projects, collaborations, or
      opportunities. Feel free to send a message.</span
    >
  </div>
  <form @submit.prevent="sendMessage">
    <div class="form-container">
      <label for="name">Your name.</label>
      <input
        v-model.trim="form.name"
        id="name"
        type="text"
        placeholder="Mathijs"
      />
      <label for="email"> Your email.</label>
      <input
        v-model.trim="form.email"
        id="email"
        type="email"
        placeholder="someone@example.com"
      />
      <label for="message">Message.</label>
      <textarea
        v-model.trim="form.message"
        placeholder="Your message here"
        id="message"
      ></textarea>
      <input
        v-model="form.website"
        type="text"
        name="website"
        autocomplete="off"
        tabindex="-1"
        aria-hidden="true"
        class="honeypot"
      />
      <button @submit="sendMessage()" :class="[
        'submit-button',
        buttonStatus === 'success' && 'success',
        buttonStatus === 'error' && 'error'
      ]">{{ buttonStatus }}</button>
    </div>
  </form>
</template>

<style scoped>
.submit-button.success {
  background-color: #16a34a;
}
.submit-button.error {
  background-color: #dc2626;
}
.honeypot {
  position: absolute;
  left: -9999px;
  top: -9999px;
  height: 0;
  width: 0;
  opacity: 0;
}
input {
  border-radius: 25px;
  color: white;
  text-align: center;
  width: 40vh;
  height: 70px;
  background-color: #27272a;
  margin-top: 20px;
  margin-bottom: 20px;
}
textarea {
  color: white;
  text-align: center;
  width: 40vh;
  height: 20vh;
  background-color: #27272a;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
}
.intro-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  font-size: large;
}
.form-container {
  margin-top: 10vh;
  margin-bottom: 10vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

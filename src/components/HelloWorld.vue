<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>
    We are using Node.js <span id="node-version"></span>, Chromium <span id="chrome-version"></span>, and Electron
    <span id="electron-version"></span>.
  </p>
  <p>Drag the boxes below to somewhere in your OS (Finder/Explorer, Desktop, etc.) to copy this html file.</p>
  <div draggable="true" style="color: red" @dragstart="dragme">index.html</div>
</template>

<script setup>
import { reactive } from "vue";
defineProps({
  msg: String,
});
const state = reactive({ count: 0 });
function dragme(event) {
  event.preventDefault();
  electron.startDrag("index.html");
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

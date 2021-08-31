<template>
  <div>
    <main-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/header/MainHeader.vue";

export default {
  components: { MainHeader },
};
</script>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "./stores/users";
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";

const userStore = useUserStore();

onMounted(() => {
  userStore.getUser();
});
</script>

<template>
  <main>
    <Nav />
    <RouterView />
  </main>
</template>

<style scoped></style>

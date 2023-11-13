<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";
import UploadPhotoModal from "./UploadPhotoModal.vue";

const route = useRoute();
const userStore = useUserStore();

const { user } = storeToRefs(userStore);
const { username: profileUsername } = route.params;

const props = defineProps(["username", "userInfo"]);
</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <ATypographyTitle :level="2">{{ props.username }}</ATypographyTitle>
      <UploadPhotoModal v-if="user && user.username === profileUsername" />
    </div>
    <div class="bottom-content">
      <ATypographyTitle :level="5"
        >{{ props.userInfo.posts }} Post</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.followers }} Follower</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.following }} Following</ATypographyTitle
      >
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  padding-bottom: 75px;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-content {
  display: flex;
  align-items: center;
}
.bottom-content h5 {
  margin: 0 !important;
  padding: 0;
  margin-right: 30px !important;
}
</style>

<script setup>
import { file } from "@babel/types";
import { ref } from "vue";
const open = ref(false);
const caption = ref("");

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  open.value = false;
};

const handleUploadChange = (e) => {
  if (e.target.files[0]) {
    file.value = e.target.files[0];
  }
};
</script>

<template>
  <div>
    <AButton @click="showModal">Upload Photo</AButton>
    <AModal v-model:open="open" title="Upload Photo" @ok="handleOk">
      <input type="file" accept=".jpg,.png" @change="handleUploadChange" />
      <AInput v-model:value="caption" :maxLenght="50" placeholder="Caption" />
    </AModal>
  </div>
</template>

<style scoped>
input {
  margin-top: 20px;
}
</style>

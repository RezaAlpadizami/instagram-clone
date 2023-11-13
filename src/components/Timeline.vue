<script setup>
import Card from "./Card.vue";
import Container from "./Container.vue";

const data = [
  {
    id: 1,
    username: "selena",
    url: "https://cdn0-production-images-kly.akamaized.net/IetLs1padaz1-aVOvTH75Cm0XVk=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4294592/original/006550500_1674021528-image_6487327_-_2023-01-18T124806.890.JPG",
    caption: "I love you guyss",
  },
  {
    id: 2,
    username: "the weeked",
    url: "https://images.sk-static.com/images/media/img/col4/20191130-223218-182475.jpg",
    caption: "Hello Guysss",
  },
];
</script>

<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>

<script setup>
import Container from "./Container.vue";
import UserBar from "./UserBar.vue";
import ImageGallary from "./imageGallary.vue";

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
    <div class="profile-container">
      <UserBar
        :key="$route.params.username"
        username="Messi"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 342,
        }"
      />
      <ImageGallary
        :posts="[
          {
            id: 1,
            image:
              'https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947',
          },
          {
            id: 2,
            image:
              'https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947',
          },
        ]"
      />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
</style>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Container from "./Container.vue";
import AuthModal from "./AuthModal.vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { user, loadingUser } = storeToRefs(userStore);

const router = useRouter();

const searchInput = ref("");

const onSearch = () => {
  if (searchInput.value) {
    router.push(`/profile/${searchInput.value}`);
    searchInput.value = "";
  }
};
const handleLogut = async () => {
  await userStore.handleLogout();
};

const goToProfile = () => {
  router.push(`/profile/${user.value.username}`);
};
</script>

<template>
  <ALayoutHeader class="header">
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/" class="logo-name">Instagram</RouterLink>
          <AInputSearch
            v-model:value="searchInput"
            placeholder="input search text"
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="content" v-if="!loadingUser">
          <div class="left-content" v-if="!user">
            <AuthModal :isLogin="false" />
            <AuthModal :isLogin="true" />
          </div>
          <div class="left-content" v-else>
            <AButton type="primary" @click="goToProfile">Profile</AButton>
            <AButton type="primary" @click="handleLogut">Logut</AButton>
          </div>
        </div>
      </div>
    </Container>
  </ALayoutHeader>
</template>

<style scoped>
.header {
  background-color: rgba(0, 0, 0, 0.85);
  line-height: 64px;
}
.nav-container {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}
.right-content a {
  margin-right: 10px;
  text-decoration: none;
  color: rgb(20, 95, 216);
}

.left-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.left-content button {
  margin-left: 10px;
}
</style>

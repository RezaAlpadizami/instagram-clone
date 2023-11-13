<script setup>
import { ref, defineProps, reactive } from "vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { errorMessage, loading, user } = storeToRefs(userStore);

const props = defineProps(["isLogin"]);
const open = ref(false);

const userCredentials = reactive({
  username: "",
  email: "",
  password: "",
});

const showModal = () => {
  open.value = true;
};

const clearuserCredentialInput = () => {
  userCredentials.username = "";
  userCredentials.email = "";
  userCredentials.password = "";
  userStore.clearErrMessage();
};

const handleOk = async (e) => {
  if (props.isLogin) {
    await userStore.handleLogin({
      email: userCredentials.email,
      password: userCredentials.password,
    });
  } else {
    await userStore.handleSignup(userCredentials);
  }

  if (user.value) {
    open.value = false;
    clearuserCredentialInput();
  }
};

const handleCancel = () => {
  clearuserCredentialInput();
  open.value = false;
};

const title = props.isLogin ? "Login" : "Signup";
</script>

<template>
  <div>
    <AButton type="primary" @click="showModal">{{ title }}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <template #footer>
        <AButton key="back" @click="handleCancel">Cancel</AButton>
        <AButton
          :disabled="loading"
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          >Submit</AButton
        >
      </template>
      <div v-if="!loading" class="input-container">
        <AInput
          class="input"
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <AInput
          class="input"
          v-model:value="userCredentials.email"
          placeholder="Email"
        />
        <AInput
          class="input"
          v-model:value="userCredentials.password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div v-else class="spinner">
        <ASpin />
      </div>
      <ATypographyText v-if="errorMessage" type="danger">{{
        errorMessage
      }}</ATypographyText>
    </AModal>
  </div>
</template>

<style scoped>
.input {
  margin-top: 5px;
}

.input-container {
  height: 120px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}
</style>

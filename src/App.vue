<script setup>
import {RouterView, useRoute} from 'vue-router'
import {ref} from "vue";

import Toast from "@/components/Toast.vue";
import LoadingPage from "@/components/LoadingPage.vue"


const route = useRoute();
const isLoadingPage = ref(true)

if (route.name == "login") {
  isLoadingPage.value = false
} else {
  isLoadingPage.value = false
}

</script>

<template>
  <Toast />
  <LoadingPage v-if="isLoadingPage" />
  <RouterView v-else />
</template>

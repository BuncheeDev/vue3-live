<template>
  <router-view />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    // เพื่อ
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProfile");
    });
  },
};
</script>

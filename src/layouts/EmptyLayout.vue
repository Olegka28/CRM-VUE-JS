<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fnError) {
      console.log(fnError);
      this.$error(messages[fnError.code] || "Что-то пошло не так");
    }
  }
};
</script>

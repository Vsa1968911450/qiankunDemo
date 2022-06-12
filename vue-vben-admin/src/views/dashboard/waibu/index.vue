<template>
  <router-view>
    <div id="sub01" style="z-index: 999; margin-top: 50px"></div>
  </router-view>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    window.open('/sub01/home', '_blank');
  });
</script>

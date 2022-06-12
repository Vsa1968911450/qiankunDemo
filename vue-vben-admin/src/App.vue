<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView v-show="showsub" />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  //   import 'dayjs/locale/zh-cn';
  const router = useRouter();
  const route = useRoute();
  console.log(router);
  console.log(route);
  // support Multi-language
  const { getAntdLocale } = useLocale();
  const showsub = ref(true);
  console.log(router.currentRoute);
  // Listening to page changes and dynamically changing site titles
  useTitle();
</script>

<template>
  <div v-show="showmylife" class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>
    <button @click="goto">button</button>
  </div>
  <div id="antgo"></div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import VisitSource from './components/VisitSource.vue';
  import VisitRadar from './components/VisitRadar.vue';
  import SalesProductPie from './components/SalesProductPie.vue';
  import { useRouter } from 'vue-router';
  import { registerMicroApps, start } from 'qiankun';

  registerMicroApps([
    {
      name: 'antgo', // app name registered
      entry: '//localhost:8000',
      container: '#antgo',
      activeRule: '/antgo',
    },
    // {
    //   name: 'sub01',
    //   entry: '//localhost:8010',
    //   container: '#sub01',
    //   activeRule: '/sub01',
    // },
  ]);
  onMounted(() => {
    start();
  });

  const showantgo = ref(true);
  const showmylife = ref(true);
  const loading = ref(true);
  const router = useRouter();
  //   const route = useRoute();
  const goto = () => {
    showantgo.value = true;
    showmylife.value = false;
    router.push({
      path: '/antgo/dashboard/analysis',
    });
    // window.open('/antgo', '_blank');
  };
  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

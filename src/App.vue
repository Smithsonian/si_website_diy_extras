<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Extra resources | DIY Planet Search' });

configure({ tagId: 'G-CQCJ1860S7' });
</script>

<template>
  <BApp>
    <header>
      <DiyExtrasNavBar />
    </header>
    <main>
      <DiyExtrasIntro />
      <DiyExtrasTileList />
    </main>
    <footer>
      <DiyExtrasFooter />
    </footer>
  </BApp>
</template>

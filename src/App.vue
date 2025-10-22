<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Extra resources | DIY Planet Search' });

configure({ tagId: 'G-CQCJ1860S7' });
</script>

<template>
  <BApp>
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </BApp>
</template>

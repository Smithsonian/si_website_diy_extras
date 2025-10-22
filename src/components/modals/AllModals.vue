<template>
  <BModal
    title="Mercedes López-Morales: Search for Earth-like Exoplanets"
    id="lopez-morales-modal"
    v-model="showLopezMorales"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <LopezMoralesModalBody />
  </BModal>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/stores/modals';
import { storeToRefs } from 'pinia';

const modalsStore = useModalsStore();
const { showLopezMorales } = storeToRefs(modalsStore);
</script>

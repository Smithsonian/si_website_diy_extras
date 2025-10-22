<template>
  <BModal
    title="Henrietta Swan Leavitt: Measuring the Universe"
    id="leavitt-modal"
    v-model="showLeavitt"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <HenriettaLeavittModalBody />
  </BModal>
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
const { showLeavitt, showLopezMorales } = storeToRefs(modalsStore);
</script>

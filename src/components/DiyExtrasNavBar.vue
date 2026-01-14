<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand :href="DATA_LABS_BASE">
      <img src="/src/assets/DataLabsLogo@2x.webp" height="45" width="195" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <img
          class="d-inline-block align-top"
          src="/src/assets/diy_extras_logo.svg"
          height="36"
          width="415"
        />
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem :href="DIY_URL" variant="light" opacity-hover="75" class="text-uppercase">
        DIY Planet Search
      </BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<script setup lang="ts">
import { DIY_URL } from '@/constants';
import { DATA_LABS_BASE } from '@/constants';
</script>

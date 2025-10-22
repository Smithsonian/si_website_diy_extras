<template>
  <div class="mb-3">
    <video ref="videoPlayer" class="video-js">
      <slot></slot>
    </video>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';

interface PlayerOtherOptions {
  poster?: string;
}

// Video JS doesn't provide a type for its options
const props = withDefaults(defineProps<{ otherOptions?: PlayerOtherOptions }>(), {
  otherOptions: () => ({}),
});

let player: Player | null = null;

const videoPlayer = useTemplateRef('videoPlayer');

onMounted(() => {
  if (!videoPlayer.value) {
    return;
  }
  player = videojs(videoPlayer.value, {
    controls: true,
    fluid: true,
    ...props.otherOptions,
  });
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});
</script>

<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/henrietta_leavitt_measuring_the_universe-20250910.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Henrietta Swan Leavitt (1868-1921) was an American astronomer who was hired as a “computer” at
      the Harvard College Observatory, and became an expert at stellar photometry—measuring the
      changing brightnesses of thousands of stars as imaged onto photographic glass plates. Thom
      Burns, the Curator of the Harvard Glass Plate Collection at the Center for Astrophysics
      Harvard-Smithsonian, describes Leavitt's groundbreaking measurements that paved the way for
      understanding the scale of the universe.
    </p>
    <p class="mb-0">Running time: 7:02</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/henrietta_leavitt_measuring_the_universe_poster.jpg';
import captions from '@/assets/video_metadata/henrietta_leavitt_measuring_the_universe.vtt';
</script>

<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/video_extra_mercedes-20250910.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Astrophysicist Dr. Mercedes López-Morales at the Smithsonian Astrophysical Observatory is a
      specialist in studying the atmospheres of exoplanets. To try to answer the question "Are we
      alone?", she describes the progress that has been made so far to identify and categorize
      planets using the transiting method - as well as the challenges ahead to identify an exoplanet
      that may have life outside our solar system.
    </p>
    <p class="mb-0">Running time: 5:29</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/video_extra_mercedes_poster.jpg';
import captions from '@/assets/video_metadata/video_extra_mercedes.vtt';
</script>

<template>
  <div class="bg-diye-red" style="min-height: 700px">
    <BContainer class="pt-5">
      <BRow>
        <BCol cols="12" xxl="10" offset-xxl="1">
          <BCardGroup columns>
            <a href="">
              <DiyExtrasTile
                title="Henrietta Swan Leavitt: Measuring the Universe"
                :img-url="henriettaUrl"
                img-alt="Old black-and-white photo portrait of a woman"
              >
                <p>
                  Henrietta Swan Leavitt (1868-1921) was an American astronomer who was hired as a
                  “computer” at the Harvard College Observatory, and became an expert at stellar
                  photometry—measuring the changing brightnesses of thousands of stars as imaged
                  onto photographic glass plates. Thom Burns, the Curator of the Harvard Glass Plate
                  Collection at the Center for Astrophysics Harvard-Smithsonian, describes Leavitt's
                  groundbreaking measurements that paved the way for understanding the scale of the
                  universe.
                </p>
                <p class="mb-0">Running time: 6:54</p>
              </DiyExtrasTile>
            </a>
            <a href="" @click="handleLopezMoralesClick">
              <DiyExtrasTile
                title="Mercedes López-Morales: Search for Earth-like Exoplanets"
                :img-url="mercedesUrl"
                img-alt="A woman speaks to the camera"
              >
                <p>
                  Astrophysicist Dr. Mercedes López-Morales at the Smithsonian Astrophysical
                  Observatory is a specialist in studying the atmospheres of exoplanets. To try to
                  answer the question "Are we alone?", she describes the progress that has been made
                  so far to identify and categorize planets using the transiting method - as well as
                  the challenges ahead to identify an exoplanet that may have life outside our solar
                  system.
                </p>
                <p class="mb-0">Running time: 5:29</p>
              </DiyExtrasTile>
            </a>
            <a href="https://my.matterport.com/show/?m=m9ozTg7QiUi">
              <DiyExtrasTile
                title="Harvard Plate Stacks: 3D Virtual Tour"
                :img-url="harvardUrl"
                img-alt="A workbench in front of wall with many photos"
              >
                The Harvard College Observatory's Astronomical Photographic Glass Plate Collection
                (Plate Stacks) is the largest collection of its kind in the world. The core of the
                collection is over 550,000 glass plate negatives and spectral images, covering both
                the northern and southern hemispheres. Hundreds of women studied and curated the
                Harvard Plate Stacks while making discoveries of their own, but more often than not
                their work went unrecognized.
              </DiyExtrasTile>
            </a>
            <a href="https://my.matterport.com/show/?m=axmx4L8BGfJ">
              <DiyExtrasTile
                title="The Great Refractor: 3D Virtual Tour"
                :img-url="refractorUrl"
                img-alt="Inside the dome of a telescope taller than a person"
              >
                This 15-inch telescope was installed in Cambridge, Massachusetts in 1847. Named the
                "Great Refractor," it was the largest and most significant telescope in the United
                States for 20 years, spurring the development of the Harvard College Observatory.
                Housed in the Sears Tower, which is the oldest building of the complex at the Center
                for Astrophysics, the Great Refractor was used to discover the eighth satellite of
                Saturn in 1848, and it was used by J.A. Whipple to take the first daguerreotype of a
                star.
              </DiyExtrasTile>
            </a>
          </BCardGroup>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import henriettaUrl from '@/assets/video_metadata/henrietta_leavitt_measuring_the_universe_poster.jpg';
import mercedesUrl from '@/assets/video_metadata/video_extra_mercedes_poster.jpg';
import harvardUrl from '@/assets/harvard_plate_stacks@2x.webp';
import refractorUrl from '@/assets/the_great_refractor@2x.webp';
import { useModalsStore } from '@/stores/modals';

const modalsStore = useModalsStore();

const handleLopezMoralesClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showLopezMorales = true;
};
</script>

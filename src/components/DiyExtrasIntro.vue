<template>
  <div class="bg-gen-black">
    <div class="diy-extras-intro-header-image text-light d-flex flex-column justify-content-end">
      <BContainer>
        <BRow>
          <BCol cols="12" xl="10" xxl="8" offset-xxl="1">
            <p class="mb-5">
              Your participation in DIY Planet Search — measuring the changing brightness of distant
              stars — connects to both the history and to the future of astronomical discovery.
              Explore these videos and virtual tours to find out how.
            </p>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<style>
.diy-extras-intro-header-image {
  background-image:
    linear-gradient(0deg, rgb(66 42 22 / 100%) 0%, rgb(66 42 22 / 0%) 100%),
    url(/src/assets/diy_extras_banner_half.jpeg);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top 70% left 50%;
  min-height: 402px;
}
</style>

<script setup lang="ts">
import Stars from "./Stars.vue";
</script>

<template>
  <div class="border-[#D1D7DC] border-2 p-6">
    <div class="font-bold text-2xl">Featured review</div>
    <div>
      <div class="flex gap-2 pt-2">
        <img src="/images/review.svg" />
        <div>
          <p class="font-bold">Kenan H.</p>
          <p>8 courses</p>
          <p>4 reviews</p>
        </div>
      </div>
      <div class="flex gap-2">
        <Stars /> <label class="text-[#6A6F73]">3 years ago </label>
      </div>
      <P>
        This is really good course, especially the part of Joseph's lecture. The
        background slides could be better designed, and better planned for video
        frame integration, but its ok. I love Joseph's apperience, voice and way
        of speaking. The collar on the yellow shirt is a special motivational
        detail. :) Thank you for great value of the course, and I see you in the
        next lecture!
      </P>
      <p class="py-4 text-sm">Was this review helpful?</p>
      <div>
        <div class="flex gap-4">
          <i
            class="fas fa-thumbs-up border-[#2D2F31] border-2 rounded-full p-2"
          ></i>
          <i
            class="fas fa-thumbs-down border-[#2D2F31] border-2 rounded-full p-2"
          ></i>
          <p><a href="#">Report</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

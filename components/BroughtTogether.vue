<script setup lang="ts">
import BroughtTogetherTile from "./BroughtTogetherTile.vue";
</script>

<template>
  <div class="p-6 flex flex-col gap-4 border-[#D1D7DC] border-2">
    <p class="text-[24px] font-bold">Frequently Bought Together</p>
    <BroughtTogetherTile src='images/lady.jpg' />
    <BroughtTogetherTile src='images/man.jpg.svg' />
    <BroughtTogetherTile src='images/team.svg' />
    <div class="flex justify-between">
      <p>Total: $254.97</p>
      <div
        class="bg-[#A435F0] p-3 text-[#ffffff] font-[16px] hover:bg-[#8B2BC0]"
      >
        Add all to cart
      </div>
    </div>
  </div>
</template>

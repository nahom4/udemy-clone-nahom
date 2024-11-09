<script setup lang="ts">
import RoundedButton from './RoundedButton.vue';
</script>

<template>
    <div>
        <p class="font-bold text-[24px]">Explore related topics</p>
        <div class="flex gap-3 flex-wrap py-2">
            <RoundedButton text="PMI PMBOK"/>
            <RoundedButton text="PMI Project Management Professional (PMP)"/>
            <RoundedButton text="Project Management"/>
            <RoundedButton text="Business"/>
        </div>
    </div>
</template>
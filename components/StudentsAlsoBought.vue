<template>
    <v-container>
      <P class="font-bold text-2xl pb-4">Students also bought</P>
      <div>
        <PreviousCourses src="/images/pole.svg"/>
        <PreviousCourses src="/images/thumbs_up.svg"/>
        <PreviousCourses src="/images/man_sitting.svg"/>
        <PreviousCourses src="/images/pole.svg"/>
        <PreviousCourses src="/images/thumbs_up.svg"/>
        
        <div v-if="isExpanded">
          <PreviousCourses src="/images/man_sitting.svg"/>
          <PreviousCourses src="/images/pole.svg"/>
          <PreviousCourses src="/images/thumbs_up.svg"/>
        </div>
        
        <v-btn
          v-if="!isExpanded"
          @click="toggleContent"
          class="mt-4 w-full text-[#2D2F31] font-bold !bg-transparent"
        >
          Show More
        </v-btn>
  
        <v-btn
          v-if="isExpanded"
          @click="toggleContent"
          class="mt-4 w-full text-[#2D2F31] font-bold !bg-transparent"
        >
          Show Less
        </v-btn>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isExpanded: false, 
      };
    },
    methods: {
      toggleContent() {
        this.isExpanded = !this.isExpanded; 
      },
    },
  };
  </script>
  
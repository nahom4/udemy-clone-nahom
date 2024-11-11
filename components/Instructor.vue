<template>
    <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Instructor</h2>
      <div class="flex items-start">
    
        <div>
          <h3 class="text-xl font-semibold text-indigo-600">Joseph Phillips</h3>
          <p class="text-gray-600 text-sm mb-2">
            PMP, PMI-ACP, Project+, ITIL, PSM I, CTT+
          </p>
  

          <div class="flex">
            <img
            src="/images/review.svg"
            alt="Instructor Photo"
            class="w-24 h-24 rounded-full mr-4"
            />
  
            <div class="flex text-sm text-gray-500 mb-4 flex-col">
              <div class="">
                <span class="text-yellow-500 mr-1">&#9733;</span>
                <span>4.6 Instructor Rating</span>
              </div>
              <div class="flex items-center">
                <span class="mr-1">👥</span>
                <span>265,105 Reviews</span>
              </div>
              <div class="flex items-center">
                <span class="mr-1">📚</span>
                <span>871,385 Students</span>
              </div>
              <div class="flex items-center">
                <span class="mr-1">🎓</span>
                <span>40 Courses</span>
              </div>
            </div>
          </div>
  
          <!-- Bio -->
          <p class="text-gray-700 my-2">
            <P class="font-bold"> Keep Moving Forward!</P>
            <span v-if="showMore">
              {{ fullBio }}</span>
            <span v-else>{{ truncatedBio }}</span>
          </p>
  
          <!-- Show More Button -->
          <button
            @click="toggleShowMore"
            class="text-indigo-600 font-semibold"
          >
            {{ showMore ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMore: false,
        fullBio: `
         
          Joseph Phillips is the best-selling author and project management instructor.
          He has more than 25 years of experience as a project management consultant, educator, technology consultant, 
          business owner, and technical writer. He has consulted as a project manager for a range of businesses, 
          including startups, hospitals, architectural firms, and manufacturers.
          Joseph is passionate about helping people learn and master project management.
          He has led both in-person and virtual project management training sessions.
        `,
      };
    },
    computed: {
      truncatedBio() {
        return this.fullBio.slice(0, 150) + '...';
      },
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  };
  </script>
  
  
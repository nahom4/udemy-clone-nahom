<template>
    <div v-if="showBanner" class="fixed top-0 left-0 right-0 flex flex-col items-start bg-gray-900 text-white px-6 py-1 shadow-md z-50 transition-opacity duration-300">
        <div class="block w-full">
            <span class="font-semibold text-lg mr-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                PMP Exam Prep Seminar - Complete Exam Coverage with 35 PDUs
            </span>
        </div>
        <div class="block w-full mt-2">
            <span class="bg-yellow-200 text-black font-bold text-xs px-2 py-1 rounded mr-2 hover:bg-yellow-300 cursor-pointer">
                Bestseller
            </span>

            <span class="text-yellow-400 font-semibold text-base mr-1">4.6</span>
            <span class="text-yellow-400 mr-2">★</span>

            <a href="#" class="text-blue-400 hover:underline text-sm mr-4">
                (110,083 ratings)
            </a>

            <span class="text-gray-400 text-sm">
                362,715 students
            </span>
        </div>
    </div>
</template>

  
  <script>
  export default {
    name: 'TopBanner',
    data() {
      return {
        showBanner: false, 
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll); // Clean up event listener
    },
    methods: {
      handleScroll() {
        // Show banner after scrolling down 100 pixels
        this.showBanner = window.scrollY > 100;
      },
    },
  };
  </script>
  
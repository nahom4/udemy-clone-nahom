<template>
  <div>
    <!-- Component that sticks on scroll, with conditional video section -->
    <div
      class="fixed top-20 right-20 w-96 bg-white border border-gray-300 p-6 shadow-lg rounded-lg"
    >
      <!-- Video Section - Only shows when not scrolled -->
      <div v-if="!isScrolled" class="mb-4">
        <img
          src="/images/man.jpg.svg"
          alt="Course Preview"
          class="w-full rounded"
        />
        <button
          class="w-full bg-black text-white font-bold py-2 mt-2 rounded-lg hover:bg-gray-900 transition duration-200 ease-in-out"
        >
          Preview this course
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex justify-around text-gray-700 font-semibold mb-6">
        <button class="hover:underline transition duration-200 ease-in-out">
          Personal
        </button>
        <button class="hover:underline transition duration-200 ease-in-out">
          Teams
        </button>
      </div>

      <!-- Main Content -->
      <h2 class="text-lg font-bold mb-2">Subscribe to Udemy’s top courses</h2>
      <p class="text-sm mb-4">
        Get this course, plus 12,000+ of our top-rated courses, with Personal
        Plan.
      </p>

      <button
        class="w-full bg-purple-600 text-white font-bold py-3 rounded-lg mb-4 hover:bg-purple-700 transition duration-200 ease-in-out"
      >
        Try Personal Plan for free
      </button>

      <p class="text-center text-gray-500 text-sm mb-4">
        Starting at $10.00 per month after trial<br />Cancel anytime
      </p>

      <div class="flex items-center justify-center mb-4">
        <hr class="w-full border-gray-300" />
        <span class="px-2 text-gray-500 text-sm">or</span>
        <hr class="w-full border-gray-300" />
      </div>

      <div class="text-center mb-4">
        <p class="text-2xl font-semibold mb-2">$84.99</p>
        <button
          class="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition duration-200 ease-in-out"
        >
          Go to cart
        </button>
      </div>

      <p class="text-gray-500 text-sm text-center mb-6">
        30-Day Money-Back Guarantee<br />Full Lifetime Access
      </p>

      <div class="flex justify-around text-purple-600 font-semibold mb-4">
        <button class="hover:underline transition duration-200 ease-in-out">
          Share
        </button>
        <button class="hover:underline transition duration-200 ease-in-out">
          Gift this course
        </button>
        <button class="hover:underline transition duration-200 ease-in-out">
          Apply Coupon
        </button>
      </div>

      <div class="bg-gray-100 p-2 rounded mb-4 text-gray-600 text-sm">
        <p><span class="font-semibold">LETSLEARNNOW</span> is applied</p>
      </div>

      <div class="flex gap-2">
        <input
          type="text"
          placeholder="Enter Coupon"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out"
        />
        <button
          class="bg-gray-800 text-white font-bold px-4 rounded hover:bg-gray-900 transition duration-200 ease-in-out"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100; // Adjust this value as needed
    },
  },
};
</script>

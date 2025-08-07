<template>
      <div class="bg-white  p-4 border">
                <img :src="src" alt="CAPM Exam Prep" class="h-40 object-cover rounded-lg mb-4">
                <h3 class="text-lg font-semibold">CAPM Exam Prep Seminar - Updated for the 2023 CAP</h3>
                <p class="text-gray-600">Joseph Phillips</p>
                <div class="flex items-center mt-2">
                    <span class="text-yellow-500 text-sm mr-1">4.7</span>
                    <span class="text-yellow-500 text-sm mr-1">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <span class="text-gray-500 text-sm">(348)</span>
                </div>
                <p class="text-gray-500 text-sm mt-1">44.5 total hours • 451 lectures • All Levels</p>
                <p class="text-lg font-bold mt-3">$84.99</p>
            </div>
</template>

<script>
    export default {
        name: 'PreviousCourses',
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>
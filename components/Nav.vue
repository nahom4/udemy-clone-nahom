<template>
  <div class="flex gap-4 justify-between p-6 text-[#2D2F31] items-center">
    <div>
      <img src="/images/logo-udemy.svg.svg" />
    </div>
    <div>Categorie</div>
    <div
      class="w-full md:w-[45%] bg-[#F7F9FA] rounded-2xl p-2 border-black border-2 flex items-center"
    >
      <i class="fas fa-search px-2"></i>
      <input
        type="text"
        placeholder="Search for anything"
        class="bg-transparent w-full focus:outline-none"
      />
    </div>
    <div class="justify-between items-center" style="width: 500px; display: flex;">
      <div class="hover:text-blue-500 cursor-pointer">Udemy Business</div>
      <div class="hover:text-blue-500 cursor-pointer">Tech on Udemy</div>
      <div>
        <i class="fas fa-shopping-cart"></i>
      </div>
      <div
        class="border-2 border-black px-2 py-1 hover:bg-gray-200 cursor-pointer"
      >
        Login
      </div>
      <div
        class="p-2 font-bold bg-black text-white hover:bg-gray-800 cursor-pointer"
      >
        Sign Up
      </div>
      <div
        class="border-2 border-black px-2 py-1 hover:bg-gray-200 cursor-pointer"
      >
        <i class="fas fa-globe-americas"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>

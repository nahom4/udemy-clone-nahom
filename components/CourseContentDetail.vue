<template>
    <div class="flex flex-col gap-6">
      <p class="text-[#2D2F31] text-[24px] font-bold">Course content</p>
      <div class="flex justify-between pt-4">
        <p>32 sections • 380 lectures • 29h 53m total length</p>
        <p
          class="text-[#5022C3] font-bold text-[14px] cursor-pointer"
          @click="toggleExpandAll"
        >
          {{ expandAll ? 'Collapse all sections' : 'Expand all sections' }}
        </p>
      </div>
      <div>
        <CourseDescription
          title="Get the Most from this course"
          time="10 lectures • 49min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="PMBOK Guide, Sixth Edition"
          time="12 lectures • 1hr 15min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Define Project Management Foundations"
          time="8 lectures • 40min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Related Areas of Project Management"
          time="15 lectures • 1hr 30min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Project Management Components"
          time="7 lectures • 35min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Project Environments"
          time="9 lectures • 50min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Role of the Project Manager"
          time="10 lectures • 55min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Implementing Project Integration Management"
          time="11 lectures • 1hr 5min"
          :expanded="expandAll"
        />
        <CourseDescription
          title="Managing the Project Scope"
          time="13 lectures • 1hr 10min"
          :expanded="expandAll"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expandAll: false,
      };
    },
    methods: {
      toggleExpandAll() {
        this.expandAll = !this.expandAll;
      },
    },
  };
  </script>
  
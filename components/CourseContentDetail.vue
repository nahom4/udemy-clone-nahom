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

    <v-expansion-panels v-model="expandedPanels" multiple>
      <CourseDescription
        v-for="(section, index) in courseSections"
        :key="index"
        :title="section.title"
        :time="section.time"
        :value="index"
      />
    </v-expansion-panels>
  </div>
</template>

<script>
import CourseDescription from './CourseDescription.vue';

export default {
  components: { CourseDescription },
  data() {
    return {
      expandAll: false,
      expandedPanels: [],
      courseSections: [
        { title: "Get the Most from this course", time: "10 lectures • 49min" },
        { title: "PMBOK Guide, Sixth Edition", time: "12 lectures • 1hr 15min" },
        { title: "Define Project Management Foundations", time: "8 lectures • 40min" },
        { title: "Related Areas of Project Management", time: "15 lectures • 1hr 30min" },
        { title: "Project Management Components", time: "7 lectures • 35min" },
        { title: "Project Environments", time: "9 lectures • 50min" },
        { title: "Role of the Project Manager", time: "10 lectures • 55min" },
        { title: "Implementing Project Integration Management", time: "11 lectures • 1hr 5min" },
        { title: "Managing the Project Scope", time: "13 lectures • 1hr 10min" },
      ]
    };
  },
  methods: {
    toggleExpandAll() {
      this.expandAll = !this.expandAll;
      this.expandedPanels = this.expandAll
        ? this.courseSections.map((_, index) => index)
        : [];
    }
  }
};
</script>

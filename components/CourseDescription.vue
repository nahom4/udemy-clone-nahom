<template>
  <v-expansion-panel :value="value">
    <v-expansion-panel-header>
      <template #actions>
        <v-icon>mdi-chevron-down</v-icon>
      </template>
      <div class="flex justify-between w-full items-center">
        <p class="font-bold text-[16px] text-start">{{ title }}</p>
        <p class="text-end px-4">{{ time }}</p>
      </div>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-row>
        <v-col cols="6">
          <p>Description: Welcome to the PMP Exam Prep Seminar</p>
        </v-col>
        <v-col cols="6">
          <p>Time: 03:16</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <p>Description: Certificate of Completion</p>
        </v-col>
        <v-col cols="6">
          <p>Time: 03:51</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <p>Description: Frequently Asked Questions</p>
        </v-col>
        <v-col cols="6">
          <p>Time: 04:35</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <p>Description: Explore the Entire Course</p>
        </v-col>
        <v-col cols="6">
          <p>Time: 07:05</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <p>Description: All About the PMP Exam Details</p>
        </v-col>
        <v-col cols="6">
          <p>Time: 07:10</p>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'CourseDescription',
  props: {
    title: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    }
  }
};
</script>

<template>
    <v-container style="padding: 0px !important;">
      <v-expansion-panels>
        <v-expansion-panel >
          <v-expansion-panel-header :value="true" style=" background-color: #F7F9FA !important; padding: 4px;  display: flex; justify-content: space-around; text-align: start;">
            <template #actions>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
            <p class="font-bold text-[16px]">{{ title }}</p>
          <p class="text-end px-4">{{ time }}</p>
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
  
            <v-row>
              <v-col cols="6">
                <p>Description: All About the PMP Exam</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 03:59</p>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="6">
                <p>Description: PMP Exam Application Audit</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 06:14</p>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="6">
                <p>Description: PMP Coach: Getting Started</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 03:24</p>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="6">
                <p>Description: PMP Exam - January 2, 2021</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 06:13</p>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="6">
                <p>Description: 90-Question Pre-Assessment Exam</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 90 questions</p>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="6">
                <p>Description: Section Summary: Preparing to Pass the PMP Exam</p>
              </v-col>
              <v-col cols="6">
                <p>Time: 02:56</p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </template>
  
  <script>

  export default {
    name: 'CourseAccordion',
    props: {
        title: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        expanded: {
      type: Boolean,
      default: false,
    },
    }
  }

  </script>
  
  <style scoped>
  /* Additional styling can go here if needed */
  </style>
  
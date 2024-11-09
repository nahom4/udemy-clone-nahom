<script setup lang="ts">
import CourseIncludes from '~/components/CourseIncludes.vue';
import LearningObjectives from '~/components/LearningObjectives.vue';
import RelatedTopics from '~/components/RelatedTopics.vue';
import TopCompanies from '~/components/TopCompanies.vue';
</script>


<template>
  <div>
    <Nav></Nav>
    <Header></Header>
    <main class="w-[80%] mx-auto">
      <div class="w-[60%] p-8">
        <promo/>
        <LearningObjectives/>
        <RelatedTopics/>
        <CourseIncludes/>
        <TopCompanies/>
        <div>
          container
          <div>
            Prepare for your certification with this course.
          </div>
          <div>
            What you'll learn
          </div>
          <div>
            Explore related topics
          </div>
          <div>
            This course includes:
          </div>
          <div>
            Top companies offer this course to their employees
          </div>
          <div>
            course Content 
          </div>
          <div>
            course Content Accordion
          </div>
    
          <div>
            Requirements
          </div>
    
          <div>
            Description
          </div>
    
          <div>
            Featured review
          </div>
    
        </div>
      </div>
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<style>
</style>

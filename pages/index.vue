<script setup lang="ts">
import BroughTogetherTile from '~/components/BroughtTogetherTile.vue';
import CourseContentDetail from '~/components/CourseContentDetail.vue';
import CourseIncludes from '~/components/CourseIncludes.vue';
import FeaturedReview from '~/components/FeaturedReview.vue';
import Instructor from '~/components/Instructor.vue';
import LearningObjectives from '~/components/LearningObjectives.vue';
import MoreCourseByJoseph from '~/components/MoreCourseByJoseph.vue';
import RelatedTopics from '~/components/RelatedTopics.vue';
import SideBar from '~/components/SideBar.vue';
import StudentsAlsoBought from '~/components/StudentsAlsoBought.vue';
import TopCompanies from '~/components/TopCompanies.vue';
</script>


<template>
  <div>
    <Banner/>
    <Nav/>
    <Header/>
    <SideBar/>
    <main class="w-[80%] mx-auto">
      <!-- <SideBar/> -->
      <div class="w-[60%] p-8 flex flex-col gap-8" style="min-width: 700px;">
        <promo/>
        <LearningObjectives/>
        <RelatedTopics/>
        <CourseIncludes/>
        <TopCompanies/>
        <CourseContentDetail/>
        <FeaturedReview/>
        <StudentsAlsoBought/>
        <BroughtTogether/>
        <Instructor/>
        <MoreCourseByJoseph/>
      </div>
    </main>
    <footer id="footer">
      <Footer/>
    </footer>
  </div>
</template>

<style>
</style>

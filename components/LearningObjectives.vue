<template>
    <div class="p-6 border-2 border-[#D1D7DC]">
        <P class="text-[#2D2F31] text-[24px] font-bold py-4">What you'll learn</P>
        <div class="flex flex-row gap-6">
            <div>
                <LearningObjectiveTile text="Earn 35 PDUs/Contact Hours by completing the entire course, enhancing your professional skills."></LearningObjectiveTile>
                <LearningObjectiveTile text="Complete the course and gain 35 PDUs/Contact Hours to expand your knowledge in the field."></LearningObjectiveTile>
                <LearningObjectiveTile text="Achieve 35 PDUs/Contact Hours and boost your career prospects by finishing the course."></LearningObjectiveTile>
                <LearningObjectiveTile text="Earn valuable PDUs/Contact Hours (35) by completing the course and advancing your expertise."></LearningObjectiveTile>
                <div v-if="isExpanded">
                    <LearningObjectiveTile text="Complete the course and receive 35 PDUs/Contact Hours, contributing to your professional development."></LearningObjectiveTile>
                    <LearningObjectiveTile text="By finishing the course, you will earn 35 PDUs/Contact Hours to demonstrate your commitment to professional growth."></LearningObjectiveTile>
                </div>
            </div>
            <div>
                <LearningObjectiveTile text="Complete the course and unlock 35 PDUs/Contact Hours to expand your qualifications."></LearningObjectiveTile>
                <LearningObjectiveTile text="Earn 35 PDUs/Contact Hours upon completing the course, marking a key milestone in your professional journey."></LearningObjectiveTile>
                <LearningObjectiveTile text="Achieve 35 PDUs/Contact Hours by finishing the course, enhancing your credentials in the industry."></LearningObjectiveTile>
                <LearningObjectiveTile text="Gain 35 PDUs/Contact Hours upon completing the course, advancing your career opportunities."></LearningObjectiveTile>
                <div v-if="isExpanded">
                    <LearningObjectiveTile text="Upon course completion, you will earn 35 PDUs/Contact Hours to further your professional development."></LearningObjectiveTile>
                    <LearningObjectiveTile text=" Complete the course and gain 35 PDUs/Contact Hours to expand your knowledge in the field."></LearningObjectiveTile>
                </div>
            </div>
           
        </div>
        
        <v-btn
            v-if="!isExpanded"
            @click="toggleContent"
            class="!text-[#5022C3]"
            plain
            text
            >
            Show More <i class="fas fa-chevron-down"></i>
            </v-btn>
    
            <v-btn
            v-if="isExpanded"
            @click="toggleContent"
            class="!text-[#5022C3]"
            plain
            text
            >
            Show Less <i class="fas fa-chevron-up"></i>
        </v-btn>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false, 
    };
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded; 
    },
  },
};
</script>

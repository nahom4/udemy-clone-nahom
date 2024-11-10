<template>
    <div>
        <p class="text-[24px] font-bold py-2">This course includes:</p>
        <div class="flex ">
            <div class="w-[50%] flex flex-col gap-1">
                <CourseContent iconClass="fas fa-video" text="29.5 hours on-demand video" />
                <CourseContent iconClass="fas fa-clipboard-list" text="2 practice tests" />
                <CourseContent iconClass="fas fa-tasks" text="Assignments" />
                <CourseContent iconClass="fas fa-book" text="7 articles" />
            </div>            
            <div class="w-[50%]  flex-col gap-1">
                <CourseContent iconClass="fas fa-download" text="20 downloadable resources" />
                <CourseContent iconClass="fas fa-mobile-alt" text="Access on mobile and TV" />
                <CourseContent iconClass="fas fa-closed-captioning" text="Closed captions" />
                <CourseContent iconClass="fas fa-certificate" text="Certificate of completion" />
            </div>
        </div>
    </div>
</template>
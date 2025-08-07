<template>
    <div class="flex border-b-2 border-[#D1D7DC] py-4">
        <div class="flex gap-2">
            <img :src="src">
            <div class="flex flex-col gap-1">
                <div class="flex gap-4 flex-wrap">
                    <p class="font-bold w-[50%]">
                        PMP Certification Exam Prep Course 35
                        PDU Contact Hours/PDU 
                       
                    </p>
                    <div class="flex gap-4 items-center">
                        <div>
                            4.7 <i class="fas fa-star text-[#B4690E]"></i>
                        </div>
    
                        <div>
                            <i class="fas fa-users"></i> 354,623
                        </div>
    
                        <div>
                            <i class="fas fa-dollar-sign"></i> 4.7
                        </div>
    
                        <div>
                            4.7 <i class="fas fa-heart p-2 rounded-full border-2"></i>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2">
    
                    <div class="font-semibold p-1 text-sm bg-[#ECEB98]">
                        Bestseller
                     </div>
                     <label class="text-[#1E6055] font-bold">
                        35 total hours
                     </label>
                     <label>
                        Updated 10/2024
                     </label>
                </div>
            </div>
        </div>
        

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
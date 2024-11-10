<template>
    <div class="flex justify-around">
        <div class="flex gap-4" >

            <img :src="src">
            <div class="flex flex-col gap-1">
                <p class="font-[16px] font-bold">
                    PMP Exam Prep Seminar - Complete Exam
                    <label class="block">Coverage with 35 PDUs</label>  
                </p>
                <p class="font-[12px] text-[#6A6F73]">
                    Joseph Phillips
                </p>
                <p class="flex gap-2">4.6  <Stars/> </p>
                <div>
                    <label class="p-1 bg-yellow-200 !inline-block">
                            Bestseller
                    </label>
                </div>
            </div>
        </div>
        <p class=" font-bold">
            $84.99
        </p>
    </div>
</template>

<script>
    export default {
        name: 'BroughtTogetherTile',
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>
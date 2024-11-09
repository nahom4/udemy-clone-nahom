<template>
    <div class="p-2 rounded-3xl border-2 font-bold text-[16px] border-black">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

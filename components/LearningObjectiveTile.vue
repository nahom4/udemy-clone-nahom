<template>
    <div class="flex gap-4">
        <i class="fas fa-check"></i>
        <p>{{ text }}</p>
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

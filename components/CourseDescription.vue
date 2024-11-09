<template>
    <v-container>
    <v-accordion>
      <v-accordion-item title="Accordion 1">
        <p>This is the content of the first accordion item.</p>
      </v-accordion-item>
      <v-accordion-item title="Accordion 2">
        <p>This is the content of the second accordion item.</p>
      </v-accordion-item>
      <v-accordion-item title="Accordion 3">
        <p>This is the content of the third accordion item.</p>
      </v-accordion-item>
    </v-accordion>
  </v-container>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<template lang="pug">
  v-flex.pa-0(xs12 grow)
    v-sheet.font-weight-thin.white--text.px-4(:color="color" :class="{ 'headline': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp, 'py-2': $vuetify.breakpoint.smAndDown, 'py-4': $vuetify.breakpoint.mdAndUp}") {{ text }}
</template>
<script>
export default {
  props: {
    color: String,
    text: String
  }
}
</script>

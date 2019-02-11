<template lang="pug">
  v-flex.pa-0(xs12 grow)
    v-sheet.font-weight-thin.white--text.px-4(:color="color" :class="{ 'headline': $breakpoint.is('smAndDown'), 'display-1': $breakpoint.is('mdAndUp'), 'py-2': $breakpoint.is('smAndDown'), 'py-4': $breakpoint.is('mdAndUp')}") {{ text }}
</template>
<script>
export default {
  props: {
    color: String,
    text: String
  }
}
</script>

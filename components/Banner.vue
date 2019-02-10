<template lang="pug">
  v-flex(xs12 grow)
    v-sheet.display-2.font-weight-thin.white--text.pa-4(:color="color") {{ text }}
</template>
<script>
export default {
  props: {
    color: String,
    text: String
  }
}
</script>

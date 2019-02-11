<template lang="pug">
  v-img.pa-0.ma-0(src="distant_forest.jpg" :height="imgHeight" width="100%" position="bottom center")
    v-card-text.standout.white--text.pa-4.font-weight-thin(:class="{'headline': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}")
      | Coder,
      br
      | designer,
      br
      | maker.
</template>
<script>
export default {
  computed: {
    imgHeight: function() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'calc(100vh - 56px)'
      } else {
        return '100vh'
      }
    }
  }
}
</script>

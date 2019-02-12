<template lang="pug">
  v-img.pa-0.ma-0(src="distant_forest.jpg" :height="imgHeight" width="100%" position="bottom center")
    v-card-text.standout.white--text.pa-4.font-weight-thin(:class="{'display-1': $breakpoint.is('smAndDown'), 'display-3': $breakpoint.is('mdAndUp')}")
      | Think.
      br
      | Code.
      br
      | Test.
      br
      | Repeat.
</template>
<script>
export default {
  computed: {
    imgHeight: function() {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return 'calc(100vh - 56px)'
      } else {
        return '100vh'
      }
    }
  }
}
</script>

<template lang="pug">
  v-img.pa-0.ma-0(src="blue_wall.jpg" :height="imgHeight" width="100%" position="top center")
    v-layout.px-3.ma-0(justify-end align-start fill-height)
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
<style scoped>
>>>.standout {
  text-shadow: 2px 2px 7px #000000!important;
}
</style>

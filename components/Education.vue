<template lang="pug">
  fragment
    v-flex.py-0(xs11 sm8 md5 lg4 shrink v-for="item in education" :key="item.degree")
      v-card(:class="verticalSpace" elevation="10")
        v-layout(justify-center)
          v-flex.pa-4(xs12)
            v-img(width="100%" src="monash.svg" position="center center")
        v-divider
        v-card-text.font-weight-thin(:class="{ headline: $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}") {{ item.degree }}
        v-divider
        v-card-text.subheading.pb-1.pt-3 {{ item.institution }} | {{ item.year }}
        v-card-text.subheading.py-2
          span(v-html="item.notes")
</template>
<script>
export default {
  props: {
    education: Array
  },
  computed: {
    verticalSpace: function() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 'my-3'
      } else {
        return 'my-5'
      }
    }
  }
}
</script>



<template lang="pug">
  fragment
    v-flex.py-0(xs11 sm8 md5 lg4 shrink v-for="item in education" :key="item.degree")
      v-card(:class="verticalSpace" elevation="10")
        v-card-text.headline {{ item.degree }}
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



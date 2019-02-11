<template lang="pug">
  fragment
    v-flex.pa-0(xs11 md9 lg8 :class="verticalSpace" grow v-for="value, key in skills" :key="key")
      v-card(light color="grey lighten-4" elevation="10")
        v-card-title.font-weight-thin(:class="{ headline: $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}") {{ key }}
        v-divider
        v-layout(row wrap justify-space-around)
          v-flex.ma-3.pa-0.text-xs-center(min-width="200px" v-for="item in value" :key="item.title") 
            v-icon(:size="iconSize" color="grey darken-3") {{ item.icon }}
            .font-weight-thin(:class="{ 'body-2': $vuetify.breakpoint.smAndDown, headline: $vuetify.breakpoint.mdAndUp}") {{ item.title }}
</template>
<script>
export default {
  props: {
    skills: Object
  },
  computed: {
    iconSize: function() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 40
      } if (this.$vuetify.breakpoint.smOnly) {
        return 70
      } else {
        return 100
      }
    },
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

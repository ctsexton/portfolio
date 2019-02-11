<template lang="pug">
  fragment
    v-flex.ma-0.pa-0(xs11 sm10 md8 lg7 grow v-for="item in experience" :key="item.title")
      v-card(:class="verticalSpace" elevation="10" color="grey lighten-4")
        v-img(:src="item.image")
        v-divider
        v-layout.mx-1.my-2.pa-0(wrap align-baseline)
          v-flex.ma-0.text-xs-left.font-weight-light(xs12 md6 :class="{ headline: $breakpoint.is('smAndDown'), 'display-1': $breakpoint.is('mdAndUp')}") {{ item.title }}
          v-flex.ma-0.text-md-right(xs12 md6 :class="{ subheading: $breakpoint.is('smAndDown'), 'headline': $breakpoint.is('mdAndUp')}") {{ item.role }}
        v-divider
        v-card-text
          p.body-2.font-weight-light {{ item.time }} | {{ item.location }}
          p.title.font-weight-light
            i {{ item.description }}
          ul
            li.subheading.font-weight-light.my-1(v-for="point, index in item.bullets" :key="index") {{ point }}
          v-layout.mt-3(wrap align-baseline)
            v-flex.title.font-weight-light(xs12 md6) Link:
              | 
              a.blue--text.text-nodec(:href="item.link") {{ item.link }}
            v-flex.title.font-weight-light(xs12 md6 v-if="item.code") Code:
              | 
              a.blue--text.text-nodec(:href="item.code") {{ item.code }}
        v-divider
        v-card-text.pb-2
          p.title Tech Stack:
            | 
            span.font-weight-light(v-for="tool, index in item.tools" :key="tool") {{ tool }}
              span(v-if="index != Object.keys(item.tools).length - 1")
                |,
                |
</template>
<script>
export default {
  props: {
    experience: Array
  }, computed: {
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
<style scoped>
>>>.text-nodec {
  text-decoration: none;
}
>>>.text-nodec:hover {
  text-decoration: underline;
}
>>>a {
  word-break: break-word;
}
</style>

<template lang="pug">
  fragment
    v-flex.ma-0.pa-0(xs11 sm10 md8 grow v-for="item in experience" :key="item.title")
      v-card(:class="verticalSpace" elevation="10" color="grey lighten-4")
        //v-img(:src="item.image")
        v-divider
        v-layout.mx-2.my-3.pa-0(wrap align-baseline)
          v-flex.ma-0.text-xs-left.font-weight-light(xs12 md6 :class="{ headline: $breakpoint.is('smAndDown'), 'headline': $breakpoint.is('mdAndUp')}") {{ item.title }}
          v-flex.ma-0.text-md-right(xs12 md6 :class="{ subheading: $breakpoint.is('smAndDown'), 'subheading': $breakpoint.is('mdAndUp')}") {{ item.role }}
        v-divider
        v-card-text
          p.body-1.font-weight-light {{ item.time }} | {{ item.location }}
          p.my-4.title.font-weight-light
            i {{ item.description }}
          ul
            li.body-2.font-weight-light.my-1(v-for="point, index in item.bullets" :key="index")
              span(v-html="point")
          v-layout.mt-3(wrap align-baseline)
            v-flex.body-2.font-weight-light(xs12 v-if="item.link") Link:
              | 
              a.blue--text.text-nodec(:href="item.link") {{ item.link }}
            v-flex.body-2.font-weight-light(xs12 v-if="item.code") Code:
              | 
              a.blue--text.text-nodec(:href="item.code") {{ item.code }}
        v-divider
        v-card-text.pb-2
          p.body-2 Tech Stack:
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

<template lang="pug">
  fragment
    v-flex(xs11 grow).ma-0
      v-layout(justify-space-around wrap)
        v-flex(xs12 sm10 md5 :class="verticalSpace" v-for="item in projects" :key="item.title")
          v-card(elevation="10" color="grey lighten-4")
            v-img(:src="item.image")
            v-divider
            v-card-text.font-weight-light.ma-0.pb-0
              p.display-1.text-xs-left.font-weight-light {{ item.title }}
            v-divider
            v-card-text.py-1
              p.title.font-weight-light(v-if="item.description")
                i {{ item.description }}
              ul.my-2
                li.subheading.font-weight-light.my-1(v-for="point, index in item.bullets" :key="index") {{ point }}
              p.my-1.subheading.font-weight-light Link:
                | 
                a.blue--text.text-nodec(:href="item.link") {{ item.link }}
              p.my-1.subheading.font-weight-light(v-if="item.code") Code:
                | 
                a.blue--text.text-nodec(:href="item.code") {{ item.code }}
            v-divider
            v-card-text.pb-1
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
    projects: Array
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


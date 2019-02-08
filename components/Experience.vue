<template lang="pug">
  fragment
    v-flex(xs8 grow).ma-0
      v-card.ma-5(v-for="item in experience" :key="item.title" elevation="10" color="grey lighten-4")
        v-img(:src="item.image")
        v-divider
        v-card-text.font-weight-light.ma-0.pb-0
          v-layout(align-baseline)
            v-flex(xs6)
              p.display-1.text-xs-left.font-weight-light {{ item.title }}
            v-flex(xs6)
              p.headline.text-xs-right {{ item.role }}
        v-divider
        v-card-text
          p.body-2.font-weight-light {{ item.time }} | {{ item.location }}
          p.title.font-weight-light
            i {{ item.description }}
          ul
            li.subheading.font-weight-light.my-1(v-for="point, index in item.bullets" :key="index") {{ point }}
          v-layout.mt-3(align-baseline)
            v-flex.title.font-weight-light(xs6) Link:
              | 
              a.blue--text.text-nodec(:href="item.link") {{ item.link }}
            v-flex.title.font-weight-light(xs6 v-if="item.code") Code:
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
</style>

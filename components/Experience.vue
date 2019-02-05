<template lang="pug">
  fragment
    v-flex(xs8 grow).ma-0
      v-card.semiTransparent.ma-5(v-for="item in experience" :key="item.title" elevation="10")
        v-img(:src="item.image")
        v-card-text.font-weight-thin.ma-0.pb-0
          v-layout(align-baseline)
            v-flex(xs6)
              p.display-1.text-xs-left.font-weight-thin {{ item.title }}
            v-flex(xs6)
              p.headline.text-xs-right {{ item.role }}
        v-divider
        v-card-text
          p.body-2.font-weight-thin {{ item.time }} | {{ item.location }}
          p.title.font-weight-thin
            i {{ item.description }}
          ul
            li.subheading.font-weight-thin.my-1(v-for="point, index in item.bullets" :key="index") {{ point }}
          v-layout.mt-3(align-baseline)
            v-flex.title.font-weight-thin(xs6) Link:
              | 
              a.blue--text.text-nodec(:href="item.link") {{ item.link }}
            v-flex.title.font-weight-thin(xs6 v-if="item.code") Code:
              | 
              a.blue--text.text-nodec(:href="item.code") {{ item.code }}
        v-divider
        v-card-text.pb-2
          p.title Tech Stack:
            | 
            span.font-weight-thin(v-for="tool, index in item.tools" :key="tool") {{ tool }}
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

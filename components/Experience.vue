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
        v-card-text
          p.subheading.font-weight-thin Tech Stack:
            | 
            span(v-for="tool, index in item.tools" :key="tool") {{ tool }}
              span(v-if="index != Object.keys(item.tools).length - 1")
                |,
                |
        v-card-text.subheading {{ item.description }}
        v-card-text.subheading Link: {{ item.link }}
        v-card-text.subheading(v-if="item.code") Code: {{ item.code }}
</template>
<script>
export default {
  props: {
    experience: Array
  }
}
</script>
<style scoped>
>>>.lighterTransparency {
  background: rgba(150, 150, 150, 0.3);
}
</style>

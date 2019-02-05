<template lang="pug">
  fragment
    v-flex(xs8 grow)
      v-card.semiTransparent.my-5(v-for="item in projects" :key="item.title")
        v-img(:src="item.image")
        v-card-text.display-1 {{ item.title }}
        v-card-text.subheading {{ item.description }}
        v-card-text.subheading Link: {{ item.link }}
        v-card-text.subheading(v-if="item.code") Code: {{ item.code }}
</template>
<script>
export default {
  props: {
    projects: Array
  }
}
</script>


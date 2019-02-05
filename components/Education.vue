<template lang="pug">
  fragment
    v-flex(xs4 v-for="item in education" :key="item.degree")
      v-card.semiTransparent.my-5
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
  }
}
</script>



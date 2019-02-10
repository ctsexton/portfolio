<template lang="pug">
  fragment
    v-flex.py-0(xs12 v-for="item in education" :key="item.degree")
      v-card.my-0(elevation="10")
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



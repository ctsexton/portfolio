<template lang="pug">
  fragment
    v-flex(xs12 grow).ma-0
      v-card.my-5
        v-card-text.body-2 {{ about.description }}
</template>
<script>
export default {
  props: {
    about: Object
  }
}
</script>


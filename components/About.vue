<template lang="pug">
  fragment
    v-flex(xs8 grow)
      v-card.semiTransparent.my-5
        v-card-text.body-2 {{ about.description }}
</template>
<script>
export default {
  props: {
    about: Object
  }
}
</script>


<template lang="pug">
  fragment
    v-flex(xs8)
      v-card.semiTransparent.my-5
        v-layout
          v-flex.pa-4(xs4)
            v-img(src="profilepic.jpg")
          v-flex(xs6)
            v-card-text.display-1 Cameron Sexton
            v-card-text.headline Software Developer
</template>
<script>
export default {
  props: {
    profile: Object
  }
}
</script>

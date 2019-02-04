<template lang="pug">
  v-flex
    v-flex.ma-5(xs8 grow v-for="value, key in skills" :key="key")
      v-card.semiTransparent(elevation="10")
        v-card-title.display-1 {{ key }}
        v-divider
        v-layout.pa-2(row wrap justify-space-around)
          v-flex.headline(xs3 grow v-for="item in value" :key="item") {{ item }}
</template>
<script>
export default {
  props: {
    skills: Object
  }
}
</script>

<template lang="pug">
  fragment
    v-flex.ma-0(xs12 grow v-for="value, key in skills" :key="key")
      v-card(light color="grey lighten-4" elevation="10")
        v-card-title.display-1.font-weight-thin {{ key }}
        v-divider
        v-layout.pa-2(row wrap justify-space-around)
          v-flex.text-xs-center(xs6 grow v-for="item in value" :key="item.title") 
            v-icon(size="40" color="grey darken-3") {{ item.icon }}
            .body-1.font-weight-thin.my-1 {{ item.title }}
</template>
<script>
export default {
  props: {
    skills: Object
  }
}
</script>

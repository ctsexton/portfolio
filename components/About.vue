<template lang="pug">
  fragment
    v-flex(xs11 sm10 md10 grow).ma-0
      v-card.my-5(elevation="10" color="grey lighten-4")
        v-card-text
          p.blockquote.left-border.font-weight-light(:class="{ headline: $breakpoint.is('smAndDown'), 'headline': $breakpoint.is('mdAndUp')}") {{ about.quote }}
          p.font-weight-light(v-for="para in about.description" v-html="para" :class="{ 'title': $breakpoint.is('smAndDown'), 'body-2': $breakpoint.is('mdAndUp')}")
          p.body-2 Location:
            | 
            span.font-weight-thin {{ about.location }}
          p.body-2 Read my code:
            | 
            a.no-dec.font-weight-light.blue--text(:href="about.github" target="_blank") {{ about.github }}
          v-divider.my-4
          p.subheading What I bring to the table:
          ul.body-2.font-weight-light
            li.my-3(v-for="item, index in about.whatIBring" :key="index")
              span(v-html="item")
</template>
<script>
export default {
  props: {
    about: Object
  }
}
</script>
<style scoped>
>>>.left-border {
  border-left: 5px solid black;
}
>>>.no-dec {
  text-decoration: none;
}
</style>

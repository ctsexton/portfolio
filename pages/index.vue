<template lang="pug">
  v-layout(column justify-start)
    v-layout(row wrap justify-space-around id="About")
      banner(color="rgba(0, 50, 255, 0.4)" text="About")
      v-flex(xs8 grow)
        v-card.semiTransparent.my-5
          v-card-text.body-2 {{ content.about.description }}
    v-layout(row wrap justify-space-around id="Skills")
      banner(color="rgba(0, 255, 0, 0.4)" text="Skills")
      skills(:skills="content.skills")
    v-layout(row wrap justify-space-around id="Experience")
      banner(color="rgba(255, 20, 20, 0.4)" text="Experience")
      v-flex(xs8 grow)
        v-card.semiTransparent.my-5(v-for="item in content.portfolio" :key="item.title")
          v-img(:src="item.image")
          v-card-text.display-1 {{ item.title }}
          v-card-text.subheading {{ item.description }}
          v-card-text.subheading Link: {{ item.link }}
          v-card-text.subheading(v-if="item.code") Code: {{ item.code }}
    v-layout(row wrap justify-space-around id="Education")
      banner(color="rgba(230, 0, 255, 0.4)" text="Education")
      v-flex(xs4 v-for="item in content.education" :key="item.degree")
        v-card.semiTransparent.my-5
          v-card-text.headline {{ item.degree }}
          v-divider
          v-card-text.subheading.pb-1.pt-3 {{ item.institution }} | {{ item.year }}
          v-card-text.subheading.py-2
            span(v-html="item.notes")
    v-layout(row wrap justify-center id="Contact")
      banner(color="rgba(60, 40, 30, 0.4)" text="Contact")
      v-flex(xs8 grow)
        v-card.semiTransparent.my-5
          Contact
</template>

<script>
import Contact from '~/components/ContactForm.vue'
import Banner from '~/components/Banner.vue'
import Skills from '~/components/Skills.vue'
import content from '~/static/content.md'
export default {
  components: {
    Contact,
    Banner,
    Skills
  },
  data () {
    return {
      content: content.attributes,
    }
  }
}
</script>
<style scoped>
>>>.semiTransparent {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

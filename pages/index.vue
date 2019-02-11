<template lang="pug">
  v-layout(column justify-start fill-height)
    v-layout.pa-0(id="top")
      coverPhoto
    v-layout(row wrap justify-space-around id="About")
      banner(color="rgba(0, 50, 255, 0.4)" text="About")
      about(:about="content.about")
    v-layout(row wrap justify-space-around id="Experience")
      banner(color="rgba(255, 20, 20, 0.4)" text="Experience")
      experience(:experience="content.experience")
    v-layout(row wrap justify-space-around id="Projects")
      banner(color="rgba(255, 225, 0, 0.4)" text="Projects")
      projects(:projects="content.portfolio")
    v-layout(row wrap justify-space-around id="Skills")
      banner(color="rgba(0, 255, 0, 0.4)" text="Skills")
      skills(:skills="content.skills")
    v-layout(row wrap justify-space-around id="Education")
      banner(color="rgba(230, 0, 255, 0.4)" text="Education")
      education(:education="content.education")
    v-layout(row wrap justify-center id="Contact")
      banner(color="rgba(60, 40, 30, 0.4)" text="Contact")
      contact
</template>

<script>
import Profile from '~/components/Profile.vue'
import Contact from '~/components/ContactForm.vue'
import Banner from '~/components/Banner.vue'
import Skills from '~/components/Skills.vue'
import Projects from '~/components/Projects.vue'
import About from '~/components/About.vue'
import Education from '~/components/Education.vue'
import Experience from '~/components/Experience.vue'
import CoverPhoto from '~/components/CoverPhoto.vue'
import content from '~/static/content.md'
export default {
  components: {
    About,
    Contact,
    Banner,
    Skills,
    Projects,
    Experience,
    Profile,
    Education,
    CoverPhoto
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
>>>.standout {
  text-shadow: 5px 5px 10px black;
}
</style>

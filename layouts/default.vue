<template>
  <v-app>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      width="200"
      light
      class="elevation-5 grey lighten-3"
    >
      <v-layout
        justify-center
        align-center 
        class="blue darken-2 py-4 click" 
        v-scroll-to="'#top'">
        <v-flex xs6>
          <div class="headline white--text font-weight-thin">Cameron<br>Sexton</div>
          <div class="body-1 white--text font-weight-thin">Software Developer</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          router
          v-scroll-to="'#' + item.title"
          :to="'/'"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon :color="item.color" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-thin subheading black--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content class="texture">
      <v-container grid-list-md class="py-0 px-1" fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import content from '~/static/content.md'
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        hoverLogo: false,
        content: content.attributes,
        items: [
          { icon: 'perm_identity', title: 'About', to: '/', color: 'blue' },
          { icon: 'trending_up', title: 'Experience', to: '/', color: 'pink' },
          { icon: 'build', title: 'Projects', to: '/', color: 'yellow darken-1' },
          { icon: 'assessment', title: 'Skills', to: '/', color: 'green' },
          { icon: 'school', title: 'Education', to: '/', color: 'purple' },
          { icon: 'mail', title: 'Contact', to: '/', color: 'brown' },
        ],
      }
    }
  }
</script>
<style scoped>
.texture {
  background-color: #a8a79b;
  background-image: url('/old-mathematics.png');
  background-repeat: repeat;
  background-attachment: scroll;
  position: relative;
}
>>>.click {
  cursor: pointer;
}
</style>

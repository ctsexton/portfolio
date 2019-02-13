<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width="200"
      light
      class="elevation-5 grey lighten-3"
    >
      <v-layout
        justify-center
        hidden-md-and-down
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
          v-scroll-to="{el: '#' + item.title, offset: scrollOffset}"
          :to="'/'"
          @click="onMenuSelect"
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
    <v-layout v-if="$breakpoint.is('mdAndDown')">
      <v-toolbar fixed app dark class="blue darken-2">
        <v-icon @click="drawer = !drawer">fas fa-bars</v-icon>
        <v-toolbar-title>Cameron Sexton</v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <v-content class="texture">
      <v-container grid-list-md class="py-0 px-0" fluid fill-height>
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
        drawer: null,
        isMounted: false,
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
    },
    computed: {
      scrollOffset: function() {
        if (this.$vuetify.breakpoint.smAndDown) {
          return -56
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return -64
        } else {
          return 0
        }
      }
    },
    methods: {
      onMenuSelect: function() {
        if (this.$vuetify.breakpoint.mdAndDown) {
          this.drawer = !this.drawer
        }
      }
    }
  }
</script>
<style scoped>
.texture {
  background-color: #fff;
  background-image: url('/old-mathematics.png');
  background-repeat: repeat;
  background-attachment: scroll;
  position: relative;
  overflow: hidden;
}
>>>.click {
  cursor: pointer;
}
</style>

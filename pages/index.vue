<template>
  <section>
    <HeroMain />
    <NavBar />
    <transition-group name="appearLeft" mode="in-out">
      <AboutMain v-if="navChosen == 'about'" key="about" />
      <WatercolorMain v-if="navChosen == 'watercolor'" key="watercolor" />
      <DesignMain v-if="navChosen == 'design'" key="design" />
      <ContactMain v-if="navChosen == 'contact'" key="contact" />
    </transition-group>
    <SocialMain />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },
  computed: {
    navChosen () {
      return this.$store.state.navChosen
    }
  },
  methods: {}

}
</script>
<style lang="scss">

</style>

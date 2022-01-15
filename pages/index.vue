<template>
  <section>
    <div class="horizontal-scroll-wrapper">
      <div class="main">
        <HeroMain />
        <About />
      </div>
    </div>
    <NavBar />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {}
  },
  mounted () {
  },
  destroyed () {

  },
  methods: {}

}
</script>
<style lang="scss">

.main{
  height: 100vh;
  min-width: 100vw;
  background:$color1;
  display: flex;
}
.horizontal-scroll-wrapper {
  background: $color1;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar{
    display: none;
  }
  div{
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  }
}

</style>

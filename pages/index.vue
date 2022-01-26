<template>
  <section class="main">
    <HeroMain />
    <NavBar />
    <transition name="appearLeft" mode="out-in">
      <AboutMain v-if="navChosen=='AboutMain'" key="AboutMain" />
      <WatercolorMain v-if="navChosen=='WatercolorMain'" key="WatercolorMain" :gallery="images.waterColor" />
      <DesignMain v-if="navChosen=='DesignMain'" key="DesignMain" :gallery="images.waterColor" />
      <ContactMain v-if="navChosen=='ContactMain'" key="ContactMain" />
    </transition>
    <SocialMain />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      images: {
        waterColor: [
          { name: '01.png', img: '', description: 'Almendras', hover: false },
          { name: '02.png', img: '', description: 'Manzanas', hover: false },
          { name: '03.png', img: '', description: 'Globos', hover: false },
          { name: '04.png', img: '', description: 'Bananas', hover: false },
          { name: '05.png', img: '', description: 'Bolas de Pool', hover: false },
          { name: '06.png', img: '', description: 'Bolas de Pool de lejos', hover: false },
          { name: '07.png', img: '', description: 'Edificio', hover: false },
          { name: '08.png', img: '', description: 'J Q K', hover: false },
          { name: '09.png', img: '', description: 'Naipes', hover: false },
          { name: '10.png', img: '', description: 'Zanahorizontales', hover: false },
          { name: '11.png', img: '', description: 'Stack', hover: false },
          { name: '12.png', img: '', description: 'Monedas', hover: false },
          { name: '13.png', img: '', description: 'Cómodo', hover: false }
        ]
      }
    }
  },
  computed: {
    navChosen () {
      return this.$store.state.navChosen
    }
  },
  mounted () {
    this.images.waterColor.forEach((pic) => {
      const img = new Image()
      img.src = require('../assets/img/gallery/' + pic.name)
      pic.img = img
    })
    const background = new Image()
    background.src = require('../assets/img/acuarela1.jpg')
  }

}
</script>
<style lang="scss">
.hide{
  width: 0;
}

.main{
  width: 100vw;
}
</style>

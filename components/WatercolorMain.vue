<template>
  <section class="watercolor --flex-jus-start --flex-col --fixed-on-top">
    <h1>ACUARELAS</h1>
    <p>Diseños en acuarelas originales, pintados a mano. Tamaños diversos según tu búsqueda. Tarjetas personalizadas, cuadros (con marco y vidrio), adaptaciones del diseño requerido a láminas y stickers. </p>
    <button v-if="!visit" class="--button-send" @click="($e)=>{momentaryClass($e,'--button-clicked',1000);visitClicked(1000)}">
      Visitar Galería
    </button>
    <GalleryNav v-if="visit" :gallery="gallery" />
  </section>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => ['']
    }
  },
  data () {
    return {
      visit: false
    }
  },
  methods: {
    visitClicked (duration) {
      setTimeout(() => {
        this.visit = true
      }, duration)
    }
  }

}
</script>

<style lang="scss" scoped>

.watercolor{
  position: relative;
  background-image: url(../assets/img/acuarela1.jpg);
  background-color: $color6;
  background-attachment: fixed;
  color: $color5;
  font-weight: 600;
  &__title{
    width: 300px;
  }
}

</style>

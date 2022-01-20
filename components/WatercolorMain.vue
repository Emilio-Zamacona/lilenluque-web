<template>
  <section class="watercolor --flex-col --fixed-on-top">
    <h1>ACUARELAS</h1>
    <p>Diseños en acuarelas originales, pintados a mano. Tamaños diversos según tu búsqueda. Tarjetas personalizadas, cuadros (con marco y vidrio), adaptaciones del diseño requerido a láminas y stickers. </p>
    <GalleryNav :gallery="gallery" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      gallery: [
        { name: '01.png', description: 'Almendras', hover: false },
        { name: '02.png', description: 'Manzanas', hover: false },
        { name: '03.png', description: 'Globos', hover: false },
        { name: '04.png', description: 'Bananas', hover: false },
        { name: '05.png', description: 'Bolas de Pool', hover: false },
        { name: '06.png', description: 'Bolas de Pool de lejos', hover: false },
        { name: '07.png', description: 'Edificio', hover: false },
        { name: '08.png', description: 'J Q K', hover: false },
        { name: '09.png', description: 'Naipes', hover: false },
        { name: '10.png', description: 'Zanahorizontales', hover: false },
        { name: '11.png', description: 'Stack', hover: false },
        { name: '12.png', description: 'Monedas', hover: false },
        { name: '13.png', description: 'Cómodo', hover: false }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.watercolor{
  background: rgb(172, 97, 246);
}

</style>
